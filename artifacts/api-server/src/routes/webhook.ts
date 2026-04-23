import { Router, type IRouter } from "express";
import { createClient } from "@supabase/supabase-js";

const router: IRouter = Router();

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const GHL_WEBHOOK_SECRET = process.env.GHL_WEBHOOK_SECRET ?? "";

function getSupabase() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase admin credentials not configured");
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

function verifySecret(req: any) {
  if (!GHL_WEBHOOK_SECRET) return true;
  const provided = req.headers["x-webhook-secret"] ?? req.headers["x-ghl-secret"] ?? "";
  return provided === GHL_WEBHOOK_SECRET;
}

// GoHighLevel sends contact data in various shapes — extract email from any of them
function extractEmail(body: any): string {
  return (
    body?.email ??
    body?.contact?.email ??
    body?.Contact?.email ??
    body?.contact_email ??
    body?.Email ??
    ""
  ).toLowerCase().trim();
}

function extractName(body: any): string {
  const first = body?.first_name ?? body?.firstName ?? body?.contact?.firstName ?? body?.contact?.first_name ?? "";
  const last = body?.last_name ?? body?.lastName ?? body?.contact?.lastName ?? body?.contact?.last_name ?? "";
  return [first, last].filter(Boolean).join(" ");
}

async function approveContact(email: string, tier: string, familyName: string) {
  const supabase = getSupabase();
  const { error } = await supabase.from("approved_members").upsert({
    email,
    tier,
    family_name: familyName || null,
    enrollment_date: new Date().toISOString().split("T")[0],
  }, { onConflict: "email" });
  if (error) throw new Error(error.message);
}

// ─── Tier-specific webhook routes ────────────────────────────────────────────
// Use a different URL per plan in GoHighLevel — no body config needed

const TIER_ROUTES: Record<string, string> = {
  "courtside":   "courtside",
  "independent": "independent",
  "supported":   "supported",
  "inner-circle": "innerCircle",
};

for (const [slug, tier] of Object.entries(TIER_ROUTES)) {
  router.post(`/webhooks/ghl/${slug}`, async (req, res) => {
    if (!verifySecret(req)) return res.status(401).json({ error: "Unauthorized" });

    const email = extractEmail(req.body);
    if (!email) return res.status(400).json({ error: "No email found in payload" });

    const name = extractName(req.body);

    try {
      await approveContact(email, tier, name);
      console.log(`[GHL Webhook /${slug}] Approved: ${email} → ${tier}`);
      return res.json({ success: true, email, tier });
    } catch (err: any) {
      console.error(`[GHL Webhook /${slug}] Error:`, err.message);
      return res.status(500).json({ error: err.message });
    }
  });
}

// ─── Generic fallback route (auto-detects tier from plan name in payload) ─────
const PLAN_TO_TIER: Record<string, string> = {
  "courtside": "courtside",
  "independent": "independent",
  "supported": "supported",
  "inner circle": "innerCircle",
  "innercircle": "innerCircle",
};

function planToTier(body: any): string {
  const planRaw = (
    body?.product?.name ?? body?.order?.title ?? body?.opportunity?.name ??
    body?.plan ?? body?.tags?.[0] ?? ""
  ).toLowerCase();
  for (const [k, t] of Object.entries(PLAN_TO_TIER)) {
    if (planRaw.includes(k)) return t;
  }
  return "free";
}

router.post("/webhooks/gohighlevel", async (req, res) => {
  if (!verifySecret(req)) return res.status(401).json({ error: "Unauthorized" });

  const email = extractEmail(req.body);
  if (!email) return res.status(400).json({ error: "No email found in payload" });

  const tier = planToTier(req.body);
  const name = extractName(req.body);

  try {
    await approveContact(email, tier, name);
    console.log(`[GHL Webhook] Approved: ${email} → ${tier}`);
    return res.json({ success: true, email, tier });
  } catch (err: any) {
    console.error("[GHL Webhook] Error:", err.message);
    return res.status(500).json({ error: err.message });
  }
});

export default router;
