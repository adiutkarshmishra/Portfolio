import { SectionHeading } from '@/components/section-heading'
import { InView } from '@/components/motion-primitives/in-view'
import { Tilt } from '@/components/motion-primitives/tilt'
import { BorderTrail } from '@/components/motion-primitives/border-trail'
import { knowMe } from '@/data/portfolio'

export function KnowMe() {
  return (
    <section id="know-me" className="relative mx-auto max-w-5xl px-6 py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full opacity-20 blur-[110px]"
        style={{ background: 'radial-gradient(circle, var(--photo-orange), transparent 70%)' }}
      />

      <SectionHeading eyebrow="Liner Notes" title="Know Me" accent="photo-orange" />

      <div className="mt-14 grid gap-10 sm:grid-cols-[minmax(0,280px)_1fr] sm:items-start">
        <InView
          variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.5 }}
        >
          <Tilt rotationFactor={6} springOptions={{ stiffness: 300, damping: 25 }}>
            <div className="relative overflow-hidden rounded-xl border border-border">
              <BorderTrail className="bg-photo-orange/70" size={100} />
              <img src={knowMe.photo} alt="Portrait" className="aspect-[4/5] w-full object-cover" />
            </div>
          </Tilt>
        </InView>

        <div className="space-y-8">
          <InView
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {knowMe.bio.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </InView>

          <InView
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 border-t border-border pt-6"
          >
            {knowMe.facts.map((fact) => (
              <div key={fact.label}>
                <p className="font-mono-label text-[11px] text-photo-orange uppercase">{fact.label}</p>
                <p className="mt-1 text-sm text-foreground">{fact.value}</p>
              </div>
            ))}
          </InView>
        </div>
      </div>
    </section>
  )
}
