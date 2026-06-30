import { motion } from "motion/react";
import { Sparkles, ArrowUpRight, Award, FolderGit2, BookOpen, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import ProfileCard from "./components/ProfileCard";
import ThesisPredictor from "./components/ThesisPredictor";
import ExperienceCard from "./components/ExperienceCard";
import AcademicTimeline from "./components/AcademicTimeline";
import ServerMetricsCard from "./components/ServerMetricsCard";
import TechStackCard from "./components/TechStackCard";
import ContactCard from "./components/ContactCard";

export default function App() {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden">
      
      {/* Decorative High-End Background Radial Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-10 w-[600px] h-[600px] bg-indigo-500/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-10 w-[500px] h-[500px] bg-violet-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold tracking-tighter text-sm">
            JM
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight">JOY MAUNG</div>
            <div className="text-[9px] font-mono text-zinc-500 font-semibold tracking-widest uppercase">DATA SCIENCE PORTFOLIO</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#thesis-predictor" className="hover:text-white transition-colors">Predictive Research</a>
          <a href="#experience" className="hover:text-white transition-colors">Operational Experience</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#skills" className="hover:text-white transition-colors">Capabilities</a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="mailto:joymoung@gmail.com" 
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 border border-white/[0.06] hover:bg-zinc-800 text-xs font-mono transition-all text-zinc-300 hover:text-white"
          >
            <span>Contact Handshake</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        
        {/* Massive Typography Hero Section - Framer template style */}
        <section id="about" className="py-12 md:py-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4 animate-pulse" /> Engineering Predictive Solutions
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] max-w-[1100px] text-white">
              TRANSFORMING MULTI-DIMENSIONAL <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">DATA CHAOS</span> INTO COMMERCIAL INTELLIGENCE.
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-6 pt-6 border-t border-white/[0.04] max-w-4xl text-zinc-400 text-sm md:text-base leading-relaxed">
              <p className="max-w-xl">
                A structured Software Engineer with an M.Sc. in Software Engineering (Major in Data Science). Expert in Bayesian optimization, ensemble ML structures, and robust relational processing script integration.
              </p>
              <div className="flex gap-4 text-xs font-mono text-zinc-500 flex-shrink-0">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Dhaka, BD
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Active on Gari-Import
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Structure */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-6 mt-8"
        >
          {/* Card 1: Profile (Identity) - 4 Cols on Large, 2 Cols on Md */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-4 min-h-[440px]">
            <ProfileCard />
          </motion.div>

          {/* Card 2: Thesis & Machine Learning Predictor - 8 Cols on Large, 2 Cols on Md */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-8 min-h-[440px]">
            <ThesisPredictor />
          </motion.div>

          {/* Card 3: Gari-Import Operations & BI Dashboard - 5 Cols on Large, 2 Cols on Md */}
          <motion.div id="experience" variants={itemVariants} className="md:col-span-2 lg:col-span-5 min-h-[440px]">
            <ExperienceCard />
          </motion.div>

          {/* Card 4: Capability Matrix & Skills - 7 Cols on Large, 2 Cols on Md */}
          <motion.div id="skills" variants={itemVariants} className="md:col-span-2 lg:col-span-7 min-h-[440px]">
            <TechStackCard />
          </motion.div>

          {/* Card 5: Academic Timeline & Coursework - 8 Cols on Large, 2 Cols on Md */}
          <motion.div id="education" variants={itemVariants} className="md:col-span-2 lg:col-span-8 min-h-[440px]">
            <AcademicTimeline />
          </motion.div>

          {/* Card 6: Custom FiveM Server Architecture - 4 Cols on Large, 2 Cols on Md */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-4 min-h-[440px]">
            <ServerMetricsCard />
          </motion.div>

          {/* Card 7: Direct hand-shake contact bridge - Full Row, 12 Cols */}
          <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-12">
            <ContactCard />
          </motion.div>
        </motion.div>

      </main>

      {/* Sleek Minimal Footer */}
      <footer className="border-t border-white/[0.04] bg-[#030303] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-white/[0.08] flex items-center justify-center font-bold text-xs">
              JM
            </div>
            <span className="text-xs font-mono text-zinc-500">
              © 2026 JAW AE MAUNG. All engineering rights reserved.
            </span>
          </div>

          <div className="flex gap-6 text-xs font-mono text-zinc-500">
            <a href="mailto:joymoung@gmail.com" className="hover:text-white transition-colors">joymoung@gmail.com</a>
            <a href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
