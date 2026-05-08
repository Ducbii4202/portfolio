import { motion } from 'framer-motion';

const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '30+', label: 'Requirements Defined' },
  { value: '4', label: 'Platforms Delivered' },
];

export function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24 border-y border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-stroke">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col items-center justify-center text-center pt-8 md:pt-0 ${i === 0 ? '' : 'md:px-8'}`}
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary mb-4 leading-none">
                {stat.value}
              </div>
              <div className="text-sm text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
