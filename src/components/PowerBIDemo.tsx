import { motion } from 'framer-motion';
import { ExternalLink, BarChart2, TrendingUp, Globe, Package } from 'lucide-react';

const KPI = [
  { label: 'Total Sales', value: '$118.7M', sub: 'Net Revenue', color: '#89AACC' },
  { label: 'Gross Profit', value: '$16.9M', sub: '14.2% margin', color: '#6BCB8B' },
  { label: 'Units Sold', value: '1.13M', sub: 'All segments', color: '#B89DDF' },
  { label: 'COGS', value: '$101.8M', sub: '85.8% of sales', color: '#F2C811' },
];

const SEG_BARS = [
  { label: 'Government', val: 52.5, pct: 100, color: '#89AACC' },
  { label: 'Small Biz', val: 42.4, pct: 81, color: '#6BCB8B' },
  { label: 'Enterprise', val: 19.6, pct: 37, color: '#E07070' },
  { label: 'Midmarket', val: 2.4, pct: 5, color: '#F2C811' },
  { label: 'Channel P.', val: 1.8, pct: 3, color: '#B89DDF' },
];

const MONTHLY = [4.5, 9.3, 7.3, 5.4, 6.6, 7.3, 5.6, 7.0, 6.2, 9.5, 8.1, 5.9, 6.4, 12.4, 5.4, 12.0];
const MAX_M = 12.4;

const COUNTRY_ARCS = [
  { label: 'USA', pct: 21, color: '#89AACC' },
  { label: 'Canada', pct: 21, color: '#F2C811' },
  { label: 'France', pct: 21, color: '#6BCB8B' },
  { label: 'Germany', pct: 20, color: '#B89DDF' },
  { label: 'Mexico', pct: 17, color: '#E07070' },
];

function MiniBarChart() {
  return (
    <div className="flex items-end gap-[3px] h-[52px]">
      {MONTHLY.map((v, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.4, delay: 0.05 * i, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{
            height: `${(v / MAX_M) * 52}px`,
            background: i === 9 || i === 15 ? '#F2C811' : 'rgba(137,170,204,0.6)',
            transformOrigin: 'bottom',
          }}
          className="flex-1 rounded-sm"
        />
      ))}
    </div>
  );
}

function MiniDonut() {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <svg width="72" height="72" viewBox="0 0 72 72">
      {COUNTRY_ARCS.map((arc, i) => {
        const dash = (arc.pct / 100) * circumference;
        const gap = circumference - dash;
        const el = (
          <circle
            key={i}
            cx="36" cy="36" r={radius}
            fill="none"
            stroke={arc.color}
            strokeWidth="10"
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={-offset}
            style={{ transform: 'rotate(-90deg)', transformOrigin: '36px 36px' }}
          />
        );
        offset += dash;
        return el;
      })}
    </svg>
  );
}

export function PowerBIDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      className="md:col-span-12 relative group overflow-hidden rounded-3xl border border-stroke bg-surface"
      style={{ minHeight: '440px' }}
    >
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#F2C811] via-[#89AACC] to-[#6BCB8B]" />

      <div className="flex flex-col lg:flex-row h-full">
        {/* Left: info panel */}
        <div className="flex flex-col justify-between p-8 md:p-10 lg:w-[38%] lg:border-r border-stroke">
          <div>
            {/* Label row */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#F2C811]/30 bg-[#F2C811]/10">
                <BarChart2 size={12} className="text-[#F2C811]" />
                <span className="text-[10px] font-semibold text-[#F2C811] uppercase tracking-[0.25em]">Power BI Demo</span>
              </div>
              <span className="text-xs text-muted">2024 · Financial Analytics</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-display italic text-text-primary mb-4 leading-tight">
              Financial Sales<br />Analytics Dashboard
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Interactive Power BI-style dashboard built on real financial data — 700 records across 5 countries, 5 segments, 6 products. Features cross-filter slicers, 4 report pages, DAX-equivalent KPIs, and live chart interactions.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Power BI', 'Data Analysis', 'DAX Metrics', 'Financial KPIs', 'Interactive Filters', 'COGS · Profit · Sales'].map(t => (
                <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-stroke bg-surface/40 text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="/PowerBI_Financial_Demo.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-[#F2C811]/40 bg-[#F2C811]/10 text-[#F2C811] hover:bg-[#F2C811]/20 transition-all duration-200 self-start text-sm font-semibold group/btn"
          >
            <span>Launch Live Demo</span>
            <ExternalLink size={15} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>

        {/* Right: mini dashboard */}
        <div className="flex-1 p-6 md:p-8 bg-[#0d0d0d]/60 flex flex-col gap-5">

          {/* KPI row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {KPI.map((k) => (
              <div key={k.label} className="rounded-xl border border-stroke bg-surface/50 px-4 py-3" style={{ borderTopColor: k.color, borderTopWidth: '2px' }}>
                <div className="text-[10px] text-muted uppercase tracking-wider mb-1">{k.label}</div>
                <div className="text-lg font-bold text-text-primary leading-tight" style={{ color: k.color }}>{k.value}</div>
                <div className="text-[10px] text-muted mt-0.5">{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">

            {/* Monthly trend */}
            <div className="md:col-span-2 rounded-xl border border-stroke bg-surface/30 p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={12} className="text-muted" />
                <span className="text-[10px] text-muted uppercase tracking-wider">Monthly Sales Trend · $M</span>
              </div>
              <MiniBarChart />
              <div className="flex justify-between mt-2">
                {["Sep'13", "Dec", "Mar'14", "Jun", "Sep", "Dec"].map(l => (
                  <span key={l} className="text-[9px] text-muted/60">{l}</span>
                ))}
              </div>
            </div>

            {/* Country donut */}
            <div className="rounded-xl border border-stroke bg-surface/30 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Globe size={12} className="text-muted" />
                <span className="text-[10px] text-muted uppercase tracking-wider">By Country</span>
              </div>
              <div className="flex items-center gap-3">
                <MiniDonut />
                <div className="flex flex-col gap-1">
                  {COUNTRY_ARCS.map(a => (
                    <div key={a.label} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: a.color }} />
                      <span className="text-[9px] text-muted">{a.label} {a.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Segment bars */}
          <div className="rounded-xl border border-stroke bg-surface/30 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Package size={12} className="text-muted" />
              <span className="text-[10px] text-muted uppercase tracking-wider">Sales by Segment · $M</span>
            </div>
            <div className="flex flex-col gap-2">
              {SEG_BARS.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="text-[10px] text-muted w-16 flex-shrink-0">{s.label}</span>
                  <div className="flex-1 h-2 rounded-full bg-stroke overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{ background: s.color }}
                    />
                  </div>
                  <span className="text-[10px] text-muted w-10 text-right flex-shrink-0">${s.val}M</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
