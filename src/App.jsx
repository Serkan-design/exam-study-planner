import React, { useState, useEffect, useMemo } from 'react';
import { 
  Check, Calendar, BookOpen, 
  ChevronRight, X, Book, Zap, Youtube, ArrowLeft, Trophy, RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ALL_COURSES, VIZE_DATE, VIZE_UNITS, 
  UNIT_TITLES, WEEKLY_SCHEDULE, 
  UNIT_DETAILS, UNIVERSITY, DEPARTMENT 
} from './data/courses';
import QuizModal from './components/QuizModal';

// Dynamic Scheduling Logic
const generateDailySchedule = (daysLeft, courses, vizeUnits) => {
  if (daysLeft <= 0) return [];
  
  const allTasks = [];
  courses.forEach(course => {
    for (let u = 1; u <= vizeUnits; u++) {
      allTasks.push({ c: course.id, u: u });
    }
  });

  const tasksPerDay = Math.ceil(allTasks.length / daysLeft);
  const schedule = [];

  for (let i = 0; i < daysLeft; i++) {
    const dayTasks = allTasks.slice(i * tasksPerDay, (i + 1) * tasksPerDay);
    if (dayTasks.length > 0) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      schedule.push({
        id: i + 1,
        label: i === 0 ? "BUGÜN" : i === 1 ? "YARIN" : `${i + 1}. GÜN`,
        date: date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', weekday: 'long' }),
        tasks: dayTasks
      });
    }
  }
  return schedule;
};

