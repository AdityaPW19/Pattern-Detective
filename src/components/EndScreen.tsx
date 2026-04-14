import { motion } from 'motion/react';
import { Star, Trophy, RotateCcw, Infinity, Home } from 'lucide-react';

interface EndScreenProps {
  key?: string;
  score: number;
  stars: number;
  maxStars: number;
  onRestart: () => void;
  onChallenge: () => void;
  onHome: () => void;
}

export function EndScreen({ score, stars, maxStars, onRestart, onChallenge, onHome }: EndScreenProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="glass-panel p-6 sm:p-12 text-center max-w-md w-full mx-auto"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-inner">
        <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500" />
      </div>
      
      <h1 className="text-4xl sm:text-6xl font-black mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
        Great Job!
      </h1>
      <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 font-bold">
        Detective, you solved them all!
      </p>
      
      <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border-2 border-slate-100 flex flex-col gap-3 sm:gap-4">
        <div className="flex justify-between items-center text-xl sm:text-2xl font-bold text-slate-700">
          <span>Final Score:</span>
          <span className="text-indigo-500">{score}</span>
        </div>
        <div className="h-px bg-slate-200 w-full"></div>
        <div className="flex justify-between items-center text-xl sm:text-2xl font-bold text-slate-700">
          <span>Stars Earned:</span>
          <div className="flex items-center gap-2 text-amber-500">
            <span>{stars} / {maxStars}</span>
            <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-500" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onChallenge}
          className="w-full py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 bg-purple-500 text-white rounded-2xl text-xl sm:text-2xl font-bold shadow-lg shadow-purple-200 border-b-4 border-purple-700 hover:border-purple-600 transition-all touch-manipulation"
        >
          <Infinity className="w-5 h-5 sm:w-6 sm:h-6" />
          Play Challenge Mode
        </motion.button>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="flex-1 py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 bg-green-500 text-white rounded-2xl text-lg sm:text-xl font-bold shadow-lg shadow-green-200 border-b-4 border-green-700 hover:border-green-600 transition-all touch-manipulation"
          >
            <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
            Play Again
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onHome}
            className="flex-1 py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 bg-slate-400 text-white rounded-2xl text-lg sm:text-xl font-bold shadow-lg shadow-slate-200 border-b-4 border-slate-600 hover:border-slate-500 transition-all touch-manipulation"
          >
            <Home className="w-5 h-5 sm:w-6 sm:h-6" />
            Main Menu
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
