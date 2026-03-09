import React from 'react';
import { PlayCircle, CheckCircle, ArrowRightCircle, BrainCircuit, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const CourseCard = ({ course, mode, startUnit, endUnit, percent, isDone, progress, toggleTask, switchMode, setActiveQuiz }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)' }}
      className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-900/50 border transition-all duration-300 ${isDone ? 'border-emerald-500/20 shadow-emerald-500/5' : 'border-slate-800'}`}
    >
      
      {/* Decorative Glow */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-20 transition-all duration-700 group-hover:opacity-40 ${isDone ? 'bg-emerald-500' : mode === 'vize' ? 'bg-blue-600' : 'bg-purple-600'}`}/>
      
      {/* Mode Badge - Floating */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-2">
         <div className={`px-3 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border backdrop-blur-md shadow-2xl transition-all duration-500 ${mode === 'vize' ? 'bg-blue-600/20 border-blue-500/30 text-blue-400' : 'bg-purple-600/20 border-purple-500/30 text-purple-400'}`}>
           {mode}
         </div>
      </div>

      <div className="p-8 relative z-20 h-full flex flex-col">
        {/* Course Info Header */}
        <div className="flex gap-6 mb-8 items-start">
          <div className={`shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 rotate-3 group-hover:rotate-0 shadow-lg ${isDone ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 'bg-slate-800 text-blue-400 border border-white/5 shadow-black/50'}`}>
            {course.icon}
          </div>
          <div className="overflow-hidden grow">
             <div className="flex items-center gap-2 mb-1">
                <Star className="text-orange-400 fill-current" size={12}/>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">ID: 00{course.id}</span>
             </div>
             <h2 className="font-extrabold text-xl leading-snug text-white group-hover:text-blue-400 transition-colors truncate">{course.name}</h2>
             <div className="flex items-center gap-2 mt-1">
                <Zap className="text-blue-500" size={12}/>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">İşlenen: {startUnit} — {endUnit}</p>
             </div>
          </div>
        </div>

        {/* Progress System */}
        <div className="bg-black/30 rounded-3xl p-5 mb-8 border border-white/5 relative overflow-hidden backdrop-blur-sm">
           <div className="flex justify-between items-end mb-4 relative z-10">
              <div className="flex flex-col">
                 <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">DERS DURUMU</span>
                 <span className={`text-2xl font-black italic tracking-tighter tabular-nums ${isDone ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'text-white'}`}>%{percent}</span>
              </div>
              <div className="text-right">
                 <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">BITİRİLEN</span>
                 <span className="text-xs font-bold text-slate-300 font-mono">{(percent/100 * ((endUnit-startUnit+1)*2)).toFixed(0)} / {(endUnit-startUnit+1)*2} ADIM</span>
              </div>
           </div>
           
           <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden relative border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 1, ease: "circOut" }}
                className={`h-full relative ${isDone ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]' : 'bg-linear-to-r from-blue-600 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]'}`}
              >
                  {!isDone && <div className="absolute top-0 right-0 h-full w-8 bg-white/20 blur-md animate-pulse"/>}
              </motion.div>
           </div>
        </div>

        {/* Action Grid/Tasks */}
        <div className="space-y-3 mb-10 overflow-auto max-h-[300px] pr-2 custom-scroll">
          {Array.from({ length: endUnit - startUnit + 1 }, (_, i) => startUnit + i).map(uNum => (
            <div key={uNum} className="group/item flex items-center justify-between p-4 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300">
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-0.5">MODÜL</span>
                 <span className="text-xs font-black text-slate-200 tracking-tight group-hover/item:text-blue-400 transition-colors">Ünite {uNum < 10 ? `0${uNum}` : uNum}</span>
              </div>
              
              <div className="flex gap-3">
                <TaskButton 
                  active={progress[`${course.id}-${uNum}-v`]} 
                  onClick={() => toggleTask(course.id, uNum, 'v')}
                  icon={<PlayCircle size={18}/>}
                  label="Video"
                />
                <TaskButton 
                  active={progress[`${course.id}-${uNum}-t`]} 
                  onClick={() => toggleTask(course.id, uNum, 't')}
                  icon={<CheckCircle size={18}/>}
                  label="Test"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Buttons */}
        <div className="mt-auto pt-4 border-t border-slate-800/50">
          {isDone && mode === 'vize' && (
            <button 
              onClick={() => switchMode(course.id)}
              className="w-full py-5 bg-linear-to-r from-blue-600 to-indigo-600 rounded-[1.5rem] font-black text-[11px] tracking-[0.3em] flex items-center justify-center gap-4 hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-blue-900/40 text-white uppercase"
            >
              <ArrowRightCircle size={20} className="animate-bounce-x" /> FINAL ETABINA GEÇİŞ YAP
            </button>
          )}

          {isDone && mode === 'final' && (
            <button 
              onClick={() => setActiveQuiz(course.name)}
              className="w-full py-5 bg-linear-to-r from-emerald-600/90 to-teal-600/90 rounded-[1.5rem] font-black text-[11px] tracking-[0.3em] flex items-center justify-center gap-4 hover:scale-[1.03] transition-all shadow-xl shadow-emerald-900/40 text-white uppercase group/btn"
            >
              <BrainCircuit size={20} className="group-hover/btn:rotate-12 transition-transform" /> SIMÜLASYON TESTİ BAŞLAT
            </button>
          )}

          {!isDone && (
            <div className="text-center">
              <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest italic flex items-center justify-center gap-2">
                 <CheckCircle size={10}/> Tamamlamak için üniteleri bitirin
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* Helper Item Button */
const TaskButton = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick} 
    className={`relative group/task flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 border ${active ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-slate-800/50 border-white/5 text-slate-500 hover:text-slate-300 hover:border-slate-500'}`}
  >
     {icon}
     <span className="text-[8px] font-black uppercase tracking-tighter">{label}</span>
     {active && (
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse"/>
     )}
  </button>
);

export default CourseCard;
