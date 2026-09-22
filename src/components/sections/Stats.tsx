import { InView } from '@/components/motion-primitives/in-view'
import { StatCounter } from '@/components/stat-counter'
import { stats } from '@/data/portfolio'

export function Stats() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4 sm:gap-8 sm:py-10 md:py-2">
        {stats.map((stat, i) => (
          <InView
            key={stat.label}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex flex-col items-center gap-2 text-center md:gap-1"
          >
            <StatCounter value={stat.value} suffix={stat.suffix} />
            <span className="font-mono-label text-xs text-muted-foreground uppercase">{stat.label}</span>
          </InView>
        ))}
      </div>
    </section>
  )
}
