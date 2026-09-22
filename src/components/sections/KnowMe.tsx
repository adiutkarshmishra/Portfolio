import { SectionHeading } from '@/components/section-heading'
import { InView } from '@/components/motion-primitives/in-view'
import { Tilt } from '@/components/motion-primitives/tilt'
import { BorderTrail } from '@/components/motion-primitives/border-trail'
import { knowMe } from '@/data/portfolio'

export function KnowMe() {
  return (
    <section id="know-me" className="relative mx-auto max-w-5xl px-6 pt-0 pb-10 sm:pb-14 md:pb-8">
      <div
        aria-hidden
        className="pointer-events-none absolute top-8 left-1/2 -z-10 h-56 w-56 -translate-x-1/2 rounded-full opacity-20 blur-[90px] sm:top-16 sm:h-72 sm:w-72 md:top-4 md:h-40 md:w-40"
        style={{ background: 'radial-gradient(circle, var(--photo-orange), transparent 70%)' }}
      />

      <SectionHeading eyebrow="Liner Notes" title="Know Me" accent="photo-orange" />

      <div className="mt-8 grid items-start gap-4 [grid-template-areas:'photo_facts'_'bio_bio'] [grid-template-columns:1fr_1fr] sm:mt-10 sm:gap-8 sm:[grid-template-areas:'photo_bio'_'photo_facts'] sm:[grid-template-columns:minmax(0,280px)_1fr] md:mt-1 md:gap-6 md:[grid-template-areas:'photo_bio'_'photo_facts'] md:[grid-template-columns:minmax(0,220px)_1fr]">
        <InView
          variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.5 }}
          className="[grid-area:photo]"
        >
          <Tilt rotationFactor={6} springOptions={{ stiffness: 300, damping: 25 }}>
            <div className="relative overflow-hidden rounded-xl border border-border">
              <BorderTrail className="bg-photo-orange/70" size={100} />
              <img src={knowMe.photo} alt="Portrait" className="aspect-[4/5] w-full object-cover" />
            </div>
          </Tilt>
        </InView>

        <InView
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3 [grid-area:bio] md:space-y-1"
        >
          {knowMe.bio.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground md:text-xs">
              {paragraph}
            </p>
          ))}
        </InView>

        <InView
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 gap-3 [grid-area:facts] sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-border sm:pt-6 md:grid-cols-4 md:gap-3 md:border-t-0 md:pt-0"
        >
          {knowMe.facts.map((fact) => (
            <div key={fact.label}>
              <p className="font-mono-label text-[11px] text-photo-orange uppercase">{fact.label}</p>
              <p className="mt-1 text-sm text-foreground md:text-xs">{fact.value}</p>
            </div>
          ))}
        </InView>
      </div>
    </section>
  )
}
