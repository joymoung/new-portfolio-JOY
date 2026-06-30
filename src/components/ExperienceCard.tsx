import { useState } from "react";
import { motion } from "motion/react";
import { Building2, TrendingUp, Users, Calendar, BarChart3, Database } from "lucide-react";
import { EXPERIENCE_DATA } from "../data";

export default function ExperienceCard() {
  const exp = EXPERIENCE_DATA[0];
  const [activeMetric, setActiveMetric] = useState<number>(0);

  // Custom data arrays for the dynamic miniature interactive chart
  const metricCharts = [
    {
      title: "Corporate Growth Footprint",
      description: "Organic expansion of the B2B automotive network from 2024 to present.",
      points: [35, 62, 98, 124, 168, 204], // in thousands
      labels: ["Aug 24", "Oct 24", "Dec 24", "Feb 25", "Apr 25", "Jun 26"],
      unit: "k followers"
    },
    {
      title: "Data Processing Pipelines",
      description: "Latency optimizations of Python processing scripts routing raw market metrics.",
      points: [180, 120, 75, 40, 15, 2], // in seconds
      labels: ["v1.0", "v1.2", "v1.5", "v2.0", "v2.2", "v3.0"],
      unit: "s latency"
    },
    {
      title: "Analytics Accuracy Index",
      description: "Mathematical alignment of predictive pricing against actual car auction bids.",
      points: [82, 85, 89, 91, 94, 96.4], // percent
      labels: ["Batch 1", "Batch 5", "Batch 10", "Batch 15", "Batch 20", "Active"],
      unit: "% match"
    }
  ];

  const currentChart = metricCharts[activeMetric];

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-8 bg-zinc-900/40 backdrop-blur-xl border border-white/[0.06] rounded-3xl transition-all duration-500 hover:border-white/[0.12] group relative">
      
      <div>
        {/* Header Title Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">Active Engagement</span>
              <h3 className="text-xl font-bold text-white tracking-tight">{exp.company}</h3>
            </div>
          </div>
          <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
            {exp.period}
          </span>
        </div>

        <div className="text-xs font-mono text-zinc-400 mb-4 flex items-center gap-1.5">
          <span className="font-semibold text-white">{exp.role}</span>
          <span>•</span>
          <span>{exp.location}</span>
        </div>

        {/* Bullet achievements */}
        <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed mb-6">
          {exp.description.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Interactive Operational Analytics Dashboard inside bento */}
      <div className="pt-5 border-t border-white/[0.04] space-y-4">
        <span className="block text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
          Operational Analytics Pipeline
        </span>

        {/* Tab switch buttons */}
        <div className="grid grid-cols-3 gap-2">
          {exp.metrics.map((metric, i) => (
            <button
              key={i}
              onClick={() => setActiveMetric(i)}
              className={`p-3 rounded-xl border transition-all text-left cursor-pointer ${
                activeMetric === i
                  ? "bg-indigo-500/10 border-indigo-500/30 text-white"
                  : "bg-zinc-950/40 border-white/[0.04] text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <div className="text-[10px] font-mono text-zinc-500 truncate uppercase">{metric.label}</div>
              <div className="text-lg font-bold tracking-tight mt-0.5">{metric.value}</div>
            </button>
          ))}
        </div>

        {/* Custom High-Quality Miniature SVG Chart */}
        <div className="bg-zinc-950/60 rounded-2xl p-4 border border-white/[0.03] space-y-3 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
                {currentChart.title}
              </h4>
              <p className="text-[10px] text-zinc-400 mt-0.5 leading-relaxed">
                {currentChart.description}
              </p>
            </div>
            <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded">
              {currentChart.points[currentChart.points.length - 1]}{currentChart.unit.split(" ")[0]}
            </span>
          </div>

          {/* Interactive Sparkline Plot using standard SVG */}
          <div className="h-16 w-full pt-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60">
              <defs>
                <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <line x1="0" y1="10" x2="300" y2="10" stroke="rgba(255,255,255,0.04)" strokeDasharray="2,2" />
              <line x1="0" y1="35" x2="300" y2="35" stroke="rgba(255,255,255,0.04)" strokeDasharray="2,2" />
              <line x1="0" y1="55" x2="300" y2="55" stroke="rgba(255,255,255,0.04)" strokeDasharray="2,2" />

              {/* Path calculations (6 items, x interval: 300 / 5 = 60px) */}
              {(() => {
                const maxVal = Math.max(...currentChart.points);
                const minVal = Math.min(...currentChart.points);
                const range = maxVal - minVal || 1;
                const pointsStr = currentChart.points
                  .map((p, idx) => {
                    const x = idx * 60;
                    // Scale value into the 60px height (leaving padding top/bottom)
                    const y = 50 - ((p - minVal) / range) * 40;
                    return `${x},${y}`;
                  })
                  .join(" ");

                const areaPathStr = `0,60 ${pointsStr} 300,60`;

                return (
                  <>
                    {/* Area under the curve */}
                    <polygon points={areaPathStr} fill="url(#chart-grad)" />

                    {/* Polyline path */}
                    <polyline
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="2"
                      points={pointsStr}
                    />

                    {/* Interactive dots and values */}
                    {currentChart.points.map((p, idx) => {
                      const x = idx * 60;
                      const y = 50 - ((p - minVal) / range) * 40;
                      return (
                        <g key={idx} className="group/dot cursor-pointer">
                          <circle
                            cx={x}
                            cy={y}
                            r="3"
                            fill="#ffffff"
                            stroke="#6366f1"
                            strokeWidth="1.5"
                            className="hover:r-4 transition-all duration-200"
                          />
                          {/* Hover tooltip anchor */}
                          <text
                            x={x}
                            y={y - 8}
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="8"
                            fontFamily="monospace"
                            className="opacity-0 group-hover/dot:opacity-100 transition-opacity bg-zinc-950"
                          >
                            {p}
                          </text>
                        </g>
                      );
                    })}
                  </>
                );
              })()}
            </svg>
          </div>

          {/* X axis labels */}
          <div className="flex justify-between text-[8px] font-mono text-zinc-500 px-1 pt-1">
            {currentChart.labels.map((lbl, idx) => (
              <span key={idx}>{lbl}</span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
