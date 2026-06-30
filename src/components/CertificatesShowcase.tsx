import React, { useState, ChangeEvent, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  Calendar, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  GraduationCap, 
  BookOpen,
  QrCode,
  Sparkles,
  Search,
  UploadCloud
} from "lucide-react";
import { 
  ACADEMIC_CERTIFICATES_DATA, 
  AcademicCertificate 
} from "../data";

type TabType = "academic" | "board";

export default function CertificatesShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>("academic");
  const [selectedCert, setSelectedCert] = useState<AcademicCertificate | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Local storage upload trackers for actual certificate snapshots
  const [customCertImages, setCustomCertImages] = useState<Record<string, string>>(() => {
    const saved: Record<string, string> = {};
    
    // Check academic ones
    ACADEMIC_CERTIFICATES_DATA.forEach(c => {
      const img = localStorage.getItem(`joy_cert_${c.id}`);
      if (img) saved[c.id] = img;
    });

    return saved;
  });

  const handleCertificateUpload = (certId: string, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem(`joy_cert_${certId}`, base64String);
        setCustomCertImages(prev => ({ ...prev, [certId]: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeCertificateImage = (certId: string, e: MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem(`joy_cert_${certId}`);
    setCustomCertImages(prev => {
      const next = { ...prev };
      delete next[certId];
      return next;
    });
  };

  // Helper to resolve color themes
  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return {
          glow: "from-emerald-500/10 to-teal-500/10",
          text: "text-emerald-400",
          border: "border-emerald-500/20 hover:border-emerald-500/40",
          badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
          accent: "#10b981"
        };
      case "blue":
        return {
          glow: "from-blue-500/10 to-indigo-500/10",
          text: "text-blue-400",
          border: "border-blue-500/20 hover:border-blue-500/40",
          badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
          accent: "#3b82f6"
        };
      case "amber":
        return {
          glow: "from-amber-500/10 to-yellow-500/10",
          text: "text-amber-400",
          border: "border-amber-500/20 hover:border-amber-500/40",
          badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
          accent: "#f59e0b"
        };
      case "indigo":
        return {
          glow: "from-indigo-500/10 to-violet-500/10",
          text: "text-indigo-400",
          border: "border-indigo-500/20 hover:border-indigo-500/40",
          badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
          accent: "#6366f1"
        };
      case "orange":
        return {
          glow: "from-orange-500/10 to-red-500/10",
          text: "text-orange-400",
          border: "border-orange-500/20 hover:border-orange-500/40",
          badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
          accent: "#f97316"
        };
      case "violet":
        return {
          glow: "from-violet-500/10 to-purple-500/10",
          text: "text-violet-400",
          border: "border-violet-500/20 hover:border-violet-500/40",
          badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
          accent: "#8b5cf6"
        };
      default:
        return {
          glow: "from-zinc-500/10 to-zinc-400/10",
          text: "text-zinc-400",
          border: "border-white/[0.06] hover:border-white/[0.12]",
          badge: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
          accent: "#a1a1aa"
        };
    }
  };

  const filteredAcademic = ACADEMIC_CERTIFICATES_DATA.filter(c => 
    c.id !== "hsc" && c.id !== "ssc" && 
    (c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     c.institution.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredBoard = ACADEMIC_CERTIFICATES_DATA.filter(c => 
    (c.id === "hsc" || c.id === "ssc") && 
    (c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     c.institution.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-8 bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/[0.06] rounded-3xl transition-all duration-500 hover:border-blue-500/35 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)] relative overflow-hidden group">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.02] rounded-full blur-[90px] pointer-events-none" />

      <div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">Credentials & Education Archive</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Academic & Board Certificates</h3>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-60">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search credentials..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950/60 border border-white/[0.06] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/40 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 p-1 bg-zinc-950/60 border border-white/[0.04] rounded-2xl mb-6 max-w-xs">
          <button
            onClick={() => setActiveTab("academic")}
            className={`flex-1 py-2 text-xs font-mono font-medium rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === "academic" 
                ? "bg-zinc-900 text-white border border-white/[0.06]" 
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>University Degrees</span>
          </button>
          <button
            onClick={() => setActiveTab("board")}
            className={`flex-1 py-2 text-xs font-mono font-medium rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === "board" 
                ? "bg-zinc-900 text-white border border-white/[0.06]" 
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Board Education</span>
          </button>
        </div>

        <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
          {activeTab === "academic" && "Interactive audit log of Joy's University degrees from Daffodil International University. Click any degree to view verified GPA transcripts and certificate mockups."}
          {activeTab === "board" && "National Board secondary and higher secondary qualifications from Board of Intermediate and Secondary Education, Dhaka. Click to inspect subjects and certificate models."}
        </p>

        {/* Grid for items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* ACADEMIC TAB */}
          {activeTab === "academic" && (
            filteredAcademic.map((cert) => {
              const theme = getColorClasses(cert.color);
              const hasCustomImg = !!customCertImages[cert.id];

              return (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className={`text-left p-4 rounded-2xl bg-zinc-950/20 border ${theme.border} transition-all duration-300 cursor-pointer relative overflow-hidden group/item flex flex-col justify-between hover:bg-zinc-950/60`}
                >
                  <div className="flex gap-4">
                    <div className="relative h-12 w-12 rounded-xl bg-zinc-900 border border-white/[0.05] flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {hasCustomImg ? (
                        <img 
                          src={customCertImages[cert.id]} 
                          alt={cert.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <GraduationCap className={`w-5 h-5 ${theme.text}`} />
                      )}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">{cert.issuer}</span>
                      <h4 className="text-sm font-bold text-white tracking-tight leading-tight mt-0.5 group-hover/item:text-blue-400 transition-colors">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${theme.badge}`}>
                          {cert.result}
                        </span>
                        <span className="text-zinc-600 font-mono text-[10px]">{cert.issueDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.03]" onClick={e => e.stopPropagation()}>
                    <span className="text-[10px] font-mono text-zinc-500">ID: {cert.serialNo.substring(0, 10)}...</span>
                    
                    <div className="flex items-center gap-2">
                      <label className="p-1.5 rounded-lg bg-zinc-900 border border-white/[0.04] text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer relative flex items-center justify-center" title="Attach physical image snapshot">
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={(e) => handleCertificateUpload(cert.id, e)} 
                        />
                        <Plus className="w-3.5 h-3.5" />
                      </label>

                      {hasCustomImg && (
                        <button
                          onClick={(e) => removeCertificateImage(cert.id, e)}
                          className="p-1.5 rounded-lg bg-zinc-900 border border-white/[0.04] text-zinc-500 hover:text-red-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                          title="Remove custom image"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-white/[0.05] text-[10px] font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all"
                      >
                        <span>Inspect Pass</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* BOARD EDUCATION TAB */}
          {activeTab === "board" && (
            filteredBoard.map((cert) => {
              const theme = getColorClasses(cert.color);
              const hasCustomImg = !!customCertImages[cert.id];

              return (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className={`text-left p-4 rounded-2xl bg-zinc-950/20 border ${theme.border} transition-all duration-300 cursor-pointer relative overflow-hidden group/item flex flex-col justify-between hover:bg-zinc-950/60`}
                >
                  <div className="flex gap-4">
                    <div className="relative h-12 w-12 rounded-xl bg-zinc-900 border border-white/[0.05] flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {hasCustomImg ? (
                        <img 
                          src={customCertImages[cert.id]} 
                          alt={cert.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <BookOpen className={`w-5 h-5 ${theme.text}`} />
                      )}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">Dhaka Education Board</span>
                      <h4 className="text-sm font-bold text-white tracking-tight leading-tight mt-0.5 group-hover/item:text-blue-400 transition-colors">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${theme.badge}`}>
                          {cert.result}
                        </span>
                        <span className="text-zinc-600 font-mono text-[10px]">{cert.issueDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.03]" onClick={e => e.stopPropagation()}>
                    <span className="text-[10px] font-mono text-zinc-500">Roll: {cert.rollNo}</span>
                    
                    <div className="flex items-center gap-2">
                      <label className="p-1.5 rounded-lg bg-zinc-900 border border-white/[0.04] text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer relative flex items-center justify-center" title="Attach physical image snapshot">
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={(e) => handleCertificateUpload(cert.id, e)} 
                        />
                        <Plus className="w-3.5 h-3.5" />
                      </label>

                      {hasCustomImg && (
                        <button
                          onClick={(e) => removeCertificateImage(cert.id, e)}
                          className="p-1.5 rounded-lg bg-zinc-900 border border-white/[0.04] text-zinc-500 hover:text-red-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                          title="Remove custom image"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-white/[0.05] text-[10px] font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all"
                      >
                        <span>Inspect Pass</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ACADEMIC/BOARD CERTIFICATE VIEW OVERLAY */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-zinc-950 border border-white/[0.08] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative my-8"
              onClick={e => e.stopPropagation()}
            >
              {/* Header with Color Glow */}
              <div className={`p-6 bg-gradient-to-r ${getColorClasses(selectedCert.color).glow} border-b border-white/[0.04] flex items-center justify-between relative`}>
                <div className="flex items-center gap-3">
                  <span className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${getColorClasses(selectedCert.color).text}`}>
                    <ShieldCheck className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">OFFICIAL EDUCATION AUDIT PASS</span>
                    <h4 className="text-lg font-bold text-white tracking-tight">{selectedCert.title}</h4>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-black/40 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Two Column Layout (Certificate Mockup vs Coursework Transcript) */}
              <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Column 1: Certificate Replica / Upload Snap (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    VERIFIED DIPLOMA SNAPSHOT
                  </span>

                  {customCertImages[selectedCert.id] ? (
                    <div className="relative border border-white/10 rounded-2xl overflow-hidden bg-black/40 p-2 flex flex-col justify-center min-h-[300px]">
                      <img 
                        src={customCertImages[selectedCert.id]} 
                        alt={selectedCert.title} 
                        className="w-full h-full object-contain max-h-[320px] mx-auto rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-4 right-4 bg-zinc-950/90 border border-emerald-500/20 px-3 py-1 rounded-full text-[9px] font-mono text-emerald-400 flex items-center gap-1 shadow-lg">
                        <CheckCircle2 className="w-3 h-3" /> OFFICIAL SCAN ATTACHED
                      </div>
                    </div>
                  ) : (
                    /* High fidelity Mockup certificates based on screenshots! */
                    <div className="relative border border-white/[0.05] bg-[#0d0d0f] rounded-2xl p-6 overflow-hidden min-h-[300px] flex flex-col justify-between group/mockup">
                      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />
                      
                      {/* Geometric border frames representing authentic certificate borders */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 bottom-2.5 border border-white/[0.01] rounded-xl pointer-events-none" />
                      <div className="absolute top-3 left-3 right-3 bottom-3 border border-zinc-900 rounded-lg pointer-events-none" />

                      {/* University Degrees Replicas */}
                      {(selectedCert.id === "msc-se" || selectedCert.id === "bsc-se") ? (
                        <>
                          <div className="flex justify-between items-start relative z-10">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-black tracking-tighter text-white bg-zinc-900 border border-white/10 px-2 py-0.5 rounded">
                                DIU
                              </span>
                              <span className="text-[7px] font-mono text-zinc-600">SERIAL NO: {selectedCert.serialNo.split(" ")[0]}</span>
                            </div>
                            <span className="text-[8px] font-mono text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded font-bold uppercase">
                              VERIFIED
                            </span>
                          </div>

                          <div className="text-center py-6 relative z-10 space-y-2">
                            <span className="text-[8px] font-mono text-zinc-500 tracking-widest uppercase">UPON RECOMMENDATION OF THE FACULTY</span>
                            <h5 className="text-sm font-black text-white font-serif tracking-tight leading-none uppercase">
                              Daffodil International University
                            </h5>
                            <p className="text-[8px] text-zinc-500 max-w-xs mx-auto leading-normal">
                              has conferred the degree of
                            </p>
                            <h6 className={`text-xs font-black tracking-tight ${getColorClasses(selectedCert.color).text}`}>
                              {selectedCert.title}
                            </h6>
                            {selectedCert.groupOrMajor !== "Software Engineering" && (
                              <p className="text-[8px] font-mono text-zinc-400">Major in {selectedCert.groupOrMajor}</p>
                            )}
                            <div className="pt-2">
                              <p className="text-[8px] text-zinc-500">to</p>
                              <h5 className="text-sm font-extrabold text-white mt-0.5 tracking-tight">JAW AE MAUNG</h5>
                              <p className="text-[7px] font-mono text-zinc-600 mt-1">ID No. {selectedCert.registrationNo.match(/\d+-\d+-\d+/)?.[0] || "0242420005343001"}</p>
                            </div>
                          </div>

                          <div className="flex justify-between items-end border-t border-white/[0.03] pt-3 relative z-10 font-mono text-[7px] text-zinc-500">
                            <div>
                              <div>CGPA obtained</div>
                              <div className="text-white font-bold text-xs mt-0.5">{selectedCert.result.split(" ")[1]}</div>
                            </div>
                            <div className="text-center">
                              <div className="h-6 w-16 border-b border-zinc-800 flex items-end justify-center font-serif text-[6px] text-zinc-600 italic">M. Bagge</div>
                              <div>Controller of Exams</div>
                            </div>
                            <div className="text-right">
                              <div>Published Date</div>
                              <div className="text-white mt-0.5">{selectedCert.issueDate}</div>
                            </div>
                          </div>
                        </>
                      ) : (
                        /* Bangladesh Dhaka Board Certificate replicas */
                        <>
                          <div className="flex justify-between items-start relative z-10">
                            <div className="flex items-center gap-1">
                              <span className="text-[8px] font-bold text-zinc-400 uppercase">DHAKA BOARD</span>
                            </div>
                            <span className="text-[7px] font-mono text-zinc-600">SERIAL NO: {selectedCert.serialNo}</span>
                          </div>

                          <div className="text-center py-6 relative z-10 space-y-1.5">
                            <h5 className="text-xs font-black text-white tracking-wide uppercase leading-tight font-sans">
                              BOARD OF INTERMEDIATE & SECONDARY EDUCATION, DHAKA
                            </h5>
                            <span className="text-[7px] font-mono text-zinc-400 uppercase tracking-widest block bg-white/5 py-0.5 rounded-md max-w-[120px] mx-auto">
                              BANGLADESH
                            </span>
                            <div className="pt-2">
                              <p className="text-[8px] text-zinc-500 uppercase tracking-widest">
                                {selectedCert.id === "hsc" ? "Higher Secondary Certificate" : "Secondary School Certificate"}
                              </p>
                              <h6 className="text-[10px] font-extrabold text-amber-400 mt-0.5">
                                Science Group
                              </h6>
                            </div>
                            <div className="pt-2 text-[8px] text-zinc-400 leading-normal max-w-xs mx-auto">
                              This is to certify that <span className="text-white font-bold">JAW AE MAUNG</span>, child of Maung U Shang & Ushang Pro, from Winsome College/Motijheel Model, secured <span className="text-white font-bold">{selectedCert.result}</span>.
                            </div>
                          </div>

                          <div className="flex justify-between items-end border-t border-white/[0.03] pt-3 relative z-10 font-mono text-[7px] text-zinc-500">
                            <div>
                              <div>Roll Number</div>
                              <div className="text-white font-bold mt-0.5">{selectedCert.rollNo}</div>
                            </div>
                            <div>
                              <div>Registration No</div>
                              <div className="text-white font-bold mt-0.5">{selectedCert.registrationNo}</div>
                            </div>
                            <div className="text-right">
                              <div>Published Date</div>
                              <div className="text-white mt-0.5">{selectedCert.issueDate}</div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Interactive upload trigger to swap with real image! */}
                  <div className="flex gap-2">
                    <label className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.06] text-zinc-300 hover:text-white text-xs font-mono transition-colors cursor-pointer">
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleCertificateUpload(selectedCert.id, e)} 
                      />
                      <UploadCloud className="w-4 h-4 text-zinc-500" />
                      <span>Upload Real Scan</span>
                    </label>

                    {customCertImages[selectedCert.id] && (
                      <button
                        onClick={(e) => removeCertificateImage(selectedCert.id, e)}
                        className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.06] text-zinc-500 hover:text-red-400 transition-colors"
                        title="Remove custom image"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Column 2: Transcript Courses & Metadata (7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Validation Highlights */}
                  <div className="space-y-2">
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      CREDENTIAL KEY DETAILS
                    </span>
                    <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.04] space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div>
                          <span className="text-zinc-500 block text-[9px] uppercase">Institution</span>
                          <span className="text-zinc-200 block font-sans">{selectedCert.institution}</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[9px] uppercase">Registration / ID</span>
                          <span className="text-zinc-200 block">{selectedCert.registrationNo}</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[9px] uppercase">Serial Number</span>
                          <span className="text-zinc-200 block">{selectedCert.serialNo}</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[9px] uppercase">GPA Result</span>
                          <span className="text-emerald-400 block font-bold">{selectedCert.result}</span>
                        </div>
                      </div>

                      <div className="border-t border-white/[0.03] pt-3 mt-2 space-y-2">
                        {selectedCert.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400 leading-normal">
                            <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${getColorClasses(selectedCert.color).text}`} />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Course transcript table */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        ACADEMIC COURSE TRANSCRIPT
                      </span>
                      <span className="text-[9px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded">
                        {selectedCert.courses.length} subjects
                      </span>
                    </div>

                    <div className="bg-zinc-950 border border-white/[0.04] rounded-2xl overflow-hidden">
                      <div className="grid grid-cols-12 gap-2 p-3 bg-zinc-900/40 text-[9px] font-mono text-zinc-500 uppercase border-b border-white/[0.03]">
                        <div className="col-span-2">CODE</div>
                        <div className="col-span-6">COURSE / SUBJECT</div>
                        <div className="col-span-2 text-center">CREDITS</div>
                        <div className="col-span-2 text-right">GRADE</div>
                      </div>

                      <div className="max-h-[190px] overflow-y-auto divide-y divide-white/[0.02]">
                        {selectedCert.courses.map((course, cIdx) => (
                          <div key={cIdx} className="grid grid-cols-12 gap-2 p-2.5 text-xs font-mono hover:bg-zinc-900/20 transition-colors">
                            <div className="col-span-2 text-zinc-500 font-semibold">{course.code}</div>
                            <div className="col-span-6 text-zinc-300 font-sans">{course.title}</div>
                            <div className="col-span-2 text-center text-zinc-500">{course.credits !== undefined ? `${course.credits} Cr` : "N/A"}</div>
                            <div className="col-span-2 text-right">
                              <span className={`px-1.5 py-0.5 rounded font-bold text-[10px] ${
                                course.grade.startsWith("A") ? "text-emerald-400 bg-emerald-500/5" : "text-zinc-400"
                              }`}>
                                {course.grade}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* External verification path */}
                  {selectedCert.verificationUrl && (
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={selectedCert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-mono font-bold tracking-wider uppercase transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Go to Verification Portal
                      </a>
                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
