import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useCreateReservation } from "@/hooks/use-reservation";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const mutation = useCreateReservation();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        resetAndClose();
        return;
      }
      if (e.key !== "Tab") return;
      const modal = modalRef.current;
      if (!modal) return;
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!firstName || !lastName || !email) {
      setError("Please fill out all fields.");
      return;
    }
    mutation.mutate({ firstName, lastName, email });
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      mutation.reset();
      setFirstName("");
      setLastName("");
      setEmail("");
      setError("");
    }, 300);
  };

  const errorId = "reservation-error";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            ref={modalRef}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg bg-card border border-border shadow-2xl p-8 md:p-12 pointer-events-auto relative overflow-hidden"
            >
              <button
                ref={closeButtonRef}
                onClick={resetAndClose}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close reservation form"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>

              <div className="relative z-10">
                {mutation.isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                      <CheckCircle className="w-10 h-10 text-primary" aria-hidden="true" />
                    </div>
                    <h2 id="modal-title" className="text-3xl font-serif mb-4">You're on the list.</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      Keep an eye on your inbox for the official invitation and link to join the session.
                    </p>
                    <button
                      onClick={resetAndClose}
                      className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-border text-foreground hover:bg-secondary transition-all w-full tracking-wider uppercase text-sm font-semibold min-h-[44px]"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 id="modal-title" className="text-3xl md:text-4xl font-serif mb-2">Reserve Your Spot</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Join The Missing Framework — A Live Training for Youth Sports Families for free.</p>

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="block text-sm font-medium tracking-wide uppercase text-muted-foreground">
                            First Name <span aria-hidden="true" className="text-primary">*</span>
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Jane"
                            disabled={mutation.isPending}
                            aria-required="true"
                            aria-describedby={error ? errorId : undefined}
                            autoComplete="given-name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="block text-sm font-medium tracking-wide uppercase text-muted-foreground">
                            Last Name <span aria-hidden="true" className="text-primary">*</span>
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Doe"
                            disabled={mutation.isPending}
                            aria-required="true"
                            aria-describedby={error ? errorId : undefined}
                            autoComplete="family-name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium tracking-wide uppercase text-muted-foreground">
                          Email Address <span aria-hidden="true" className="text-primary">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="jane@example.com"
                          disabled={mutation.isPending}
                          aria-required="true"
                          aria-describedby={error ? errorId : undefined}
                          autoComplete="email"
                        />
                      </div>

                      {(error || mutation.isError) && (
                        <p id={errorId} role="alert" className="text-destructive text-sm font-medium">
                          {error || mutation.error?.message}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all tracking-wider uppercase text-sm font-bold group mt-4 disabled:opacity-70 disabled:cursor-not-allowed min-h-[44px]"
                        aria-busy={mutation.isPending}
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin mr-2" aria-hidden="true" />
                            <span>Submitting…</span>
                          </>
                        ) : (
                          <>
                            Secure My Seat
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
