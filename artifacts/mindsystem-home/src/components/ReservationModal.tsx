import { useState } from "react";
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
  
  const mutation = useCreateReservation();

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
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg bg-card border border-border shadow-2xl p-8 md:p-12 pointer-events-auto relative overflow-hidden"
            >
              <button
                onClick={resetAndClose}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                {mutation.isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-serif mb-4">You're on the list.</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                      Keep an eye on your inbox for the official invitation and link to join the session.
                    </p>
                    <button
                      onClick={resetAndClose}
                      className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-border text-foreground hover:bg-secondary transition-all w-full tracking-wider uppercase text-sm font-semibold"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-3xl md:text-4xl font-serif mb-2">Reserve Your Spot</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Join The Missing Conversation for free.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-medium tracking-wide uppercase text-muted-foreground">First Name</label>
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Jane"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Last Name</label>
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Doe"
                            disabled={mutation.isPending}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Email Address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="jane@example.com"
                          disabled={mutation.isPending}
                        />
                      </div>

                      {error && (
                        <p className="text-destructive text-sm font-medium">{error}</p>
                      )}
                      {mutation.isError && (
                        <p className="text-destructive text-sm font-medium">{mutation.error.message}</p>
                      )}

                      <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all tracking-wider uppercase text-sm font-bold group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {mutation.isPending ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            Secure My Seat
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
