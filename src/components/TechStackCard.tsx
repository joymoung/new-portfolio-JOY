import { useState } from "react";
import { SKILLS_DATA, TechSkill } from "../data";
import { Hammer, Sparkles, Terminal, Database, LineChart, Cpu } from "lucide-react";
import { motion } from "motion/react";

export default function TechStackCard() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Stack", icon: Hammer },
    { id: "languages", label: "Languages", icon: Terminal },
    { id: "ml", label: "Core ML & AI", icon: Sparkles },
    { id: "tools", label: "BI & Pipelines", icon: LineChart },
    { id: "systems", label: "Systems Eng", icon: Cpu }
  ];

  const filteredSkills = selectedCategory === "all" 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === selectedCategory);

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-8 bg-zinc-900/40 backdrop-blur-xl border border-white/[0.06] rounded-3xl transition-all duration-500 hover:border-white/[0.12] relative overflow-hidden group">
      
      <div>
        {/* Header Title Section */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">Capability Matrix</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Technical Skills & Toolkit</h3>
            </div>
          </div>
        </div>

        {/* Categories Tab Swiper */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                  isActive
                    ? "bg-violet-500/15 border-violet-500/30 text-white font-semibold"
                    : "bg-zinc-950/40 border-white/[0.04] text-zinc-400 hover:bg-zinc-900/60 hover:text-white"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-violet-400" : "text-zinc-500"}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skill tag clouds with hover details */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {filteredSkills.map((skill, idx) => (
            <div 
              key={idx}
              className="p-3 bg-zinc-950/60 border border-white/[0.03] hover:border-violet-500/20 rounded-2xl transition-all duration-300 relative group/skill overflow-hidden"
            >
              {/* Subtle hover glow gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/0 to-violet-500/[0.02] pointer-events-none group-hover/skill:from-violet-500/[0.03] transition-colors" />

              <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-mono text-zinc-400 font-medium group-hover/skill:text-white transition-colors truncate pr-1">
                  {skill.name}
                </span>
                <span className="text-[9px] font-mono text-violet-400 font-semibold opacity-70 group-hover/skill:opacity-100 uppercase">
                  {skill.category === "ml" ? "AI/ML" : skill.category}
                </span>
              </div>

              {/* Rating bar */}
              <div className="flex gap-1 items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div 
                    key={star} 
                    className={`h-1.5 flex-1 rounded-full ${
                      star <= skill.rating 
                        ? "bg-violet-500/80" 
                        : "bg-zinc-800"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/[0.04] text-[10px] font-mono text-zinc-500 flex justify-between items-center">
        <span>Total stack: {SKILLS_DATA.length} major competencies</span>
        <span className="text-violet-400 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> High competence verified
        </span>
      </div>

    </div>
  );
}
