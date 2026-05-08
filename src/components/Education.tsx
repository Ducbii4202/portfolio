import { motion } from 'framer-motion';

const EDUCATION = [
  {
    degree: 'Bachelor of Software Engineering',
    school: 'FPT University',
    period: 'Nov 2020 — Jun 2025',
    description: 'Software Engineering degree providing deep technical foundations in architecture, APIs, data flows, and system design — enabling close collaboration with development teams as a Business Analyst.',
    highlights: ['OOP & System Design', 'Database Management', 'Software Architecture', 'Web Development'],
  }
];

const LANGUAGES = [
  { language: 'Vietnamese', level: 'Native', pct: 100 },
  { language: 'English', level: 'IELTS 5.5', pct: 65 },
  { language: 'Chinese', level: 'HSK 3', pct: 40 },
];

export function Education() {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke" id="education">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
            Education &amp; <span className="font-display italic">languages</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Education */}
          <div className="flex flex-col gap-6">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-surface border border-stroke rounded-3xl p-8"
              >
                <div className="text-xs text-muted uppercase tracking-[0.2em] mb-3">{edu.period}</div>
                <h3 className="text-2xl font-bold text-text-primary mb-1">{edu.degree}</h3>
                <div className="text-blue-400/80 text-sm mb-4">{edu.school}</div>
                <p className="text-muted text-sm md:text-base leading-relaxed mb-6">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map(h => (
                    <span key={h} className="text-xs border border-stroke px-3 py-1 rounded-full text-muted bg-[#111]">{h}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-surface border border-stroke rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-display italic text-text-primary mb-8 border-b border-stroke pb-3">Languages</h3>
              <div className="flex flex-col gap-8">
                {LANGUAGES.map((lang) => (
                  <div key={lang.language}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-text-primary font-medium">{lang.language}</span>
                      <span className="text-sm text-muted">{lang.level}</span>
                    </div>
                    <div className="w-full h-px bg-stroke relative">
                      <div
                        className="absolute top-0 left-0 h-px accent-gradient"
                        style={{ width: `${lang.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
