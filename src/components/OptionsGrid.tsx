import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface OptionsGridProps {
  options: string[];
  onSelect: (option: string) => void;
  disabled: boolean;
  selectedAnswer: string | null;
  correctAnswer: string;
  showFeedback: 'correct' | 'wrong' | null;
}

export function OptionsGrid({ 
  options, 
  onSelect, 
  disabled, 
  selectedAnswer, 
  correctAnswer,
  showFeedback 
}: OptionsGridProps) {
  
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md mx-auto px-2 sm:px-0">
      {options.map((option, index) => {
        const isSelected = selectedAnswer === option;
        const isCorrect = option === correctAnswer;
        
        let stateClass = "glass-button text-slate-700 hover:bg-white/90";
        
        if (showFeedback === 'correct') {
          if (isCorrect) {
            stateClass = "glass-button !bg-green-100/90 !border-green-400 text-green-700 shadow-[0_0_20px_rgba(34,197,94,0.6),inset_0_-4px_8px_rgba(0,0,0,0.05),inset_0_4px_8px_rgba(255,255,255,0.9)]";
          } else {
            stateClass = "glass-button opacity-50 grayscale";
          }
        } else if (showFeedback === 'wrong') {
          if (isSelected) {
            stateClass = "glass-button !bg-red-100/90 !border-red-400 text-red-700";
          } else {
            stateClass = "glass-button text-slate-700 hover:bg-white/90";
          }
        }

        return (
          <motion.button
            key={index}
            whileHover={!disabled ? { scale: 1.05 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
            onClick={() => onSelect(option)}
            disabled={disabled}
            className={cn(
              "h-20 sm:h-28 text-3xl sm:text-5xl flex items-center justify-center transition-colors duration-200 touch-manipulation",
              stateClass
            )}
            animate={
              showFeedback === 'wrong' && isSelected && !isCorrect
                ? { x: [-10, 10, -10, 10, 0], scale: 1 }
                : showFeedback === 'correct' && isCorrect
                ? { scale: [1, 1.1, 1], x: 0 }
                : { x: 0, scale: 1 }
            }
            transition={{ duration: 0.4 }}
          >
            {option}
          </motion.button>
        );
      })}
    </div>
  );
}
