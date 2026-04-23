import { Router, type IRouter } from "express";
import { createClient } from "@supabase/supabase-js";

const router: IRouter = Router();

// ─── Supabase admin client (service role key bypasses RLS) ───────────────────
const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const GHL_WEBHOOK_SECRET = process.env.GHL_WEBHOOK_SECRET ?? "";

function getSupabase() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase admin credentials not configured");
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

// ─── Map GoHighLevel plan/product names → member tiers ───────────────────────
// Add your exact GoHighLevel product/plan names here
const PLAN_TO_TIER: Record<string, string> = {
  // Courtside Conversations
  "courtside conversations": "courtside",
  "courtside": "courtside",

  // MindSystem — Independent
  "mindsystem independent": "independent",
  "independent": "independent",

  // MindSystem — Supported
  "mindsystem supported": "supported",
  "supported": "supported",

  // MindSystem — Inner Circle
  "mindsystem inner circle": "innerCircle",
  "inner circle": "innerCircle",
  "innercircle": "innerCircle",
};

function planToTier(planName: string): string {
  const key = planName.toLowerCase().trim();
  for (const [k, tier] of Object.entries(PLAN_TO_TIER)) {
    if (key.includes(k)) return tier;
  }
  return "free";
}

// ─── Extract contact info from different GoHighLevel webhook formats ──────────
function extractContact(body: any): { email: string; firstName: string; lastName: string; planName: string } | null {
  const contact = body.contact ?? body.Contact ?? {};
  const email = contact.email ?? contact.Email ?? body.email ?? "";
  if (!email) return null;

  const firstName = contact.firstName ?? contact.first_name ?? contact.FirstName ?? "";
  const lastName = contact.lastName ?? contact.last_name ?? contact.LastName ?? "";

  // Look for plan/product name in various GoHighLevel payload shapes
  const planName =
    body.product?.name ??
    body.order?.title ??
    body.opportunity?.name ??
    body.pipeline_stage?.name ??
    body.customData?.plan ??
    body.plan ??
    body.tags?.[0] ??
    "";

  return { email, firstName, lastName, planName };
}

// ─── POST /api/webhooks/gohighlevel ──────────────────────────────────────────
router.post("/webhooks/gohighlevel", async (req, res) => {
  // Optional: verify shared secret header if configured in GoHighLevel
  if (GHL_WEBHOOK_SECRET) {
    const provided = req.headers["x-webhook-secret"] ?? req.headers["x-ghl-secret"] ?? "";
    if (provided !== GHL_WEBHOOK_SECRET) {
      return res.status(401).json({ error: "Invalid webhook secret" });
    }
  }

  const body = req.body;

  // Only process purchase/payment events (ignore other GHL webhooks)
  const eventType = (body.type ?? body.event ?? "").toLowerCase();
  const isPurchaseEvent =
    eventType === "" || // no type = assume purchase
    eventType.includes("order") ||
    eventType.includes("purchase") ||
    eventType.includes("payment") ||
    eventType.includes("subscription") ||
    eventType.includes("opportunit"); // OpportunityStageChanged

  if (!isPurchaseEvent) {
    return res.json({ received: true, skipped: true, reason: "Not a purchase event" });
  }

  const contact = extractContact(body);
  if (!contact) {
    return res.status(400).json({ error: "Could not extract email from webhook payload" });
  }

  const tier = planToTier(contact.planName);
  const familyName = [contact.firstName, contact.lastName].filter(Boolean).join(" ") || undefined;

  try {
    const supabase = getSupabase();

    const { error } = await supabase.from("approved_members").upsert({
      email: contact.email.toLowerCase().trim(),
      tier,
      family_name: familyName ?? null,
      enrollment_date: new Date().toISOString().split("T")[0],
    }, { onConflict: "email" });

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: error.message });
    }

    console.log(`[GHL Webhook] Approved: ${contact.email} → tier: ${tier}`);
    return res.json({ success: true, email: contact.email, tier });
  } catch (err: any) {
    console.error("Webhook handler error:", err.message);
    return res.status(500).json({ error: err.message });
  }
});

export default router;
