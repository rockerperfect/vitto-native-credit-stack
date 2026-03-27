import React, { useState, useEffect, useRef } from 'react';
import { Activity, ShieldCheck, Database, Zap, Cpu, ArrowUpRight } from 'lucide-react';

const InteractiveGlassArchitecture = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({
    riskScore: 782,
    throughput: "1.2 TB/s",
    aum: "$42.8B",
    uptime: "99.999%"
  });
  
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        riskScore: Math.floor(780 + Math.random() * 10),
        uptime: (99.998 + Math.random() * 0.002).toFixed(3) + "%"
      }));
    }, 3000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden group perspective-1000 scale-90 sm:scale-100"
    >
      {/* Background Grid Visualization */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) scale(1.1)` }}
      >
        <svg width="100%" height="100%" className="text-white/10">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Pulsing Data Paths */}
          <path d="M 0 100 Q 250 150 500 100" fill="none" stroke="rgba(211,47,47,0.4)" strokeWidth="1" className="animate-pulse" />
          <path d="M 100 0 Q 150 250 100 500" fill="none" stroke="rgba(211,47,47,0.2)" strokeWidth="1" className="animate-pulse" />
        </svg>
      </div>

      {/* Centerpiece: Primary Architecture Layer */}
      <div 
        className="relative z-20 w-[85%] aspect-video glass-card border-white/10 flex flex-col items-center justify-center p-8 transition-transform duration-500 ease-out preserve-3d"
        style={{ 
          transform: `rotateX(${mousePos.y * -10}deg) rotateY(${mousePos.x * 10}deg)`,
          boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), ${mousePos.x * -10}px ${mousePos.y * -10}px 30px rgba(211,47,47,0.05)`
        }}
      >
        {/* Core Engine Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center animate-float-slow">
           <Cpu size={48} className="text-accent animate-pulse" />
           <div className="absolute inset-0 rounded-full border border-accent/40 animate-ping opacity-20"></div>
        </div>

        {/* Distributed Stat Nodes (Parallax Layers) */}
        
        {/* Top Left: Risk Engine */}
        <div 
          className="absolute -top-6 sm:-top-12 -left-4 sm:-left-8 glass-card p-4 sm:p-5 border-accent/30 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 preserve-3d"
          style={{ transform: `translateZ(40px)` }}
        >
          <div className="flex items-center gap-3 mb-2">
             <ShieldCheck size={18} className="text-accent" />
             <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Risk Intelligence</div>
          </div>
          <div className="text-2xl font-bold tracking-tighter text-white font-header italic">{stats.riskScore} <span className="text-[8px] font-black text-accent uppercase">Verified</span></div>
        </div>

        {/* Bottom Right: AUM Output */}
        <div 
          className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 glass-card p-4 sm:p-5 border-white/10 animate-in fade-in slide-in-from-top-8 duration-1000 delay-300 preserve-3d"
          style={{ transform: `translateZ(60px)` }}
        >
          <div className="flex items-center gap-3 mb-2">
             <Database size={18} className="text-white/60" />
             <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">AUM Ecosystem</div>
          </div>
          <div className="text-2xl font-bold tracking-tighter text-white font-header italic">{stats.aum} <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">+2.4%</span></div>
        </div>

        {/* Top Right: System Throughput */}
        <div 
          className="absolute top-4 -right-12 glass-card p-4 bg-white/[0.01] border-white/5 opacity-60 backdrop-blur-sm scale-90 preserve-3d"
          style={{ transform: `translateZ(20px)` }}
        >
          <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">I/O Throughput</div>
          <div className="text-lg font-bold text-white/80 font-mono tracking-tighter">{stats.throughput}</div>
        </div>

        {/* Floating Code Snippet Placeholder */}
        <div className="absolute left-8 bottom-8 font-mono text-[9px] text-white/10 selection:bg-accent/20">
          <div className="text-accent/40"># Initialize Vitto Guardrails</div>
          <div>verify_risk_protocol(AUM_VALUE={stats.aum});</div>
          <div>execute_deployment_v2();</div>
        </div>

        {/* Central Overlay Gloss */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-white/5 pointer-events-none"></div>
      </div>

      {/* Decorative Light Rays */}
      <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-accent/[0.03] blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-accent/10 blur-[100px] opacity-20 -z-10 rounded-full"></div>

      {/* Interactive Cursor Glow */}
      <div 
        className="absolute w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10 opacity-60 mix-blend-screen"
        style={{ 
          left: `calc(50% + ${mousePos.x * 100}%)`, 
          top: `calc(50% + ${mousePos.y * 100}%)`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>
    </div>
  );
};

export default InteractiveGlassArchitecture;
