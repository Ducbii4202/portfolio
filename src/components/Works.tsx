import { motion } from 'framer-motion';

const PROJECTS = [
  { type: 'image', id: 1, label: 'FI.AI', title: 'Restaurant Platform', desc: 'Multi-platform system across Web Admin, Merchant, Staff & Customer apps. 30+ functional requirements, RBAC for 4 roles, loyalty & automation workflows.', colSpan: 'md:col-span-7', image: 'https://i.pinimg.com/1200x/aa/86/fd/aa86fdefe1f12fb35dea2da9e54e9e01.jpg' },
  { type: 'image', id: 2, label: 'FI.AI', title: 'Blockchain Wallet', desc: 'Digital asset management & automated reward distribution via smart contracts. Defined full functional requirements & system flows.', colSpan: 'md:col-span-5', image: 'https://i.pinimg.com/1200x/cb/fc/7a/cbfc7aeef6369b075f519c4ccb41e3e2.jpg' },
  { type: 'metrics', id: 3, colSpan: 'md:col-span-12' },
  { type: 'image', id: 4, label: 'Graduation', title: 'Agricultural Supply WMS', desc: 'Sales, Warehouse, Agent & Admin modules. 12+ user stories, ERD diagrams, Jira backlog management, KPI dashboards cutting reporting time by 25%.', colSpan: 'md:col-span-8', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop' },
  { type: 'image', id: 5, label: 'AI', title: 'Face Recognition System', desc: 'SRS documentation & API mapping for attendance and role management. Reduced development rework by 15%.', colSpan: 'md:col-span-4', image: 'https://i.pinimg.com/736x/63/ff/49/63ff49c20b248de80d96257de3c9748f.jpg' },
  { type: 'image', id: 6, label: 'AmazingTech', title: 'SaaS Recruitment Platform', desc: 'Enterprise intern management platform. SRS, BPMN process diagrams, use case documentation, backlog management in cross-functional Agile team.', colSpan: 'md:col-span-12', image: 'https://i.pinimg.com/1200x/42/8f/28/428f28de525ea9384046d21634f81c9e.jpg' },
];

export function Works() {
  return (
    <section className="bg-bg py-12 md:py-16" id="work">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted text-base md:text-lg">
              A selection of products and systems I've modeled, managed, and delivered to deployment.
            </p>
          </div>
          
          <button className="hidden md:inline-flex items-center gap-2 rounded-full px-6 py-3 border border-stroke text-text-primary text-sm transition-all hover:scale-105 group relative overflow-hidden isolation-auto">
             <span className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity" />
             <span className="absolute inset-[1px] bg-bg rounded-full -z-10" />
             <span className="relative z-10">View all work</span>
             <span className="relative z-10 ml-2">→</span>
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => {
            if (project.type === 'metrics') {
              return (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`${project.colSpan} flex gap-4 md:gap-6 justify-between items-center w-full grow overflow-x-auto`}
                >
                  <div className="flex-1 flex flex-col items-center text-center shrink-0 w-[280px] md:w-auto bg-[#1a1a1a]/40 border border-stroke rounded-2xl py-12 px-6">
                    <div className="text-5xl md:text-6xl font-display italic text-white mb-4">30+</div>
                    <div className="text-[11px] md:text-xs text-muted/80 leading-relaxed font-medium tracking-wide">Functional Requirements<br/>Defined at FI.AI</div>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center text-center shrink-0 w-[280px] md:w-auto bg-[#1a1a1a]/40 border border-stroke rounded-2xl py-12 px-6">
                    <div className="text-5xl md:text-6xl font-display italic text-white mb-4">4</div>
                    <div className="text-[11px] md:text-xs text-muted/80 leading-relaxed font-medium tracking-wide">User Platforms<br/>Delivered</div>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center text-center shrink-0 w-[280px] md:w-auto bg-[#1a1a1a]/40 border border-stroke rounded-2xl py-12 px-6">
                    <div className="text-5xl md:text-6xl font-display italic text-white mb-4">15%</div>
                    <div className="text-[11px] md:text-xs text-muted/80 leading-relaxed font-medium tracking-wide">Development Rework<br/>Reduction</div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className={`${project.colSpan} relative group overflow-hidden bg-surface border border-stroke rounded-3xl aspect-[4/3] md:aspect-auto md:min-h-[400px] cursor-pointer`}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Halftone Overlay */}
                <div 
                  className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}
                />
                
                {/* Hover overlay details - Rendered for all image projects */}
                <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-300 flex flex-col justify-end p-6 md:p-8">
                   <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {project.label && <h3 className="text-xs md:text-sm font-medium text-muted uppercase tracking-[0.2em] mb-1 md:mb-2">{project.label}</h3>}
                      <h4 className="text-2xl md:text-3xl font-display italic text-white mb-2 md:mb-3">{project.title}</h4>
                      {project.desc && <p className="text-sm md:text-base text-white/80 max-w-xl leading-relaxed">{project.desc}</p>}
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Mobile View all */}
        <button className="md:hidden mt-8 w-full inline-flex justify-center items-center gap-2 rounded-full px-6 py-4 border border-stroke text-text-primary text-sm">
           View all work →
        </button>

      </div>
    </section>
  );
}
