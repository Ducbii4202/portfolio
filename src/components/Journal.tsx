import { motion } from 'framer-motion';

const ENTRIES = [
  { id: 1, number: '01', title: 'User Experience Research and Design', provider: 'Coursera', date: 'May 2024' },
  { id: 2, number: '02', title: 'Project Management Principles and Practices', provider: 'Coursera', date: 'May 2024' },
  { id: 4, number: '03', title: 'Academic English: Writing', provider: 'Coursera', date: 'Jan 2024' },
  { id: 3, number: '04', title: 'CertNexus Certified Ethical Emerging Technologist', provider: 'Coursera', date: 'Sep 2023' },
  { id: 5, number: '05', title: 'Web Design for Everybody: Basics of Web Development & Coding', provider: 'Coursera', date: 'Aug 2023' },
];

export function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24" id="achievement">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Certifications</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-text-primary tracking-tight font-bold mb-4">
              Continuous <span className="font-display italic font-normal">learning</span>
            </h2>
            <p className="text-muted text-sm md:text-base mb-12">
              Certifications from Coursera and industry bodies.
            </p>
          </div>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-3">
          {ENTRIES.map((entry, i) => (
            <motion.div 
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 px-6 md:px-8 border border-stroke rounded-[40px] sm:rounded-full bg-surface/10 hover:bg-surface/30 transition-colors">
                <div className="flex items-center gap-6">
                  <span className="text-sm text-muted/50 w-6 font-mono">{entry.number}</span>
                  <span className="text-sm md:text-base font-medium text-text-primary">{entry.title}</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted/50"></span>
                  {entry.provider} · {entry.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
