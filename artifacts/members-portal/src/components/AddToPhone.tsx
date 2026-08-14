import { useEffect, useState, createContext, useContext, useCallback } from "react";
import { X, Share, SquarePlus, Smartphone, Check, Clock } from "lucide-react";
import { isStandalone } from "@/lib/pwa";
import { supabase } from "@/lib/supabase";

// ── Storage keys ──────────────────────────────────────────────────
const DISMISSED_KEY    = "courtside_pwa_prompt_dismissed";   // "1" = permanently dismissed
const REMIND_AFTER_KEY = "courtside_pwa_prompt_remind_after"; // ms timestamp — snooze until then
const SEVEN_DAYS_MS    = 7 * 24 * 60 * 60 * 1000;

const EASY_URL = "gabbycole.com/courtsideconversation";
const PINK = "#FF2D78";
const TEAL = "#00D4C8";
const BASE = import.meta.env.BASE_URL;

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;
if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
  });
}

// ── Platform helpers ──────────────────────────────────────────────
function isIos(): boolean {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function isAndroid(): boolean {
  return /Android/i.test(navigator.userAgent);
}

function isChrome(): boolean {
  return /Chrome\//.test(navigator.userAgent) && !/Edg\/|OPR\//.test(navigator.userAgent);
}

function isMobile(): boolean {
  return isIos() || isAndroid();
}

// ── Persistence helpers ───────────────────────────────────────────
function isPermanentlyDismissed(): boolean {
  try { return localStorage.getItem(DISMISSED_KEY) === "1"; } catch { return false; }
}

function isSnoozed(): boolean {
  try {
    const until = Number(localStorage.getItem(REMIND_AFTER_KEY) ?? "0");
    return until > Date.now();
  } catch { return false; }
}

function shouldShowBanner(): boolean {
  return !isPermanentlyDismissed() && !isSnoozed();
}

/** Permanently dismiss — saves to localStorage immediately, then syncs to Supabase. */
async function saveDismissed(): Promise<void> {
  try { localStorage.setItem(DISMISSED_KEY, "1"); } catch { /* ignore */ }
  try { localStorage.removeItem(REMIND_AFTER_KEY); } catch { /* ignore */ }
  try {
    await supabase.auth.updateUser({ data: { pwa_prompt_dismissed: true } });
  } catch { /* non-fatal — localStorage is the primary signal */ }
}

/** Snooze for 7 days. */
function saveRemindLater(): void {
  try { localStorage.setItem(REMIND_AFTER_KEY, String(Date.now() + SEVEN_DAYS_MS)); } catch { /* ignore */ }
}

// ── Context ───────────────────────────────────────────────────────
interface AddToPhoneContextValue {
  openWalkthrough: () => void;
}

const AddToPhoneContext = createContext<AddToPhoneContextValue>({ openWalkthrough: () => {} });

export function useAddToPhone() {
  return useContext(AddToPhoneContext);
}

// ── Provider ──────────────────────────────────────────────────────
export function AddToPhoneProvider({ children }: { children: React.ReactNode }) {
  const [walkthroughOpen, setWalkthroughOpen] = useState(false);
  const [bannerVisible, setBannerVisible]     = useState(false);

  useEffect(() => {
    // Already installed — mark done silently and never show.
    if (isStandalone()) {
      saveDismissed();
      return;
    }

    // Fast localStorage check first.
    if (!shouldShowBanner()) return;

    // Check Supabase user metadata asynchronously.
    // If the server says dismissed, honour it and sync locally.
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user?.user_metadata?.pwa_prompt_dismissed) {
        try { localStorage.setItem(DISMISSED_KEY, "1"); } catch { /* ignore */ }
        return; // Don't show.
      }
      setBannerVisible(true);
    }).catch(() => {
      // If Supabase is unreachable, fall back to localStorage decision.
      setBannerVisible(true);
    });

    // Listen for native install event.
    const onInstalled = () => { saveDismissed(); setBannerVisible(false); };
    window.addEventListener("appinstalled", onInstalled);
    return () => window.removeEventListener("appinstalled", onInstalled);
  }, []); // ← runs once on initial mount only

  const openWalkthrough = useCallback(() => setWalkthroughOpen(true), []);

  async function handleDone() {
    await saveDismissed();
    setBannerVisible(false);
    setWalkthroughOpen(false);
  }

  function handleRemindLater() {
    saveRemindLater();
    setBannerVisible(false);
    setWalkthroughOpen(false);
  }

  return (
    <AddToPhoneContext.Provider value={{ openWalkthrough }}>
      {children}
      {bannerVisible && !walkthroughOpen && (
        <InstallBanner
          onOpen={() => setWalkthroughOpen(true)}
          onDone={handleDone}
          onRemindLater={handleRemindLater}
        />
      )}
      {walkthroughOpen && (
        <InstallWalkthrough
          onClose={handleDone}        // X = permanent dismissal
          onDone={handleDone}
          onRemindLater={handleRemindLater}
        />
      )}
    </AddToPhoneContext.Provider>
  );
}

