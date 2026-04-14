import { Star, Zap, Infinity, Home } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  score: number;
  level: number;
  stars: number;
  maxLevels: number;
  difficulty: 'easy' | 'medium' | 'hard' | 'challenge';
  onBack: () => void;
}

export function Header({ score, level, stars, maxLevels, difficulty, onBack }: HeaderProps) {
  const isChallenge = level > maxLevels;
  const progress = isChallenge ? 100 : (level / maxLevels) * 100;

  return (
    <div className="w-full glass-panel p-4 sm:p-6 flex flex-col gap-2 sm:gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={onBack}
            className="p-1.5 sm:p-2 bg-white/80 text-slate-500 hover:bg-white hover:text-slate-700 rounded-full shadow-sm border border-white transition-colors"
            title="Back to Main Menu"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="flex items-center gap-1 sm:gap-2 bg-indigo-50/80 text-indigo-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-sm sm:text-base border border-indigo-100 shadow-sm">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 fill-indigo-500" />
            <span>{score}</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-lg sm:text-xl font-black text-indigo-900 flex items-center gap-1 sm:gap-2">
            {isChallenge ? (
              <>
                <Infinity className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                Challenge {level - maxLevels}
              </>
            ) : (
              `Level ${level}`
            )}
          </div>
          <div className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full mt-0.5 shadow-sm border ${
            difficulty === 'easy' ? 'bg-green-100/80 text-green-700 border-green-200' :
            difficulty === 'medium' ? 'bg-amber-100/80 text-amber-700 border-amber-200' :
            difficulty === 'hard' ? 'bg-red-100/80 text-red-700 border-red-200' :
            'bg-purple-100/80 text-purple-700 border-purple-200'
          }`}>
            {difficulty}
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 bg-amber-50/80 text-amber-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-sm sm:text-base border border-amber-100 shadow-sm">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-500" />
          <span>{stars}</span>
        </div>
      </div>

      <div className="w-full h-3 bg-indigo-50/50 rounded-full overflow-hidden mt-1 border border-indigo-100/50 shadow-inner">
        <motion.div 
          className={`h-full rounded-full ${isChallenge ? 'bg-gradient-to-r from-purple-400 to-fuchsia-400' : 'bg-gradient-to-r from-green-400 to-emerald-400'}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
