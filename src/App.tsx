import { useState, useEffect } from 'react';
import { StartScreen } from './components/StartScreen';
import { GameContainer } from './components/GameContainer';
import { EndScreen } from './components/EndScreen';
import { levels, generateChallengeLevel } from './data/levels';
import { soundEngine } from './utils/sound';
import { AnimatePresence } from 'motion/react';

interface LevelStats {
  score: number;
  stars: number;
}

export default function App() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>('start');
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [streak, setStreak] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Persistent stats
  const [highestLevelCompleted, setHighestLevelCompleted] = useState(0);
  const [levelStats, setLevelStats] = useState<Record<number, LevelStats>>({});

  useEffect(() => {
    const savedHighestLevel = localStorage.getItem('pattern_detective_highest_level');
    const savedStats = localStorage.getItem('pattern_detective_stats');
    
    if (savedHighestLevel) {
      setHighestLevelCompleted(parseInt(savedHighestLevel, 10));
    }
    if (savedStats) {
      try {
        setLevelStats(JSON.parse(savedStats));
      } catch (e) {
        console.error("Failed to parse stats", e);
      }
    }
  }, []);

  const startGame = (startFromLevel: number = 0) => {
    soundEngine.playClick();
    setGameState('playing');
    setCurrentLevelIndex(startFromLevel);
    
    // Calculate initial score and stars based on previous levels if continuing
    let initialScore = 0;
    let initialStars = 0;
    for (let i = 0; i < startFromLevel; i++) {
      if (levelStats[i]) {
        initialScore += levelStats[i].score;
        initialStars += levelStats[i].stars;
      }
    }
    
    setScore(initialScore);
    setStars(initialStars);
    setStreak(0);
  };

  const startChallengeMode = () => {
    soundEngine.playClick();
    setGameState('playing');
    setCurrentLevelIndex(levels.length);
    
    // Calculate total score and stars from main levels
    let initialScore = 0;
    let initialStars = 0;
    for (let i = 0; i < levels.length; i++) {
      if (levelStats[i]) {
        initialScore += levelStats[i].score;
        initialStars += levelStats[i].stars;
      }
    }
    
    setScore(initialScore);
    setStars(initialStars);
    setStreak(0);
  };

  const handleLevelComplete = (points: number, starsEarned: number, newStreak: number) => {
    setScore(s => s + points);
    setStars(s => s + starsEarned);
    
    if (newStreak === 0) {
      setStreak(0);
    } else {
      setStreak(newStreak);
    }

    // Save stats for the current level
    const newStats = { ...levelStats };
    const currentStats = newStats[currentLevelIndex] || { score: 0, stars: 0 };
    
    // Only update if they got a better score/stars
    if (points > currentStats.score || starsEarned > currentStats.stars) {
      newStats[currentLevelIndex] = {
        score: Math.max(points, currentStats.score),
        stars: Math.max(starsEarned, currentStats.stars)
      };
      setLevelStats(newStats);
      localStorage.setItem('pattern_detective_stats', JSON.stringify(newStats));
    }

    // Update highest level completed
    if (currentLevelIndex >= highestLevelCompleted) {
      const newHighest = currentLevelIndex + 1;
      setHighestLevelCompleted(newHighest);
      localStorage.setItem('pattern_detective_highest_level', newHighest.toString());
    }

    if (currentLevelIndex + 1 < levels.length) {
      soundEngine.playLevelUp();
      setCurrentLevelIndex(i => i + 1);
    } else if (currentLevelIndex + 1 === levels.length) {
      soundEngine.playLevelUp();
      setGameState('end');
    } else {
      // Challenge mode
      soundEngine.playLevelUp();
      setCurrentLevelIndex(i => i + 1);
    }
  };

  const toggleSound = () => {
    soundEngine.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      soundEngine.playClick();
    }
  };

  const currentLevel = currentLevelIndex < levels.length 
    ? levels[currentLevelIndex] 
    : generateChallengeLevel(currentLevelIndex - levels.length + 1);

  // Calculate total stats for display
  const totalScore = Object.values(levelStats).reduce((sum, stat) => sum + stat.score, 0);
  const totalStars = Object.values(levelStats).reduce((sum, stat) => sum + stat.stars, 0);

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-hidden">
      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <StartScreen 
            key="start" 
            onStart={() => startGame(0)} 
            onContinue={() => startGame(Math.min(highestLevelCompleted, levels.length - 1))}
            onChallenge={startChallengeMode}
            highestLevelCompleted={highestLevelCompleted}
            totalLevels={levels.length}
            totalScore={totalScore}
            totalStars={totalStars}
          />
        )}
        
        {gameState === 'playing' && (
          <GameContainer 
            key="game"
            level={currentLevel}
            levelIndex={currentLevelIndex}
            maxLevels={levels.length}
            score={score}
            stars={stars}
            streak={streak}
            soundEnabled={soundEnabled}
            onLevelComplete={handleLevelComplete}
            toggleSound={toggleSound}
            onBack={() => setGameState('start')}
          />
        )}

        {gameState === 'end' && (
          <EndScreen 
            key="end"
            score={score}
            stars={stars}
            maxStars={levels.length * 3}
            onRestart={() => startGame(0)}
            onChallenge={startChallengeMode}
            onHome={() => setGameState('start')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
