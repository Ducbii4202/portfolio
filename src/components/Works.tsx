import { motion } from 'framer-motion';
import { PowerBIDemo } from './PowerBIDemo';

const PROJECTS = [
  { type: 'image', id: 1, label: 'FI.AI · Nov 2024 – Present', title: 'Restaurant Management Platform', desc: 'Multi-platform system across Web Admin, Merchant, Staff & Customer apps. Elicited 30+ functional requirements from 6+ cross-functional stakeholders. Designed RBAC for 4 user roles and full Agile delivery lifecycle.', colSpan: 'md:col-span-7', image: 'https://i.pinimg.com/1200x/aa/86/fd/aa86fdefe1f12fb35dea2da9e54e9e01.jpg' },
  { type: 'image', id: 2, label: 'FI.AI · Blockchain', title: 'Digital Wallet & Smart Contracts', desc: 'Defined end-to-end functional requirements for a blockchain-based digital wallet supporting asset management, reward distribution, and smart contract automation — bridging fintech and F&B domains.', colSpan: 'md:col-span-5', image: 'https://i.pinimg.com/1200x/cb/fc/7a/cbfc7aeef6369b075f519c4ccb41e3e2.jpg' },
  { type: 'metrics', id: 3, colSpan: 'md:col-span-12' },
  { type: 'image', id: 4, label: 'Graduation Project · Jan – Jun 2025', title: 'Agricultural Supply WMS', desc: 'Led requirement gathering for Sales, Warehouse, Agent & Admin modules. Defined 12+ user stories, designed ERD diagrams, managed Jira backlog, and built KPI dashboards in Excel — reducing reporting time by 25%.', colSpan: 'md:col-span-8', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop' },
  { type: 'image', id: 5, label: 'Graduation Project · Oct – Dec 2024', title: 'Human Detection & Face ID System', desc: 'Gathered and analyzed user requirements for AI-based attendance tracking and role management. Developed SRS documentation and API mapping — reducing development rework by an estimated 15%.', colSpan: 'md:col-span-4', image: 'https://i.pinimg.com/736x/63/ff/49/63ff49c20b248de80d96257de3c9748f.jpg' },
  { type: 'image', id: 6, label: 'AmazingTech · Jan – Apr 2024', title: 'SaaS Recruitment Platform', desc: 'Enterprise intern management platform for a SaaS product. Produced SRS documentation, BPMN process diagrams, and use case documents. Maintained product backlog and participated in Agile ceremonies within a 4-member cross-functional team.', colSpan: 'md:col-span-12', image: 'https://i.pinimg.com/1200x/42/8f/28/428f28de525ea9384046d21634f81c9e.jpg' },
  { type: 'powerbi', id: 7, colSpan: 'md:col-span-12' },
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
              A selection of products and systems I've analyzed, modeled, and delivered end-to-end.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => {
            if (project.type === 'powerbi') {
              return <PowerBIDemo key={project.id} />;
            }

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
                    <div className="text-5xl md:text-6xl font-display italic text-white mb-4">6+</div>
                    <div className="text-[11px] md:text-xs text-muted/80 leading-relaxed font-medium tracking-wide">Cross-functional<br/>Stakeholders Managed</div>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center text-center shrink-0 w-[280px] md:w-auto bg-[#1a1a1a]/40 border border-stroke rounded-2xl py-12 px-6">
                    <div className="text-5xl md:text-6xl font-display italic text-white mb-4">4</div>
                    <div className="text-[11px] md:text-xs text-muted/80 leading-relaxed font-medium tracking-wide">User Platforms<br/>Delivered</div>
                  </div>

                  <div className="flex-1 flex flex-col items-center text-center shrink-0 w-[280px] md:w-auto bg-[#1a1a1a]/40 border border-stroke rounded-2xl py-12 px-6">
                    <div className="text-5xl md:text-6xl font-display italic text-white mb-4">25%</div>
                    <div className="text-[11px] md:text-xs text-muted/80 leading-relaxed font-medium tracking-wide">Reporting Time<br/>Reduction (KPI Dashboards)</div>
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
                
                {/* Hover overlay details */}
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

      </div>
    </section>
  );
}
