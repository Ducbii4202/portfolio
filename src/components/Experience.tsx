import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Business Analyst',
    company: 'FI.AI Co., Ltd. · District 1, Ho Chi Minh City',
    dateLine1: 'Mar 2025',
    dateLine2: '— Present',
    bullets: [
      'Led requirement analysis for multi-platform restaurant management system across 4 user platforms',
      'Gathered & analyzed requirements from 6+ stakeholders, defining 30+ functional requirements',
      'Delivered BRD, user stories, and use cases reducing requirement ambiguity',
      'Designed RBAC system for 4 user roles, enhancing security and access control',
      'Defined requirements for blockchain wallet system with smart contract reward distribution',
      'Conducted UAT and presented product demos to stakeholders prior to deployment'
    ],
    tags: ['BRD', 'BPMN', 'Figma', 'Blockchain', 'UAT', 'RBAC']
  },
  {
    id: 2,
    role: 'Business Analyst Intern (Product Team)',
    company: 'AmazingTech Company · Tan Phu District',
    dateLine1: 'Jan 2024',
    dateLine2: '— Apr 2024',
    bullets: [
      'Produced SRS, business process diagrams & use case documentation using Draw.io & Visual Paradigm',
      'Wrote user stories and maintained product backlog in Agile ceremonies',
      'Collaborated with UI/UX designers to review wireframes and improve usability',
      'Assisted in API mapping and data flow clarification to reduce requirement misunderstandings'
    ],
    tags: ['SRS', 'Draw.io', 'Agile', 'API Mapping', 'User Stories']
  },
  {
    id: 3,
    role: 'Property Consultant',
    company: 'SoFo Home Company · District 9',
    dateLine1: 'Mar 2021',
    dateLine2: '— Dec 2023',
    bullets: [
      'Analyzed client requirements & financial constraints to recommend property investment options',
      'Built and maintained strong client relationships — contributed to 20% increase in repeat customers',
      'Managed end-to-end consultation from requirement identification to transaction completion'
    ],
    tags: ['Client Management', 'Requirement Analysis', 'Market Insights']
  }
];

export function Experience() {
  return (
    <section className="bg-bg py-16 md:py-24" id="experience">
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
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
            Work <span className="font-display italic">history</span>
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {EXPERIENCES.map((exp, i) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col md:flex-row gap-6 md:gap-16 py-10 border-b border-stroke last:border-0"
            >
              <div className="md:w-32 shrink-0 pt-1">
                <div className="text-sm text-muted">{exp.dateLine1}</div>
                <div className="text-sm text-muted">{exp.dateLine2}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-1">
                  {exp.role}
                </h3>
                <div className="text-sm text-blue-400/80 mb-6">
                  {exp.company}
                </div>
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="text-stroke mt-1">—</span>
                      <span className="text-muted text-sm md:text-base leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs border border-stroke px-3 py-1 rounded-full text-muted bg-[#111]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
