import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const WORDS = ["Business Analyst", "Create", "Inspire"];

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let start: number;
    const duration = 2700;
    
    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const nextCount = Math.min(Math.floor((progress / duration) * 100), 100);
      setCount(nextCount);
      
      if (progress < duration) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, 400);
      }
    };
    
    const frameId = requestAnimationFrame(tick);
    
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 900);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6"
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {WORDS[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex flex-col items-end w-full">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
          {String(count).padStart(3, "0")}
        </div>
        <div className="w-full h-[3px] bg-stroke/50 mt-4 overflow-hidden relative">
          <div 
            className="absolute left-0 top-0 bottom-0 w-full origin-left accent-gradient shadow-[0_0_8px_rgba(137,170,204,0.35)]"
            style={{ transform: `scaleX(${count / 100})`, transition: 'transform 0.1s linear' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
