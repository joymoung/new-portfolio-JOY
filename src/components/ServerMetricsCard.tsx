import { useState, useEffect } from "react";
import { Server, ShieldCheck, Terminal, Cpu, Database, RefreshCw, Radio } from "lucide-react";
import { motion } from "motion/react";

interface LogMessage {
  time: string;
  type: "info" | "success" | "warn" | "security";
  message: string;
}

const INITIAL_LOGS: LogMessage[] = [
  { time: "10:22:03", type: "info", message: "FiveM Server Framework bootstrapped safely." },
  { time: "10:22:04", type: "success", message: "Database connection pools established with 16 connections." },
  { time: "10:22:05", type: "security", message: "API Token filter & Access Permissions initialized." },
  { time: "10:22:09", type: "info", message: "Audit trace loaded: 24 performance metrics synchronized." }
];

export default function ServerMetricsCard() {
  const [logs, setLogs] = useState<LogMessage[]>(INITIAL_LOGS);
  const [isOptimizing, setIsOptimizing] = useState<boolean>(false);
  const [cpuUsage, setCpuUsage] = useState<number>(18.4);
  const [ping, setPing] = useState<number>(12);
  const [activeThreads, setActiveThreads] = useState<number>(142);

  // Simulate real-time metrics fluctuates
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(prev => {
        const offset = (Math.random() - 0.5) * 4;
        const next = prev + offset;
        return next > 40 ? 40 : next < 5 ? 5 : parseFloat(next.toFixed(1));
      });
      setPing(prev => {
        const offset = Math.random() > 0.8 ? (Math.random() - 0.5) * 6 : 0;
        const next = Math.round(prev + offset);
        return next > 25 ? 25 : next < 8 ? 8 : next;
      });
      setActiveThreads(prev => {
        const offset = Math.random() > 0.7 ? Math.round((Math.random() - 0.5) * 4) : 0;
        const next = prev + offset;
        return next > 200 ? 200 : next < 100 ? 100 : next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const triggerOptimization = () => {
    setIsOptimizing(true);
    
    // Append loading log
    const timestamp = new Date().toTimeString().split(' ')[0];
    const triggerLog: LogMessage = {
      time: timestamp,
      type: "info",
      message: "Instructing SQL index compilation & GC routines..."
    };
    setLogs(prev => [triggerLog, ...prev.slice(0, 5)]);

    setTimeout(() => {
      setIsOptimizing(false);
      const finishedTimestamp = new Date().toTimeString().split(' ')[0];
      const successLog1: LogMessage = {
        time: finishedTimestamp,
        type: "success",
        message: "SQL Index normalized. Recalculated 145 relational keys."
      };
      const successLog2: LogMessage = {
        time: finishedTimestamp,
        type: "security",
        message: "Garbage collection completed. Liberated 342MB RAM."
      };
      setLogs(prev => [successLog1, successLog2, ...prev.slice(0, 4)]);
      setCpuUsage(8.2);
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-8 bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/[0.06] rounded-3xl transition-all duration-500 hover:border-orange-500/35 hover:shadow-[0_0_40px_rgba(249,115,22,0.12)] relative overflow-hidden group">
      
      <div>
        {/* Header Title Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">Infrastructure Engineering</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Custom FiveM Server Architecture</h3>
            </div>
          </div>
          <button 
            onClick={triggerOptimization}
            disabled={isOptimizing}
            className={`p-2 rounded-lg border text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center ${
              isOptimizing 
                ? "bg-orange-500/10 border-orange-500/20 text-orange-400 animate-spin" 
                : "bg-zinc-800/50 hover:bg-zinc-800 border-white/[0.04]"
            }`}
            title="Trigger System Optimization"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
          Founded and managed server-side virtual architectures, structuring robust SQL triggers, custom high-concurrency event handlers, and data sync optimizations.
        </p>
      </div>

      {/* Grid Server Dashboard */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-zinc-950/40 border border-white/[0.04] rounded-2xl p-4 flex flex-col justify-between">
          <span className="text-[10px] font-mono text-zinc-500 uppercase flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-zinc-400" /> Server CPU Load
          </span>
          <div className="mt-3">
            <div className="text-2xl font-extrabold text-white tracking-tight">{cpuUsage}%</div>
            <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden mt-1.5">
              <div 
                className="bg-orange-500 h-full transition-all duration-1000" 
                style={{ width: `${Math.min(100, cpuUsage * 2.5)}%` }} 
              />
            </div>
          </div>
        </div>

        <div className="bg-zinc-950/40 border border-white/[0.04] rounded-2xl p-4 flex flex-col justify-between">
          <span className="text-[10px] font-mono text-zinc-500 uppercase flex items-center gap-1">
            <Database className="w-3.5 h-3.5 text-zinc-400" /> DB Connection Ping
          </span>
          <div className="mt-3">
            <div className="text-2xl font-extrabold text-white tracking-tight">{ping} ms</div>
            <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1 mt-1">
              <Radio className="w-2.5 h-2.5 animate-pulse" /> Relational Pools Live
            </span>
          </div>
        </div>
      </div>

      {/* Terminal Activity Logs Console */}
      <div className="bg-zinc-950 rounded-2xl p-4 border border-white/[0.03] flex-1 min-h-[140px] flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-2.5 pb-1.5 border-b border-white/[0.03]">
            <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] font-mono uppercase">
              <Terminal className="w-3.5 h-3.5 text-orange-400" /> System Log Output
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>

          <div className="space-y-1.5 max-h-[90px] overflow-y-auto pr-1 text-[10px] font-mono scrollbar-none">
            {logs.map((log, i) => (
              <div key={i} className="flex items-start gap-2 text-zinc-400 leading-relaxed">
                <span className="text-zinc-600 flex-shrink-0">[{log.time}]</span>
                <span className={`flex-shrink-0 px-1 rounded-[3px] text-[8px] font-bold ${
                  log.type === "success" ? "bg-emerald-500/10 text-emerald-400" :
                  log.type === "security" ? "bg-indigo-500/10 text-indigo-400" :
                  log.type === "warn" ? "bg-rose-500/10 text-rose-400" :
                  "bg-zinc-800 text-zinc-400"
                }`}>
                  {log.type.toUpperCase()}
                </span>
                <span className="truncate text-zinc-300">{log.message}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between text-[9px] font-mono text-zinc-600 mt-2 pt-1 border-t border-white/[0.02]">
          <span>Thread Count: {activeThreads}</span>
          <span className="flex items-center gap-1 text-zinc-500">
            <ShieldCheck className="w-3 h-3 text-emerald-400" /> Secure Protocol v1.4
          </span>
        </div>
      </div>

    </div>
  );
}
