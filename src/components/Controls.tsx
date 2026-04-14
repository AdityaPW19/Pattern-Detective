import { Lightbulb, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ControlsProps {
  onHint: () => void;
  hintUsed: boolean;
  hintText: string;
  soundEnabled: boolean;
  toggleSound: () => void;
  disabled: boolean;
}

export function Controls({ onHint, hintUsed, hintText, soundEnabled, toggleSound, disabled }: ControlsProps) {
  return (
    <div className="w-full flex flex-col items-center gap-4 px-2 sm:px-0">
      <div className="flex justify-between w-full max-w-[335px] px-2 sm:px-4 mt-[10px]">
        <button
          onClick={toggleSound}
          className="p-2 sm:p-3 glass-button text-slate-500 hover:text-indigo-500 transition-colors touch-manipulation flex items-center justify-center rounded-full !rounded-full"
        >
          {soundEnabled ? <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" /> : <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>

        <button
          onClick={onHint}
          disabled={disabled || hintUsed}
          className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-b from-[#FFE898] to-[#FFC940] text-[#B45309] rounded-full font-bold border-[3px] border-white shadow-[0_4px_12px_rgba(251,191,36,0.4),inset_0_-4px_8px_rgba(217,119,6,0.2),inset_0_4px_8px_rgba(255,255,255,0.9)] hover:brightness-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base touch-manipulation"
        >
          <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
          Hint (-2 pts)
        </button>
      </div>

      <AnimatePresence>
        {hintUsed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-panel text-indigo-800 px-6 py-3 text-center max-w-md w-full font-medium"
          >
            🕵️‍♂️ Detective Hint: {hintText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
