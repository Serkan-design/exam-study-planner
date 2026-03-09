import React, { useState } from 'react';
import { RotateCcw, CheckCircle2, XCircle, BrainCircuit, Trophy, Star } from 'lucide-react';
import { QUIZ_BANK } from '../data/quizzes';
import { motion, AnimatePresence } from 'framer-motion';

const QuizModal = ({ activeQuiz, setActiveQuiz }) => {
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  // Get current quiz data or fallback to default
  const currentQuizData = QUIZ_BANK[activeQuiz] || QUIZ_BANK.default;

  const handleSelect = (qIdx, oIdx) => {
    if (isFinished) return;
    setAnswers({ ...answers, [qIdx]: oIdx });
  };

  const getResult = () => {
    let correctCount = 0;
    currentQuizData.forEach((q, i) => {
      if (answers[i] === q.c) correctCount++;
    });
    return { count: correctCount, total: currentQuizData.length };
  };

  const finish = () => {
    setIsFinished(true);
  };

  const result = isFinished ? getResult() : null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#000414]/95 backdrop-blur-[100px] z-[200] flex items-center justify-center p-6 overflow-y-auto"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 50, opacity: 0 }}
        className="bg-[#000c2e] border-2 border-blue-500/30 w-full max-w-2xl rounded-3xl md:rounded-[4rem] p-6 md:p-12 shadow-[0_50px_150px_rgba(0,0,0,1)] relative"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 md:mb-12 relative z-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tighter uppercase leading-none">ÜNİTE <span className="text-blue-500">DENEME</span></h2>
            <div className="flex items-center gap-2 md:gap-3">
               <BrainCircuit size={16} className="text-blue-400"/>
               <p className="text-blue-300 text-[10px] md:text-xs font-black uppercase tracking-widest">{activeQuiz} - VİZE PROVASI</p>
            </div>
          </div>
          {isFinished && (
             <div className="bg-blue-600 px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 shadow-2xl shadow-blue-500/30 w-full md:w-auto">
                <Trophy className="text-white" size={20}/>
                <div className="flex flex-col">
                   <span className="text-[8px] md:text-[10px] font-black text-blue-200">BAŞARI ORANI</span>
                   <span className="text-xl md:text-2xl font-black text-white italic tabular-nums leading-none">%{Math.round((result.count/result.total)*100)}</span>
                </div>
             </div>
          )}
        </div>
        
        <div className="space-y-8 md:space-y-12 max-h-[50vh] md:max-h-[60vh] overflow-y-auto pr-2 md:pr-6 custom-scroll mb-8 md:mb-12">
          {currentQuizData.map((q, i) => (
             <div key={i} className="space-y-4 md:space-y-6">
                <div className="flex gap-3 md:gap-6">
                   <span className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-[10px] md:text-sm font-black text-blue-400 italic">0{i+1}</span>
                   <p className="text-white font-bold text-base md:text-xl leading-snug">{q.q}</p>
                </div>

                <div className="grid gap-2 md:gap-3 ml-0 md:ml-16">
                   {q.a.map((opt, oi) => {
                      const isSelected = answers[i] === oi;
                      const isCorrect = q.c === oi;
                      const showResult = isFinished;
                      
                      let style = "bg-white/5 border-white/5 text-slate-400";
                      if (!showResult) style += " hover:bg-white/10";
                      
                      if (isSelected) style = "bg-blue-600 border-blue-400 text-white shadow-lg";
                      if (showResult) {
                         if (isCorrect) style = "bg-emerald-500 border-emerald-400 text-white shadow-lg";
                         else if (isSelected) style = "bg-red-600 border-red-400 text-white shadow-lg opacity-80";
                         else style = "bg-white/5 border-white/5 text-slate-600 grayscale opacity-40";
                      }

                      return (
                         <button 
                           key={oi} 
                           onClick={() => handleSelect(i, oi)}
                           disabled={showResult}
                           className={`text-left p-4 md:p-6 rounded-xl md:rounded-[2rem] border text-xs md:text-sm font-black transition-all duration-300 flex justify-between items-center gap-4 ${style}`}
                         >
                           <span className="flex-1">{opt}</span>
                           {showResult && isCorrect && <CheckCircle2 size={20} className="shrink-0" />}
                           {showResult && isSelected && !isCorrect && <XCircle size={20} className="shrink-0" />}
                         </button>
                      );
                   })}
                </div>
             </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-6 md:pt-8 border-t border-white/5">
           {!isFinished ? (
              <button 
                onClick={finish}
                disabled={Object.keys(answers).length < currentQuizData.length}
                className="flex-1 py-4 md:py-6 bg-blue-600 text-white font-black text-xs md:text-sm tracking-[0.2em] rounded-xl md:rounded-[1.8rem] hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 disabled:opacity-50 disabled:grayscale uppercase"
              >
                 TESTİ BİTİR
              </button>
           ) : (
              <button 
                onClick={() => setActiveQuiz(null)}
                className="flex-1 py-4 md:py-6 bg-white text-black font-black text-xs md:text-sm tracking-[0.2em] rounded-xl md:rounded-[1.8rem] hover:bg-blue-100 transition-all uppercase"
              >
                 PANELE DÖN
              </button>
           )}
           <button onClick={() => setActiveQuiz(null)} className="py-4 md:px-8 md:py-6 rounded-xl md:rounded-[1.8rem] bg-white/5 text-slate-500 hover:text-white transition-all uppercase font-black text-[9px] md:text-[10px] tracking-widest">KAPAT</button>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default QuizModal;