const App = () => {
  const [activeTab, setActiveTab] = useState('weekly');
  const [progress, setProgress] = useState(() => JSON.parse(localStorage.getItem('vize_study_v8') || '{}'));
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeUnitSummary, setActiveUnitSummary] = useState(null);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [daysLeft, setDaysLeft] = useState(0);

  const dailySchedule = useMemo(() => {
    return generateDailySchedule(daysLeft > 0 ? daysLeft : 1, ALL_COURSES, VIZE_UNITS);
  }, [daysLeft]);

  useEffect(() => {
    const target = new Date(VIZE_DATE);
    const now = new Date();
    const diff = target - now;
    setDaysLeft(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
  }, []);

  useEffect(() => {
    localStorage.setItem('vize_study_v8', JSON.stringify(progress));
  }, [progress]);

  const toggleTask = (cId, uId, type) => {
    const key = `${cId}-${uId}-${type}`;
    setProgress(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const resetProgress = () => {
    if (window.confirm('Tüm ilerlemenizi sıfırlamak istediğinize emin misiniz?')) {
      setProgress({});
      localStorage.removeItem('vize_study_v8');
    }
  };

  const calculateCourseProgress = (cId) => {
    let done = 0;
    for (let u = 1; u <= VIZE_UNITS; u++) {
      if (progress[`${cId}-${u}-v`]) done++;
      if (progress[`${cId}-${u}-t`]) done++;
    }
    return Math.round((done / (VIZE_UNITS * 2)) * 100);
  };

  const getOverallProgress = useMemo(() => {
    let totalTasks = ALL_COURSES.length * VIZE_UNITS * 2;
    let doneTasks = 0;
    ALL_COURSES.forEach(c => {
       for (let u = 1; u <= VIZE_UNITS; u++) {
          if (progress[`${c.id}-${u}-v`]) doneTasks++;
          if (progress[`${c.id}-${u}-t`]) doneTasks++;
       }
    });
    return Math.round((doneTasks / totalTasks) * 100);
  }, [progress]);

  const handleVideoClick = (cId, uId) => {
    const unit = UNIT_DETAILS[`${cId}-${uId}`];
    const url = unit?.videoUrl || `https://www.youtube.com/results?search_query=anadolu+üniversitesi+${ALL_COURSES.find(c => c.id === cId)?.name}+ünite+${uId}+özet`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#000414] text-white selection:bg-blue-600/30 font-sans pb-20 custom-scroll overflow-x-hidden">
      
      {/* Dashboard Header */}
      <header className="px-4 py-6 md:px-12 md:py-10 bg-linear-to-b from-[#0022cc]/60 to-transparent relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[150px] -z-10 animate-pulse"/>
        
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
               <div className="flex items-center gap-2">
                  <div className="w-6 h-1 rounded-full bg-blue-500 shadow-[0_0_10px_blue]"/>
                  <p className="text-[9px] font-black tracking-[0.2em] text-blue-200 uppercase opacity-80">{UNIVERSITY}</p>
               </div>
               <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white leading-none">
                  VİZE <span className="text-blue-500">2026</span>
               </h1>
               <p className="text-[10px] md:text-xs font-bold text-blue-100 italic tracking-tight opacity-70 border-l-2 border-blue-600 pl-3">{DEPARTMENT}</p>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative group flex-1 md:flex-none">
                  <div className="absolute inset-0 bg-blue-600/5 blur-[20px] group-hover:bg-blue-600/10 transition-all"/>
                  <div className="relative bg-[#000c2e]/60 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 backdrop-blur-3xl flex items-center justify-around md:justify-start gap-4 md:gap-6">
                     <div className="flex flex-col items-center">
                        <span className="text-[8px] md:text-[9px] font-black text-blue-400 tracking-[0.1em] mb-0.5 uppercase">İLERLEME</span>
                        <div className="text-xl md:text-3xl font-black italic tracking-tighter text-white tabular-nums">%{getOverallProgress}</div>
                     </div>
                     <div className="w-px h-8 bg-white/10"/>
                     <div className="flex flex-col items-center">
                        <span className="text-[8px] md:text-[9px] font-black text-rose-400 tracking-[0.1em] mb-0.5 uppercase">KALAN SÜRE</span>
                        <div className="text-xl md:text-3xl font-black italic tracking-tighter text-white tabular-nums">{daysLeft} <span className="text-[9px] md:text-[10px] not-italic opacity-50">GÜN</span></div>
                     </div>
                  </div>
               </div>
               <button 
                  onClick={resetProgress}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
                  title="Sıfırla"
               >
                  <RotateCcw size={18} />
               </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-12 mt-6 md:mt-8 relative z-10">
        <AnimatePresence mode="wait">
          {!selectedCourse ? (
             <motion.div 
               key="main-nav"
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className="flex gap-2 mb-6 md:mb-10 p-1.5 md:p-2 bg-[#000c2e]/90 rounded-xl md:rounded-2xl w-full md:w-fit border border-blue-900/40 shadow-2xl backdrop-blur-xl"
             >
                <div className="grid grid-cols-2 gap-2 w-full md:flex md:w-fit">
                   <TabBtn active={activeTab === 'weekly'} onClick={() => setActiveTab('weekly')} icon={<Calendar size={18} />} label="AJANDA" />
                   <TabBtn active={activeTab === 'courses'} onClick={() => setActiveTab('courses')} icon={<BookOpen size={18} />} label="DERSLER" />
                </div>
             </motion.div>
          ) : (
             <motion.div 
               key="breadcrumb"
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="flex items-center gap-4 mb-10"
             >
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                   <ArrowLeft size={20} />
                </button>
                <div>
                   <span className="text-[10px] font-black text-blue-500 tracking-[0.2em] uppercase">KONU SEÇİMİ</span>
                   <h2 className="text-2xl md:text-3xl font-black italic text-white tracking-tighter uppercase">{selectedCourse.name}</h2>
                </div>
             </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {!selectedCourse ? (
            activeTab === 'weekly' ? (
              <motion.div key="weekly-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12 pb-20">
                <div className="bg-blue-600/10 border border-blue-500/20 p-5 md:p-6 rounded-2xl md:rounded-3xl mb-8 md:mb-12">
                   <h3 className="text-base md:text-lg font-black italic text-blue-400 mb-2 flex items-center gap-2">
                      <Zap size={18} /> AKILLI PLANLAYICI
                   </h3>
                   <p className="text-[11px] md:text-sm text-blue-100/70 leading-relaxed">
                      Sınava <b>{daysLeft} gün</b> kaldı. Günlük ortalama <b>{Math.ceil((ALL_COURSES.length * VIZE_UNITS) / (daysLeft || 1))} ünite</b> çalışmalısın. Ajandan dinamik olarak hazırlandı.
                   </p>
                </div>

                {dailySchedule.map((day, idx) => (
                   <section key={day.id} className="relative">
                      <div className="flex items-end gap-4 mb-6">
                         <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter text-blue-500/20 -mb-1">{day.id < 10 ? `0${day.id}` : day.id}</h3>
                         <div className="space-y-0.5 pb-0.5">
                            <h2 className="text-xl md:text-2xl font-black italic text-white tracking-tighter uppercase">{day.label}</h2>
                            <p className="text-sm font-bold text-blue-400 opacity-80">{day.date}</p>
                         </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6 border-l-2 border-blue-900/20 pl-6 md:pl-10 relative">
                         {day.tasks.map((task, tidx) => {
                            const course = ALL_COURSES.find(c => c.id === task.c);
                            const isDone = progress[`${task.c}-${task.u}-v`] && progress[`${task.c}-${task.u}-t`];
                            return (
                               <div key={tidx} className="group relative">
                                  <div className="absolute -left-[30px] md:-left-[46px] top-6 w-3 h-3 rounded-full bg-[#000414] border-2 border-blue-600 z-10 group-hover:bg-blue-600 transition-colors shadow-[0_0_8px_blue]"/>
                                  
                                  <div className={`bg-[#000c2e]/60 border-2 rounded-2xl md:rounded-[2rem] p-4 md:p-6 backdrop-blur-xl transition-all duration-500 shadow-xl relative overflow-hidden ${isDone ? 'border-emerald-500/30' : 'border-[#001c4d] hover:border-blue-500/40'}`}>
                                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
                                        <div className="space-y-1.5 cursor-pointer flex-1" onClick={() => setActiveUnitSummary(`${task.c}-${task.u}`)}>
                                           <div className="flex items-center gap-2 flex-wrap">
                                              <span className="px-1.5 py-0.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-[8px] font-black text-blue-400 uppercase">ÜNİTE {task.u}</span>
                                              <h4 className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none">{course?.name}</h4>
                                           </div>
                                           <h3 className={`text-sm md:text-xl font-black italic tracking-tight transition-colors ${isDone ? 'text-slate-500 line-through' : 'text-white'}`}>
                                              {UNIT_TITLES[`${task.c}-${task.u}`] || "Çalışma Konusu"}
                                           </h3>
                                        </div>

                                        <div className="flex gap-2 shrink-0">
                                           <StudyAction 
                                              active={progress[`${task.c}-${task.u}-v`]} 
                                              onClick={() => { toggleTask(task.c, task.u, 'v'); handleVideoClick(task.c, task.u); }}
                                              icon={<Youtube size={20} />} 
                                              label="VİDEO" 
                                              color="red"
                                           />
                                           <StudyAction 
                                              active={progress[`${task.c}-${task.u}-t`]} 
                                              onClick={() => toggleTask(task.c, task.u, 't')}
                                              icon={<Check size={20} strokeWidth={4} />} 
                                              label="BİTTİ" 
                                              color="blue"
                                           />
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            );
                         })}
                      </div>
                   </section>
                ))}
              </motion.div>
            ) : (
              <motion.div key="courses-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                 {ALL_COURSES.map(course => (
                    <div 
                      key={course.id} 
                      onClick={() => setSelectedCourse(course)}
                      className="bg-[#000c2e]/80 border-2 border-blue-900/40 p-6 rounded-3xl hover:border-blue-500/50 transition-all group cursor-pointer shadow-xl hover:-translate-y-2 relative overflow-hidden backdrop-blur-md"
                    >
                       <div className="absolute top-0 right-0 p-8 translate-x-1/4 -translate-y-1/4 opacity-5 scale-150 group-hover:opacity-10 transition-all duration-700">{course.icon}</div>
                       <div className="flex items-center gap-4 mb-6 relative z-10">
                          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                             {course.icon}
                          </div>
                          <h3 className="text-base font-black text-white italic tracking-tighter leading-tight uppercase group-hover:text-blue-400 transition-colors">{course.name}</h3>
                       </div>
                       <div className="space-y-4 relative z-10 border-t border-white/5 pt-6">
                          <div className="flex justify-between items-end">
                             <span className="text-[9px] font-black text-blue-300 opacity-60 uppercase tracking-[0.1em]">İLERLEME</span>
                             <span className="text-xl font-black text-blue-500 italic tabular-nums">%{calculateCourseProgress(course.id)}</span>
                          </div>
                          <div className="h-2 w-full bg-[#000414] rounded-full overflow-hidden shadow-inner border border-white/5">
                             <motion.div initial={{ width: 0 }} animate={{ width: `${calculateCourseProgress(course.id)}%` }} className="h-full bg-linear-to-r from-blue-700 to-blue-500 shadow-[0_0_10px_blue/40]"/>
                          </div>
                          <div className="flex items-center gap-2 pt-1 border-t border-white/5 mt-2">
                             <ChevronRight size={14} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                             <span className="text-[9px] font-black text-blue-200 uppercase tracking-widest">Tüm Üniteler</span>
                          </div>
                       </div>
                    </div>
                 ))}
              </motion.div>
            )
          ) : (
            <motion.div key="unit-drilldown" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 pb-20">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(VIZE_UNITS)].map((_, i) => {
                     const uNum = i + 1;
                     const isDone = progress[`${selectedCourse.id}-${uNum}-v`] && progress[`${selectedCourse.id}-${uNum}-t`];
                     return (
                        <div 
                           key={uNum}
                           className={`p-6 rounded-3xl bg-[#000c2e]/60 border-2 transition-all cursor-pointer shadow-lg relative overflow-hidden group/box ${isDone ? 'border-emerald-500/30' : 'border-blue-900/40 hover:border-blue-500/50'}`}
                           onClick={() => setActiveUnitSummary(`${selectedCourse.id}-${uNum}`)}
                        >
                           <div className="flex justify-between items-start gap-4">
                              <div className="space-y-3 flex-1">
                                 <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 text-[9px] font-black tracking-widest">ÜNİTE {uNum}</span>
                                    {isDone && <Trophy size={16} className="text-emerald-500" />}
                                 </div>
                                 <h3 className="text-lg md:text-xl font-black italic text-white tracking-tighter uppercase group-hover/box:text-blue-400 transition-colors">
                                    {UNIT_TITLES[`${selectedCourse.id}-${uNum}`] || "Çalışma Ünitesi"}
                                 </h3>
                                 <p className="text-xs font-bold text-slate-500 line-clamp-2 italic opacity-60">
                                    {UNIT_DETAILS[`${selectedCourse.id}-${uNum}`]?.summary || "Bu ünite için içerik hazırlanıyor..."}
                                 </p>
                              </div>
                              <div className="shrink-0 flex gap-2 flex-col">
                                 <button 
                                    onClick={(e) => { e.stopPropagation(); handleVideoClick(selectedCourse.id, uNum); }}
                                    className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center"
                                 >
                                    <Youtube size={18} />
                                 </button>
                                 <button 
                                    onClick={(e) => { e.stopPropagation(); toggleTask(selectedCourse.id, uNum, 't'); }}
                                    className={`w-10 h-10 rounded-xl border transition-all flex items-center justify-center ${progress[`${selectedCourse.id}-${uNum}-t`] ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-blue-600/5 border-white/5 text-blue-400'}`}
                                 >
                                    <Check size={20} strokeWidth={4} />
                                 </button>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeUnitSummary && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-[100px] bg-black/70">
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0, y: 30 }}
                 animate={{ scale: 1, opacity: 1, y: 0 }}
                 exit={{ scale: 0.9, opacity: 0, y: 30 }}
                 className="w-full max-w-4xl bg-linear-to-br from-[#000c2e] to-[#000414] border-2 border-blue-500/30 rounded-3xl md:rounded-[4rem] p-6 md:p-16 shadow-[0_0_150px_rgba(0,0,0,1)] relative max-h-[90vh] overflow-y-auto custom-scroll"
               >
                  <button onClick={() => setActiveUnitSummary(null)} className="absolute top-6 right-6 md:top-12 md:right-12 text-slate-500 hover:text-white transition-all bg-white/5 p-3 md:p-4 rounded-xl md:rounded-[2rem] border border-white/10 z-20">
                    <X size={24} />
                  </button>
                  
                  <div className="space-y-8 md:space-y-12">
                     <div className="space-y-3 md:space-y-4 pr-12">
                        <div className="flex items-center gap-3 text-blue-400">
                           <Book size={20} />
                           <span className="text-[9px] font-black uppercase tracking-[0.4em] font-mono">KONU ANLATIMI VE ÖZET KONSOLLERİ</span>
                        </div>
                        <h2 className="text-xl md:text-5xl font-black italic tracking-tighter text-white uppercase leading-tight drop-shadow-2xl">
                           {UNIT_TITLES[activeUnitSummary] || "Haftalık Konu Detayı"}
                        </h2>
                     </div>

                     <div className="grid grid-cols-1 gap-6 md:gap-10">
                         <div className="bg-[#001c4d]/30 p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-blue-500/10">
                            <h4 className="text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase mb-4">VİZE KAPSAMI KONU LİSTESİ</h4>
                            <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                               {[...Array(7)].map((_, i) => (
                                  <div key={i} className={`p-2 rounded-lg border text-[8px] md:text-[10px] font-bold text-center ${activeUnitSummary?.endsWith(`-${i+1}`) ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-black/20 border-white/5 text-slate-500'}`}>
                                     Ü{i+1}
                                  </div>
                               ))}
                            </div>
                         </div>

                         <div className="bg-[#001c4d]/50 p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-blue-500/20 shadow-inner group">
                            <h4 className="flex items-center gap-3 text-[10px] font-black tracking-widest text-blue-400 uppercase mb-4">
                               <Zap size={18} fill="currentColor" /> ANALİZ NOTLARI
                            </h4>
                            <div className="text-sm md:text-lg text-slate-300 leading-relaxed font-medium whitespace-pre-line border-l-2 border-blue-600 pl-4 md:pl-6">
                               {UNIT_DETAILS[activeUnitSummary]?.content || "Yükleniyor..."}
                            </div>
                         </div>
                        
                        <div className="pt-4 md:pt-10 flex flex-col md:flex-row gap-4 md:gap-6">
                           <button 
                             onClick={() => handleVideoClick(activeUnitSummary.split('-')[0], activeUnitSummary.split('-')[1])}
                             className="flex-1 py-4 md:py-6 rounded-2xl md:rounded-3xl bg-red-600 text-white font-black text-[10px] md:text-sm tracking-[0.2em] shadow-xl shadow-red-500/20 transition-all uppercase flex items-center justify-center gap-3"
                           >
                              <Youtube size={20} /> VİDEO İLE ÇALIŞ
                           </button>
                           <button 
                             onClick={() => { setActiveQuiz(activeUnitSummary); setActiveUnitSummary(null); }}
                             className="flex-1 py-4 md:py-6 rounded-2xl md:rounded-3xl bg-blue-600 text-white font-black text-[10px] md:text-sm tracking-[0.2em] shadow-xl shadow-blue-500/20 transition-all uppercase flex items-center justify-center gap-3"
                           >
                              <Zap size={20} /> TEST ÇÖZ
                           </button>
                           <button 
                             onClick={() => setActiveUnitSummary(null)} 
                             className="hidden md:flex flex-1 py-4 md:py-6 rounded-2xl md:rounded-3xl border-2 border-[#0022cc] text-blue-400 font-black text-sm tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all uppercase items-center justify-center"
                           >
                              KAPAT
                           </button>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {activeQuiz && (
            <QuizModal activeQuiz={activeQuiz} setActiveQuiz={setActiveQuiz} />
          )}
        </AnimatePresence>
      </main>

      <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-50">
         <div className="px-5 py-3 md:px-8 md:py-5 rounded-2xl md:rounded-[2.5rem] bg-[#000c2e]/90 border border-blue-500/30 backdrop-blur-3xl flex items-center gap-3 md:gap-5 text-[8px] md:text-xs font-black text-blue-300 uppercase tracking-widest shadow-2xl">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_emerald] animate-pulse" /> Kayıtlarınız Güvende
         </div>
      </div>
    </div>
  );
};

const TabBtn = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black text-[10px] tracking-[0.1em] transition-all duration-500 flex-1 md:flex-none ${active ? 'bg-blue-600 shadow-[0_0_20px_blue/30] text-white' : 'text-blue-500 hover:text-white hover:bg-white/5'}`}
  >
     {icon} {label}
  </button>
);

const StudyAction = ({ active, onClick, icon, label, color }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1.5 p-3 min-w-[70px] rounded-2xl transition-all duration-500 border ${active ? (color === 'red' ? 'bg-red-600 border-red-400 text-white' : 'bg-emerald-500 border-emerald-400 text-white') : 'bg-[#000c2e] text-blue-400 border-white/5 hover:border-blue-500/40 hover:text-white'}`}
  >
     <div>{icon}</div>
     <span className="text-[8px] font-black uppercase tracking-tighter opacity-80">{label}</span>
  </button>
);

export default App;
