import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <footer className="relative bg-[#0a0a0a] pt-24 pb-12 flex flex-col items-center justify-between min-h-[500px]" id="contact">
      
      {/* Marquee Background layer */}
      <div className="absolute top-1/4 w-[110vw] pr-4 flex whitespace-nowrap opacity-10 pointer-events-none select-none overflow-hidden -mx-4" style={{ perspective: '1000px' }}>
        <div ref={marqueeRef} className="flex gap-4 items-center">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-4xl md:text-5xl lg:text-7xl font-display italic text-white tracking-wide">
              BUILDING PRODUCTS PEOPLE LOVE • 
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center flex-1">
        
        {/* Contact Header */}
        <div className="text-center px-4 mb-20 flex flex-col items-center">
          <div className="text-[10px] md:text-xs text-muted uppercase tracking-[0.3em] font-medium mb-6">
            LET'S CONNECT
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary mb-12 font-display italic font-bold leading-[1.1]">
            Got a project<br />in mind?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:ducbii0402@gmail.com" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-[#2a2a2a] bg-transparent text-sm transition-all hover:bg-white/5 hover:border-white/20 group text-text-primary">
               <span>Email</span>
               <span className="ml-2 text-muted group-hover:text-text-primary transition-colors text-xs">↗</span>
            </a>
            <a href="https://github.com/Ducbii4202" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-[#2a2a2a] bg-transparent text-sm transition-all hover:bg-white/5 hover:border-white/20 group text-text-primary">
               <span>GitHub</span>
               <span className="ml-2 text-muted group-hover:text-text-primary transition-colors text-xs">↗</span>
            </a>
            <a href="https://linkedin.com/in/thanh-nguyen0402" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-[#2a2a2a] bg-transparent text-sm transition-all hover:bg-white/5 hover:border-white/20 group text-text-primary">
               <span>LinkedIn</span>
               <span className="ml-2 text-muted group-hover:text-text-primary transition-colors text-xs">↗</span>
            </a>
            <a href="tel:0972609914" className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-[#2a2a2a] bg-transparent text-sm transition-all hover:bg-white/5 hover:border-white/20 group text-text-primary">
               <span>0972 609 914</span>
               <span className="ml-2 text-muted group-hover:text-text-primary transition-colors text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 mt-auto">
        <div className="w-full border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-muted">
            © 2026 Nguyen Duc Thanh
          </div>
          
          <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             <span className="text-xs text-muted">Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
