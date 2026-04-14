import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './Header';
import { PatternDisplay } from './PatternDisplay';
import { OptionsGrid } from './OptionsGrid';
import { Controls } from './Controls';
import { Level } from '../data/levels';
import { soundEngine } from '../utils/sound';
import { motion } from 'motion/react';

interface GameContainerProps {
  key?: string;
  level: Level;
  levelIndex: number;
  maxLevels: number;
  score: number;
  stars: number;
  streak: number;
  soundEnabled: boolean;
  onLevelComplete: (points: number, starsEarned: number, newStreak: number) => void;
  toggleSound: () => void;
  onBack: () => void;
}

export function GameContainer({
  level,
  levelIndex,
  maxLevels,
  score,
  stars,
  streak,
  soundEnabled,
  onLevelComplete,
  toggleSound,
  onBack
}: GameContainerProps) {
  const [mistakes, setMistakes] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Reset state when level changes
  useEffect(() => {
    setMistakes(0);
    setHintUsed(false);
    setSelectedAnswer(null);
    setShowFeedback(null);
  }, [level.id]);

  const handleHint = () => {
    soundEngine.playClick();
    setHintUsed(true);
  };

  const handleSelect = (option: string) => {
    if (showFeedback) return; // Prevent multiple clicks

    setSelectedAnswer(option);

    if (option === level.answer) {
      // Correct
      soundEngine.playCorrect();
      setShowFeedback('correct');
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366F1', '#22C55E', '#F59E0B', '#EC4899']
      });

      setTimeout(() => {
        let points = 10;
        if (hintUsed) points -= 2;
        
        let newStreak = streak + 1;
        if (newStreak === 3) points += 5;
        if (newStreak === 5) points += 10;

        let starsEarned = 3;
        if (mistakes === 1) starsEarned = 2;
        if (mistakes >= 2) starsEarned = 1;

        onLevelComplete(points, starsEarned, newStreak);
      }, 1500);

    } else {
      // Wrong
      soundEngine.playWrong();
      setShowFeedback('wrong');
      setMistakes(m => m + 1);
      
      setTimeout(() => {
        setShowFeedback(null);
        setSelectedAnswer(null);
      }, 800);
    }
  };

  return (
    <motion.div 
      key={level.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full max-w-md mx-auto flex flex-col items-center gap-8 sm:gap-8"
    >
      <Header 
        score={score} 
        level={levelIndex + 1} 
        stars={stars} 
        maxLevels={maxLevels} 
        difficulty={level.difficulty}
        onBack={onBack}
      />
      
      <div className="w-full">
        <PatternDisplay pattern={level.pattern} />
      </div>

      <div className="w-full">
        <OptionsGrid 
          options={level.options}
          onSelect={handleSelect}
          disabled={showFeedback === 'correct'}
          selectedAnswer={selectedAnswer}
          correctAnswer={level.answer}
          showFeedback={showFeedback}
        />
      </div>

      <div className="w-full mt-auto">
        <Controls 
          onHint={handleHint}
          hintUsed={hintUsed}
          hintText={level.hint}
          soundEnabled={soundEnabled}
          toggleSound={toggleSound}
          disabled={showFeedback === 'correct'}
        />
      </div>
    </motion.div>
  );
}
