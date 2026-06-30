import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Award, Calendar, BookOpen, ChevronRight, CheckCircle2 } from "lucide-react";
import { ACADEMIC_DATA, Course } from "../data";

export default function AcademicTimeline() {
  const [selectedDegreeIndex, setSelectedDegreeIndex] = useState<number>(0);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const activeDegree = ACADEMIC_DATA[selectedDegreeIndex];

  // Specific high-level learnings to display on-demand when user clicks a transcript course!
  const getCourseDescription = (courseCode: string) => {
    const descriptions: Record<string, string> = {
      "SWE 687": "Practical modeling using Scikit-Learn pipelines. Implemented mean/mode imputation, target log transformation, and hyperparameter tuning with Optuna. Conducted cross-validation on ensemble/boosting algorithms.",
      "SWE 699": "Research thesis: 'Automobile Price Forecasting with Machine Learning'. Benchmarked Bagging vs Boosting models. Built Optuna HPO tuning workflows and mathematically justified decisions via SHAP game-theoretic explainability.",
      "SWE 688": "Visual narrative structures. Built responsive dashboards using Power BI and custom Python libraries (Seaborn, Matplotlib) to articulate structured predictive outputs for corporate audiences.",
      "SWE 685": "Mathematical foundations for tabular preprocessing. Covered multivariate calculations, matrix decomposition, covariance modeling, and exploratory high-dimensional dimensional reductions (PCA).",
      "SWE 686": "Applied academic methodology (CRISP-DM standard). Structured research questions, drafted formal IEEE templates, and established isolated empirical benchmarking frameworks.",
      "SE 312": "Software testing lifecycle paradigms. Implemented systematic black-box, white-box test design, test coverage optimization, and integrated automated test execution wrappers.",
      "SE 331": "High-level architectural patterns. Engineered robust server-client web platforms applying Domain-Driven Design (DDD) principles and structured software modularizations.",
      "SE 223": "Relational database normalization (1NF up to BCNF). Designed optimized schema relations, compiled complex SQL query structures, and managed database transaction isolations."
    };
    return descriptions[courseCode] || "Comprehensive coursework focusing on mathematical programming, system modularization, and engineering design methodologies inside the software lifecycle.";
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-8 bg-zinc-900/40 backdrop-blur-xl border border-white/[0.06] rounded-3xl transition-all duration-500 hover:border-white/[0.12] relative overflow-hidden group">
      
      <div>
        {/* Header Title Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">Academic Record</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Education & Course Transcripts</h3>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-semibold">
            CGPA: {selectedDegreeIndex === 0 ? "3.39" : "2.55"} / 4.00
          </span>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex border-b border-white/[0.04] mb-6">
          {ACADEMIC_DATA.map((deg, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedDegreeIndex(idx);
                setSelectedCourse(null);
              }}
              className={`pb-3 px-1 mr-6 text-sm font-semibold transition-all relative cursor-pointer ${
                selectedDegreeIndex === idx
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <span>{deg.name.includes("Master") ? "M.Sc. Graduate" : "B.Sc. Undergraduate"}</span>
              {selectedDegreeIndex === idx && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500"
                />
              )}
            </button>
          ))}
        </div>

        {/* Degree Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Highlights & Meta */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h4 className="text-md font-bold text-white tracking-tight">
                {activeDegree.name}
              </h4>
              {activeDegree.major && (
                <div className="text-xs font-semibold text-emerald-400 font-mono tracking-wider mt-1 uppercase">
                  Major: {activeDegree.major}
                </div>
              )}
              <div className="text-xs font-mono text-zinc-500 mt-1">
                {activeDegree.institution} • {activeDegree.duration}
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Key Credentials
              </span>
              {activeDegree.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Interactive Course Transcript table */}
          <div className="lg:col-span-7 bg-zinc-950/60 rounded-2xl p-4 border border-white/[0.03]">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Course Transcript Table (Click rows to audit syllabus)
              </span>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                Total: {activeDegree.courses.length} courses
              </span>
            </div>

            <div className="max-h-[190px] overflow-y-auto pr-1 space-y-1 scrollbar-thin scrollbar-thumb-zinc-800">
              {activeDegree.courses.map((course, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCourse(selectedCourse?.code === course.code ? null : course)}
                  className={`w-full text-left flex items-center justify-between p-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    selectedCourse?.code === course.code
                      ? "bg-emerald-500/10 border border-emerald-500/20 text-white"
                      : "hover:bg-zinc-900/60 border border-transparent text-zinc-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-zinc-500 w-14 font-semibold">{course.code}</span>
                    <span className="truncate max-w-[150px] font-sans font-medium">{course.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-500 text-[10px]">{course.credits} Cr</span>
                    <span className={`w-8 text-center font-bold px-1 py-0.5 rounded ${
                      course.grade.startsWith("A") ? "text-emerald-400 bg-emerald-500/5" : "text-zinc-400"
                    }`}>
                      {course.grade}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course Audit Modal Panel inside bento box */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 right-4 bg-zinc-950 border border-emerald-500/30 rounded-2xl p-5 shadow-2xl z-20 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">Syllabus & Course Audit</span>
                  <h5 className="text-sm font-bold text-white mt-0.5">
                    {selectedCourse.code}: {selectedCourse.title}
                  </h5>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-[10px] font-mono text-zinc-400 hover:text-white border border-white/[0.08] px-2 py-0.5 rounded bg-zinc-900"
                >
                  Close
                </button>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {getCourseDescription(selectedCourse.code)}
              </p>
            </div>
            <div className="flex gap-4 mt-3 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-zinc-500">
              <div>Credits: <span className="text-emerald-400 font-bold">{selectedCourse.credits} hours</span></div>
              <div>Grade Obtained: <span className="text-emerald-400 font-bold">{selectedCourse.grade} (GP {selectedCourse.gp.toFixed(2)})</span></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
