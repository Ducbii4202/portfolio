import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { id: 1, image: 'https://picsum.photos/seed/ex1/600/600', speed: 0.8 },
  { id: 2, image: 'https://picsum.photos/seed/ex2/600/600', speed: 1.2 },
  { id: 3, image: 'https://picsum.photos/seed/ex3/600/600', speed: 0.9 },
  { id: 4, image: 'https://picsum.photos/seed/ex4/600/600', speed: 1.4 },
  { id: 5, image: 'https://picsum.photos/seed/ex5/600/600', speed: 1.1 },
  { id: 6, image: 'https://picsum.photos/seed/ex6/600/600', speed: 0.7 },
];

export function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !pinnedRef.current) return;

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: pinnedRef.current,
      pinSpacing: false,
    });

    // Parallax logic for columns
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        const speed = ITEMS[i].speed;
        
        gsap.to(item, {
          y: () => -window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    });

    return () => {
      st.kill();
      mm.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      
      {/* Pinned Center Layer */}
      <div 
        ref={pinnedRef}
        className="h-screen w-full flex flex-col items-center justify-center text-center px-6 z-10 pointer-events-none"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
          <div className="w-8 h-px bg-stroke" />
        </div>
        <h2 className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-text-primary mb-8">
          Visual <span className="font-display italic">playground</span>
        </h2>
        <p className="text-muted text-lg max-w-md mx-auto mb-10">
          A collection of experiments, generative art, and unused concepts.
        </p>
        <button className="pointer-events-auto rounded-full px-8 py-4 bg-surface border border-stroke text-text-primary text-sm transition-all hover:scale-105 hover:bg-white hover:text-black">
           Follow on Dribbble
        </button>
      </div>

      {/* Parallax Columns Layer */}
      <div className="absolute inset-x-0 top-0 h-full w-full max-w-[1400px] mx-auto px-6 md:px-10 z-20 pointer-events-none">
        <div className="grid grid-cols-2 gap-12 md:gap-40 h-full pt-[50vh]">
          {/* Left Column */}
          <div className="flex flex-col gap-32 md:gap-64 mt-32">
            {[0, 2, 4].map(idx => (
              <div 
                key={ITEMS[idx].id}
                ref={el => itemsRef.current[idx] = el}
                className="pointer-events-auto relative aspect-square max-w-[320px] mx-auto w-full group cursor-pointer"
                style={{ transform: `rotate(${(idx - 2) * 2}deg)` }}
              >
                <img 
                  src={ITEMS[idx].image}
                  alt="Exploration"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-3xl border border-stroke transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-32 md:gap-64">
            {[1, 3, 5].map(idx => (
              <div 
                key={ITEMS[idx].id}
                ref={el => itemsRef.current[idx] = el}
                className="pointer-events-auto relative aspect-square max-w-[320px] mx-auto w-full group cursor-pointer"
                style={{ transform: `rotate(${(3 - idx) * 2}deg)` }}
              >
                <img 
                  src={ITEMS[idx].image}
                  alt="Exploration"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-3xl border border-stroke transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
