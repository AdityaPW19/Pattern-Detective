import { motion } from 'motion/react';
import { Search, Star, Zap, Play, RotateCcw, Infinity, Lock } from 'lucide-react';

interface StartScreenProps {
  key?: string;
  onStart: () => void;
  onContinue: () => void;
  onChallenge: () => void;
  highestLevelCompleted: number;
  totalLevels: number;
  totalScore: number;
  totalStars: number;
}

export function StartScreen({ 
  onStart, 
  onContinue, 
  onChallenge, 
  highestLevelCompleted, 
  totalLevels, 
  totalScore, 
  totalStars 
}: StartScreenProps) {
  const hasProgress = highestLevelCompleted > 0;
  const allLevelsCompleted = highestLevelCompleted >= totalLevels;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="glass-panel p-6 sm:p-10 text-center max-w-md w-full mx-auto relative"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-inner">
        <Search className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-500" />
      </div>
      
      <h1 className="text-4xl sm:text-6xl font-black mb-2 tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Pattern</span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">Detective</span>
      </h1>
      
      <p className="text-sm sm:text-base text-slate-500 mb-6 font-medium">
        Find the missing piece and solve the mystery!
      </p>

      {/* Stats Section */}
      <div className="bg-slate-50 rounded-2xl p-4 mb-6 sm:mb-8 border-2 border-slate-100 flex flex-col gap-3">
        <div className="flex justify-between items-center text-base sm:text-lg font-bold text-slate-700">
          <span>Levels Completed:</span>
          <span className="text-indigo-500">{Math.min(highestLevelCompleted, totalLevels)} / {totalLevels}</span>
        </div>
        <div className="h-px bg-slate-200 w-full"></div>
        <div className="flex justify-between items-center text-base sm:text-lg font-bold text-slate-700">
          <span>Total Score:</span>
          <div className="flex items-center gap-1 text-indigo-500">
            <span>{totalScore}</span>
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-indigo-500" />
          </div>
        </div>
        <div className="h-px bg-slate-200 w-full"></div>
        <div className="flex justify-between items-center text-base sm:text-lg font-bold text-slate-700">
          <span>Total Stars:</span>
          <div className="flex items-center gap-1 text-amber-500">
            <span>{totalStars}</span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-500" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        {hasProgress && !allLevelsCompleted && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContinue}
            className="w-full py-3 sm:py-4 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-2xl text-xl sm:text-2xl font-bold shadow-lg shadow-indigo-200 border-b-4 border-indigo-700 hover:border-indigo-600 transition-all touch-manipulation"
          >
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
            Continue (Level {Math.min(highestLevelCompleted + 1, totalLevels)})
          </motion.button>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className={`w-full py-3 sm:py-4 flex items-center justify-center gap-2 text-white rounded-2xl text-xl sm:text-2xl font-bold shadow-lg transition-all touch-manipulation ${
            hasProgress 
              ? 'bg-slate-400 shadow-slate-200 border-b-4 border-slate-600 hover:border-slate-500' 
              : 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-200 border-b-4 border-green-700 hover:border-green-600'
          }`}
        >
          {hasProgress ? <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />}
          {hasProgress ? 'Restart from Level 1' : 'Play Now!'}
        </motion.button>

        <motion.button
          whileHover={allLevelsCompleted ? { scale: 1.05 } : {}}
          whileTap={allLevelsCompleted ? { scale: 0.95 } : {}}
          onClick={allLevelsCompleted ? onChallenge : undefined}
          disabled={!allLevelsCompleted}
          className={`w-full py-3 sm:py-4 flex items-center justify-center gap-2 text-white rounded-2xl text-xl sm:text-2xl font-bold shadow-lg transition-all touch-manipulation ${
            allLevelsCompleted 
              ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-purple-200 border-b-4 border-purple-700 hover:border-purple-600' 
              : 'bg-slate-300 shadow-none border-b-4 border-slate-400 cursor-not-allowed opacity-80'
          }`}
        >
          {allLevelsCompleted ? (
            <Infinity className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
          Challenge Mode
        </motion.button>
        
        {!allLevelsCompleted && (
          <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
            Complete all {totalLevels} levels to unlock Challenge Mode
          </p>
        )}
      </div>
    </motion.div>
  );
}
