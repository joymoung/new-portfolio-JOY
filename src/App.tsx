import { motion } from "motion/react";
import { Sparkles, ArrowUpRight, Award, FolderGit2, BookOpen, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import ProfileCard from "./components/ProfileCard";
import ThesisPredictor from "./components/ThesisPredictor";
import ExperienceCard from "./components/ExperienceCard";
import AcademicTimeline from "./components/AcademicTimeline";
import ServerMetricsCard from "./components/ServerMetricsCard";
import TechStackCard from "./components/TechStackCard";
import ContactCard from "./components/ContactCard";
import CertificatesShowcase from "./components/CertificatesShowcase";

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
    <div className="min-h-screen bg-[#020204] text-white font-sans antialiased selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden">
      
      {/* Dynamic drifting background neon meshes */}
      <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-blue-500/[0.05] rounded-full blur-[130px] pointer-events-none animate-drift-slow-1" />
      <div className="absolute top-[40%] right-[-5%] w-[700px] h-[700px] bg-violet-600/[0.04] rounded-full blur-[150px] pointer-events-none animate-drift-slow-2" />
      <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-[130px] pointer-events-none animate-drift-slow-3" />
      <div className="absolute top-[15%] right-[25%] w-[450px] h-[450px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Grid pattern overlay & subtle dot-matrix mapping dashboard texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] [background-size:128px_128px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center font-bold tracking-tighter text-sm shadow-[0_0_20px_rgba(79,70,229,0.3)]">
            JM
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight">JOY MAUNG</div>
            <div className="text-[9px] font-mono text-zinc-500 font-semibold tracking-widest uppercase">DATA SCIENCE & BI LEADER</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono text-zinc-400">
          <a href="#about" className="hover:text-white hover:text-blue-400 transition-colors">About</a>
          <a href="#thesis-predictor" className="hover:text-white hover:text-violet-400 transition-colors">Predictive Research</a>
          <a href="#experience" className="hover:text-white hover:text-indigo-400 transition-colors">Operational Experience</a>
          <a href="#education" className="hover:text-white hover:text-emerald-400 transition-colors">Education & CGPA</a>
          <a href="#skills" className="hover:text-white hover:text-violet-400 transition-colors">Capabilities</a>
          <a href="#certificates" className="hover:text-white hover:text-blue-400 transition-colors">Credentials</a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="mailto:joymoung@gmail.com" 
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-md hover:bg-zinc-900 text-xs font-mono transition-all text-zinc-300 hover:text-white hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <span>Contact Handshake</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        
        {/* Massive Typography Hero Section - Framer template style */}
        <section id="about" className="py-12 md:py-20">
          <div className="flex flex-col gap-6">
            {/* Quick-Access Role Badging & Credentials */}
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-xs font-mono text-blue-400 font-semibold tracking-wide flex items-center gap-2 hover:bg-blue-500/15 hover:border-blue-500/45 transition-all">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                Sales & Marketing Manager
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-xs font-mono text-indigo-400 font-semibold tracking-wide flex items-center gap-2 hover:bg-indigo-500/15 hover:border-indigo-500/45 transition-all">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Data-Driven Software Engineer
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 font-semibold tracking-wide flex items-center gap-2 hover:bg-emerald-500/15 hover:border-emerald-500/45 transition-all">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                M.Sc. Data Science (3.39 CGPA)
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/25 text-xs font-mono text-rose-400 font-semibold tracking-wide flex items-center gap-2 hover:bg-rose-500/15 hover:border-rose-500/45 transition-all animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                Cyber Security Intake Prep
              </span>
            </div>

            <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-widest mt-1">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" /> Bridging Business Growth & Rigorous Predictive Systems
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] max-w-[1200px] text-white">
              MERGING <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">COMMERCIAL OPERATIONS</span> WITH SYSTEM SECURITY & ADVANCED MACHINE LEARNING.
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-4 pt-6 border-t border-white/[0.04] max-w-4xl text-zinc-400 text-sm md:text-base leading-relaxed">
              <p className="max-w-xl">
                A dual-focus builder integrating sales and marketing architectures with high-performance software engineering. Driven by an M.Sc. in Software Engineering (Major in Data Science, <strong className="text-white">3.39 CGPA</strong>), executing business intelligence at <strong className="text-white">Gari-import.com.bd</strong>, and proactively prepping for advanced Cybersecurity frameworks.
              </p>
              <div className="flex gap-4 text-xs font-mono text-zinc-500 flex-shrink-0">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Dhaka, BD
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" /> Active Gari-Import
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
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -6, scale: 1.012, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-2 lg:col-span-4 min-h-[440px] rounded-3xl hover:shadow-[0_0_50px_rgba(59,130,246,0.05)] transition-shadow duration-500"
          >
            <ProfileCard />
          </motion.div>

          {/* Card 2: Thesis & Machine Learning Predictor - 8 Cols on Large, 2 Cols on Md */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -6, scale: 1.012, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-2 lg:col-span-8 min-h-[440px] rounded-3xl hover:shadow-[0_0_50px_rgba(139,92,246,0.05)] transition-shadow duration-500"
          >
            <ThesisPredictor />
          </motion.div>

          {/* Card 3: Gari-Import Operations & BI Dashboard - 5 Cols on Large, 2 Cols on Md */}
          <motion.div 
            id="experience" 
            variants={itemVariants} 
            whileHover={{ y: -6, scale: 1.012, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-2 lg:col-span-5 min-h-[440px] rounded-3xl hover:shadow-[0_0_50px_rgba(16,185,129,0.05)] transition-shadow duration-500"
          >
            <ExperienceCard />
          </motion.div>

          {/* Card 4: Capability Matrix & Skills - 7 Cols on Large, 2 Cols on Md */}
          <motion.div 
            id="skills" 
            variants={itemVariants} 
            whileHover={{ y: -6, scale: 1.012, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-2 lg:col-span-7 min-h-[440px] rounded-3xl hover:shadow-[0_0_50px_rgba(245,158,11,0.05)] transition-shadow duration-500"
          >
            <TechStackCard />
          </motion.div>

          {/* Card 5: Academic Timeline & Coursework - 8 Cols on Large, 2 Cols on Md */}
          <motion.div 
            id="education" 
            variants={itemVariants} 
            whileHover={{ y: -6, scale: 1.012, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-2 lg:col-span-8 min-h-[440px] rounded-3xl hover:shadow-[0_0_50px_rgba(99,102,241,0.05)] transition-shadow duration-500"
          >
            <AcademicTimeline />
          </motion.div>

          {/* Card 6: Custom FiveM Server Architecture - 4 Cols on Large, 2 Cols on Md */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -6, scale: 1.012, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-2 lg:col-span-4 min-h-[440px] rounded-3xl hover:shadow-[0_0_50px_rgba(249,115,22,0.05)] transition-shadow duration-500"
          >
            <ServerMetricsCard />
          </motion.div>

          {/* Card 7: Credentials & Professional Certificates - Full Row, 12 Cols */}
          <motion.div 
            id="certificates" 
            variants={itemVariants} 
            whileHover={{ y: -6, scale: 1.006, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-4 lg:col-span-12 rounded-3xl hover:shadow-[0_0_60px_rgba(59,130,246,0.04)] transition-shadow duration-500"
          >
            <CertificatesShowcase />
          </motion.div>

          {/* Card 8: Direct hand-shake contact bridge - Full Row, 12 Cols */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -6, scale: 1.006, transition: { duration: 0.3, ease: "easeOut" } }}
            className="md:col-span-4 lg:col-span-12 rounded-3xl hover:shadow-[0_0_60px_rgba(236,72,153,0.04)] transition-shadow duration-500"
          >
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
