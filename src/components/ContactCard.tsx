import React, { useState } from "react";
import { Send, CheckCircle, Sparkles, MessageSquare, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !message) {
      setError("Please complete all input parameters to initialize route.");
      return;
    }

    setIsSending(true);

    // Simulate sending API request
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");

      // Clear success feedback state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1800);
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-8 bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/[0.06] rounded-3xl transition-all duration-500 hover:border-pink-500/35 hover:shadow-[0_0_40px_rgba(236,72,153,0.12)] relative overflow-hidden group">
      
      <div>
        {/* Header Title Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">Connection Bridge</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Initiate A Collaboration</h3>
            </div>
          </div>
        </div>

        <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
          Need predictive modeling pipelines, business intelligence dashboards, or system level architectures? Send a direct handshake signal below.
        </p>
      </div>

      {/* Main submission container */}
      <div className="relative">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono text-zinc-500 mb-1.5 uppercase tracking-wider">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Joy Maung"
                className="w-full bg-zinc-950/60 border border-white/[0.06] hover:border-white/[0.12] focus:border-pink-500/50 rounded-xl py-2 px-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none transition-all font-sans"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono text-zinc-500 mb-1.5 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. company@hq.com"
                className="w-full bg-zinc-950/60 border border-white/[0.06] hover:border-white/[0.12] focus:border-pink-500/50 rounded-xl py-2 px-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none transition-all font-sans"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono text-zinc-500 mb-1.5 uppercase tracking-wider">Your Message</label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Detail your modeling target or backend parameters..."
              className="w-full bg-zinc-950/60 border border-white/[0.06] hover:border-white/[0.12] focus:border-pink-500/50 rounded-xl py-2 px-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none transition-all font-sans resize-none"
            />
          </div>

          {/* Validation error display */}
          {error && (
            <div className="flex items-center gap-2 text-xs font-mono text-rose-400 bg-rose-500/5 border border-rose-500/10 p-2.5 rounded-xl">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Send buttons */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase transition-all cursor-pointer ${
              isSending
                ? "bg-pink-500/10 border border-pink-500/20 text-pink-400"
                : "bg-white text-zinc-950 hover:bg-zinc-200"
            }`}
          >
            {isSending ? (
              <>
                <div className="h-4 w-4 border-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                Initializing connection socket...
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" /> Submit Handshake Signal
              </>
            )}
          </button>
        </form>

        {/* Success Modal Panel */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center z-10 border border-emerald-500/20"
            >
              <CheckCircle2Icon className="w-12 h-12 text-emerald-400 mb-3 animate-bounce" />
              <h4 className="text-md font-bold text-white flex items-center gap-1.5">
                Handshake Succeeded <Sparkles className="w-4 h-4 text-emerald-400" />
              </h4>
              <p className="text-xs text-zinc-400 mt-1.5 max-w-[280px] leading-relaxed">
                Message successfully routed to <strong className="text-white">joymoung@gmail.com</strong>. Joy will contact your operations system shortly.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

// Extra local icons
function CheckCircle2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
