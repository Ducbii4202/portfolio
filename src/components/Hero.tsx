import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const ROLES = ["Requirement Engineering", "BPMN Modeling", "Product Delivery", "Stakeholder Management", "Agile/Scrum"];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const videoSrc = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';
    
    if (video) {
        if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        }
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(
      '.name-reveal',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
    ).fromTo(
      '.blur-in',
      { opacity: 0, filter: 'blur(10px)', y: 20 },
      { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
      "-=0.9"
    );
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Navbar */}
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 shrink-0"
      >
        <div className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-black/40' : ''}`}>
          {/* Logo */}
          <div className="w-9 h-9 rounded-full relative group cursor-pointer shrink-0 transition-transform hover:scale-110 flex items-center justify-center">
             <div className="absolute inset-0 rounded-full accent-gradient border-2 border-transparent transition-transform duration-500 group-hover:rotate-180" style={{ padding: "1px", backgroundClip: "content-box, border-box", backgroundImage: "linear-gradient(hsl(var(--bg)), hsl(var(--bg))), linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)"}} />
             <div className="relative z-10 w-full h-full rounded-full bg-bg flex items-center justify-center text-[13px] font-display italic font-bold">
                NDT
             </div>
          </div>
          
          <div className="hidden md:block w-px h-5 bg-stroke mx-1 opacity-50" />
          
          <div className="hidden sm:flex items-center space-x-1 px-1">
            {['Home', 'Work', 'Experience', 'Skills'].map((item, i) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm rounded-full px-4 py-2 transition-colors cursor-pointer ${i === 0 ? 'text-text-primary bg-stroke/50' : 'text-muted hover:text-text-primary hover:bg-stroke/50'}`}>
                {item}
              </a>
            ))}
          </div>
          
          <div className="w-px h-5 bg-stroke mx-1 opacity-50" />
          
          <a href="mailto:ducbii0402@gmail.com" className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary relative group cursor-pointer inline-flex items-center overflow-hidden">
             <span className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             <div className="relative z-10 bg-surface rounded-full backdrop-blur-md w-full h-full flex items-center justify-center px-4 py-2">
                Say hi <span className="ml-1">↗</span>
             </div>
          </a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="text-xs text-muted uppercase tracking-[0.3em] font-medium mb-12 blur-in flex items-center gap-4">
          BUSINESS ANALYST · HO CHI MINH CITY
        </div>
        
        <h1 className="text-7xl md:text-8xl lg:text-[140px] font-display italic font-bold leading-[1] tracking-tight text-white mb-6 name-reveal">
          Nguyen Duc Thanh
        </h1>
        
        <div className="text-xl md:text-2xl text-muted font-medium mb-8 blur-in flex items-center justify-center gap-2">
          Specializing in <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">{ROLES[roleIndex]}</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10 blur-in">
          {["SaaS Products", "Blockchain", "AI-Based Systems", "Agile / Scrum", "BPMN"].map(tag => (
            <span key={tag} className="text-sm font-medium text-muted px-5 py-2.5 rounded-full border border-stroke bg-transparent">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="max-w-2xl text-lg md:text-xl text-muted font-medium mb-12 blur-in leading-relaxed">
          Business Analyst with nearly 2 years of experience, including 1.5 years at FI.AI — a high-velocity AI startup. Led full requirement lifecycle for a multi-platform restaurant system integrating blockchain payments and AI-powered loyalty features. Software Engineering graduate from FPT University.
        </div>
        
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 blur-in">
          <a href="#work" className="rounded-full text-base font-medium px-8 py-4 transition-all hover:scale-105 bg-white text-black min-w-[160px] flex items-center justify-center">
             View Projects
          </a>
          <a href="/NguyenDucThanh_BusinessAnalyst.pdf" download="NguyenDucThanh_BusinessAnalyst.pdf" className="rounded-full text-base font-medium px-8 py-4 transition-all hover:scale-105 border border-stroke bg-transparent text-white hover:bg-surface min-w-[160px] flex items-center justify-center group relative overflow-hidden">
             <svg className="w-4 h-4 mr-2 text-muted group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
             <span>Download CV</span>
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 pb-4">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-text-primary animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
