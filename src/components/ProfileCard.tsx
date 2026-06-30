import { useState, ChangeEvent, MouseEvent } from "react";
import { Mail, MapPin, Copy, Check, Linkedin, Github, ExternalLink, Sparkles, Camera, Trash2 } from "lucide-react";
import { motion } from "motion/react";

export default function ProfileCard() {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(() => {
    return localStorage.getItem("joy_profile_avatar");
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("joymoung@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem("joy_profile_avatar", base64String);
        setAvatarUrl(base64String);
        setImgError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.removeItem("joy_profile_avatar");
    setAvatarUrl(null);
    setImgError(false);
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-8 bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/[0.06] rounded-3xl transition-all duration-500 hover:border-blue-500/35 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)] relative overflow-hidden group">
      
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

      <div>
        {/* Profile Avatar Frame with Interactive Upload */}
        <div className="relative w-28 h-28 mb-6">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 blur-md opacity-40 group-hover:opacity-75 transition-all duration-700" />
          
          <input 
            type="file" 
            id="avatar-upload" 
            accept="image/*" 
            className="hidden" 
            onChange={handleImageUpload} 
          />

          <label 
            htmlFor="avatar-upload" 
            className="absolute inset-0 rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden flex items-center justify-center cursor-pointer group/avatar relative block w-full h-full"
          >
            {avatarUrl && !imgError ? (
              <img 
                src={avatarUrl} 
                alt="Jaw Ae Maung (Joy)" 
                onError={() => setImgError(true)}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover/avatar:scale-105"
              />
            ) : (!imgError ? (
              <img 
                src="https://i.ibb.co/jkGht29F/Whats-App-Image-2026-06-26-at-8-54-44-PM.jpg" 
                alt="Jaw Ae Maung (Joy)" 
                onError={() => setImgError(true)}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover/avatar:scale-105"
              />
            ) : (
              /* Elegant Vector Initial Avatar fallback with glowing particle effects */
              <div className="w-full h-full relative flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 10H100M0 20H100M0 30H100M0 40H100M0 50H100M0 60H100M0 70H100M0 80H100M0 90H100" stroke="url(#grid-grad)" strokeWidth="0.5" />
                  <path d="M10 0V100M20 0V100M30 0V100M40 0V100M50 0V100M60 0V100M70 0V100M80 0V100M90 0V100" stroke="url(#grid-grad)" strokeWidth="0.5" />
                </svg>
                <div className="z-10 text-center">
                  <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent font-sans">
                    JOY
                  </span>
                  <div className="text-[9px] font-mono text-blue-400 font-semibold tracking-widest mt-1 uppercase">
                    DS // SE
                  </div>
                </div>
              </div>
            ))}

            {/* Hover Camera Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-[10px] font-mono gap-1 select-none">
              <Camera className="w-4.5 h-4.5 text-blue-400" />
              <span>Attach Photo</span>
            </div>
          </label>

          {/* Remove Image Button if Custom Image exists */}
          {avatarUrl && (
            <button 
              onClick={handleRemoveAvatar}
              className="absolute -top-1.5 -right-1.5 p-1 rounded-full bg-zinc-950 border border-white/10 text-zinc-400 hover:text-red-400 transition-colors cursor-pointer z-20 shadow-lg"
              title="Remove photo"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
          
          <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 z-10 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-zinc-900"></span>
          </span>
        </div>

        {/* Identity Information */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-1.5">
            <h1 className="text-2xl font-extrabold text-white tracking-tight">Jaw Ae Maung</h1>
            <span className="text-zinc-500 font-medium text-sm">(Joy)</span>
          </div>
          
          <div className="flex flex-col gap-1 border-l-2 border-blue-500/50 pl-3">
            <div className="text-xs font-bold text-blue-400 font-mono tracking-wider uppercase">
              Sales & Marketing Manager
            </div>
            <div className="text-xs font-bold text-indigo-400 font-mono tracking-wider uppercase">
              Data-Driven Software Engineer
            </div>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed pt-1.5">
            Bridging complex commercial strategy with predictive analytics. Architecting high-integrity data pipelines, custom web applications, and preparing for advanced security operations.
          </p>
        </div>
      </div>

      {/* Cybersecurity prep segment */}
      <div className="mt-6 p-3 bg-rose-500/5 border border-rose-500/15 rounded-xl flex items-start gap-2.5 z-10 relative">
        <span className="h-2 w-2 rounded-full bg-rose-500 mt-1.5 animate-pulse flex-shrink-0" />
        <div className="font-mono text-[10px] leading-normal">
          <span className="text-rose-400 font-bold uppercase block tracking-wider mb-0.5">Cyber Security Prep</span>
          <span className="text-zinc-400">Pre-university intake groundwork centering protocol hardening, network penetration audits, and security lifecycle engineering.</span>
        </div>
      </div>

      {/* Footer / Meta Data / Contact */}
      <div className="mt-4 space-y-4 pt-4 border-t border-white/[0.04] z-10 relative">
        <div className="flex items-center gap-2.5 text-zinc-400 text-xs font-mono">
          <MapPin className="w-4 h-4 text-zinc-500" />
          <span>Dhaka, Bangladesh</span>
        </div>

        {/* Action button copy-email */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button 
            onClick={handleCopyEmail}
            className="flex-1 flex items-center justify-between px-4 py-2.5 bg-zinc-950 border border-white/[0.06] hover:bg-zinc-900 rounded-xl text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer group/btn"
          >
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              joymoung@gmail.com
            </span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover/btn:text-white transition-colors" />
            )}
          </button>
        </div>

        {/* External Social Profiles */}
        <div className="flex items-center justify-start gap-4 text-zinc-500 pt-2">
          <a 
            href="mailto:joymoung@gmail.com" 
            className="hover:text-white transition-colors text-xs font-mono flex items-center gap-1"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors text-xs font-mono flex items-center gap-1"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors text-xs font-mono flex items-center gap-1"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  );
}
