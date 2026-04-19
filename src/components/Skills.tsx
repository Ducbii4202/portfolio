import { motion } from 'framer-motion';

const SKILLS = [
  {
    category: 'Business Analysis',
    items: ['Requirement Gathering', 'BPMN', 'BRD / SRS', 'User Stories', 'Use Cases', 'UAT', 'Stakeholder Communication', 'Backlog Management']
  },
  {
    category: 'Product & UX Design',
    items: ['Wireframing', 'User Flow Design', 'Figma', 'Draw.io', 'Visual Paradigm']
  },
  {
    category: 'Data & Database',
    items: ['MySQL', 'SQL Server', 'MongoDB', 'Power BI', 'Microsoft Excel']
  },
  {
    category: 'Tools',
    items: ['Jira', 'Trello', 'Notion', 'Postman', 'Swagger', 'Git', 'Docker']
  },
  {
    category: 'Programming',
    items: ['JavaScript', 'TypeScript', 'React.js', 'Python']
  },
  {
    category: 'Technical Knowledge',
    items: ['Blockchain Systems', 'Smart Contracts', 'IoT Systems', 'AI Features', 'Face Recognition', 'OOP', 'Agile / Scrum']
  }
];

export function Skills() {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke relative overflow-hidden" id="skills">
      <div className="absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
            What <span className="font-display italic">I bring</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col bg-surface border border-stroke rounded-2xl p-6 md:p-8 hover:border-text-primary/30 transition-colors"
            >
              <h3 className="text-lg text-text-primary font-display italic mb-6 border-b border-stroke pb-3 relative">
                {skillGroup.category}
                <div className="absolute bottom-0 left-0 w-12 h-px accent-gradient" />
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(item => (
                  <span 
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full border border-stroke bg-surface/30 text-muted hover:text-text-primary hover:border-text-primary/30 hover:bg-surface transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