// ── Banner ────────────────────────────────────────────────────────
function InstallBanner({
  onOpen,
  onDone,
  onRemindLater,
}: {
  onOpen: () => void;
  onDone: () => void;
  onRemindLater: () => void;
}) {
  const mobile = isMobile();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4" style={{ pointerEvents: "none" }}>
      <div
        className="max-w-md mx-auto rounded-lg p-4 flex items-start gap-3 shadow-2xl"
        style={{ backgroundColor: "#111", border: `1px solid ${PINK}50`, pointerEvents: "auto" }}
      >
        <img
          src={`${BASE}icons/cc-icon-192.png`}
          alt="Courtside Conversations icon"
          className="w-12 h-12 rounded-lg shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#fff" }}>
            Add Courtside to your phone
          </p>
          <p className="mt-1" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", lineHeight: 1.5 }}>
            {mobile
              ? "Get one-tap access from your home screen — just like an app."
              : <>Open <span style={{ color: TEAL, fontWeight: 600 }}>{EASY_URL}</span> on your phone to add the app to your home screen.</>}
          </p>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <button
              onClick={onOpen}
              style={{ backgroundColor: PINK, color: "#fff", border: "none", padding: "0.45rem 1rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer", borderRadius: 4 }}
            >
              Show me how
            </button>
            <button
              onClick={onDone}
              style={{ backgroundColor: "transparent", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.2)", padding: "0.45rem 1rem", fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer", borderRadius: 4 }}
            >
              Done — I added it
            </button>
            <button
              onClick={onRemindLater}
              style={{ backgroundColor: "transparent", color: "rgba(255,255,255,0.35)", border: "none", padding: "0.45rem 0.5rem", fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer" }}
            >
              Remind me in 7 days
            </button>
          </div>
        </div>
        {/* X = permanent dismissal */}
        <button
          onClick={onDone}
          aria-label="Dismiss permanently"
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", padding: 4 }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

// ── Walkthrough modal ─────────────────────────────────────────────
function InstallWalkthrough({
  onClose,
  onDone,
  onRemindLater,
}: {
  onClose: () => void;
  onDone: () => void;
  onRemindLater: () => void;
}) {
  const ios          = isIos();
  const mobile       = isMobile();
  const canNativeInstall = deferredPrompt !== null;

  async function handleNativeInstall() {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    deferredPrompt = null;
    if (choice.outcome === "accepted") onDone();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-md rounded-lg p-8 max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: "#111", border: "1px solid rgba(255,255,255,0.12)" }}
      >
        {/* X = permanent dismissal */}
        <button
          onClick={onClose}
          aria-label="Dismiss permanently"
          className="absolute top-4 right-4"
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", padding: 4 }}
        >
          <X size={18} />
        </button>

        <img
          src={`${BASE}icons/cc-icon-192.png`}
          alt="Courtside Conversations icon"
          className="w-16 h-16 rounded-xl mb-5"
        />

        <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: "1.35rem", marginBottom: "0.75rem", color: "#fff", lineHeight: 1.3 }}>
          Put Courtside on your home screen
        </h2>
        <p className="mb-6" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.7 }}>
          One tap, full screen, straight into the member area. No app store needed.
        </p>

        {/* iOS */}
        {mobile && ios && (
          <ol className="mb-8 space-y-4">
            {[
              { icon: <Share size={18} color={TEAL} />, text: <>Tap the <strong style={{ color: "#fff" }}>Share</strong> button in Safari's toolbar</> },
              { icon: <SquarePlus size={18} color={TEAL} />, text: <>Scroll down and tap <strong style={{ color: "#fff" }}>Add to Home Screen</strong></> },
              { icon: <Check size={18} color={TEAL} />, text: <>Tap <strong style={{ color: "#fff" }}>Add</strong> — the CC icon appears on your home screen</> },
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: `${TEAL}18`, border: `1px solid ${TEAL}40` }}>
                  {step.icon}
                </span>
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.6, paddingTop: 4 }}>{step.text}</span>
              </li>
            ))}
          </ol>
        )}

        {/* Android */}
        {mobile && !ios && (
          <div className="mb-8">
            {canNativeInstall ? (
              <button
                onClick={handleNativeInstall}
                className="w-full flex items-center justify-center gap-2"
                style={{ backgroundColor: PINK, color: "#fff", border: "none", padding: "0.875rem 2rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", cursor: "pointer" }}
              >
                <Smartphone size={16} />
                Install the app
              </button>
            ) : !isChrome() ? (
              <div className="space-y-4">
                <div className="rounded-lg p-4" style={{ backgroundColor: `${PINK}18`, border: `1px solid ${PINK}50` }}>
                  <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: PINK, marginBottom: "0.5rem" }}>
                    Use Chrome for best results
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                    It looks like you're using a browser that doesn't fully support home screen installation.{" "}
                    <strong style={{ color: "#fff" }}>Open this page in Chrome</strong> to get the full app experience with the Courtside icon.
                  </p>
                </div>
                <ol className="space-y-4 mt-4">
                  {[
                    { icon: <Smartphone size={18} color={TEAL} />, text: <>Download <strong style={{ color: "#fff" }}>Google Chrome</strong> from the Play Store if you don't have it</> },
                    { icon: <Share size={18} color={TEAL} />, text: <>Open Chrome and go to <strong style={{ color: "#fff" }}>members.gabbycole.com</strong>, then log in</> },
                    { icon: <SquarePlus size={18} color={TEAL} />, text: <>Tap the <strong style={{ color: "#fff" }}>⋮ menu → Add to Home screen</strong> — the CC icon will appear</> },
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: `${TEAL}18`, border: `1px solid ${TEAL}40` }}>
                        {step.icon}
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.6, paddingTop: 4 }}>{step.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <ol className="space-y-4">
                {[
                  { icon: <Share size={18} color={TEAL} />, text: <>Tap the <strong style={{ color: "#fff" }}>⋮ menu</strong> in Chrome's top-right corner</> },
                  { icon: <SquarePlus size={18} color={TEAL} />, text: <>Tap <strong style={{ color: "#fff" }}>Add to Home screen</strong></> },
                  { icon: <Check size={18} color={TEAL} />, text: <>Tap <strong style={{ color: "#fff" }}>Add</strong> — the CC icon appears on your home screen</> },
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: `${TEAL}18`, border: `1px solid ${TEAL}40` }}>
                      {step.icon}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.6, paddingTop: 4 }}>{step.text}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}

        {/* Desktop */}
        {!mobile && (
          <div className="mb-8 rounded-lg p-5" style={{ backgroundColor: `${TEAL}0d`, border: `1px solid ${TEAL}30` }}>
            <div className="flex items-start gap-3">
              <Smartphone size={20} color={TEAL} className="shrink-0 mt-0.5" />
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                You're on a computer. Grab your phone and open{" "}
                <strong style={{ color: TEAL }}>{EASY_URL}</strong>{" "}
                in your phone's browser, log in, and follow the prompt to add Courtside to your home screen.
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <button
            onClick={onDone}
            style={{ backgroundColor: "transparent", border: `1px solid ${TEAL}60`, color: TEAL, padding: "0.75rem 2rem", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer" }}
          >
            Done — I added it
          </button>
          <button
            onClick={onRemindLater}
            className="flex items-center justify-center gap-2"
            style={{ backgroundColor: "transparent", border: "none", color: "rgba(255,255,255,0.4)", padding: "0.5rem", fontFamily: "'Oswald', sans-serif", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer" }}
          >
            <Clock size={13} />
            Remind me in 7 days
          </button>
        </div>
      </div>
    </div>
  );
}
