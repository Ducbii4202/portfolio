import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { Experience } from './components/Experience';
import { Journal } from './components/Journal';
import { Skills } from './components/Skills';
import { Stats } from './components/Stats';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-bg min-h-screen text-text-primary selection:bg-text-primary selection:text-bg">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <main>
          <Hero />
          <Stats />
          <Experience />
          <Works />
          <Skills />
          <Education />
          <Journal />
          <Footer />
        </main>
      )}
    </div>
  );
}
