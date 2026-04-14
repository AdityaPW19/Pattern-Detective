import { motion } from 'motion/react';

interface PatternDisplayProps {
  pattern: string[];
}

export function PatternDisplay({ pattern }: PatternDisplayProps) {
  return (
    <div className="w-full glass-panel p-4 sm:p-6 flex flex-col items-center gap-4 sm:gap-6">
      <h2 className="text-2xl sm:text-3xl font-black text-purple-600 tracking-wide">What comes next?</h2>
      
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 w-full">
        {pattern.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 15,
              delay: index * 0.1 
            }}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-[0_4px_8px_rgba(0,0,0,0.05),inset_0_-4px_8px_rgba(0,0,0,0.05)] border-2 border-white"
          >
            {item}
          </motion.div>
        ))}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: pattern.length * 0.1 }}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/50 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-inner border-[3px] border-dashed border-indigo-300 text-indigo-500 font-bold"
        >
          ?
        </motion.div>
      </div>
    </div>
  );
}
