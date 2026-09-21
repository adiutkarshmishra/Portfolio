import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { SectionHeading } from '@/components/section-heading'
import { InView } from '@/components/motion-primitives/in-view'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { Tilt } from '@/components/motion-primitives/tilt'
import { Spotlight } from '@/components/motion-primitives/spotlight'
import { BorderTrail } from '@/components/motion-primitives/border-trail'
import { Button } from '@/components/ui/button'
import { dayJob, education } from '@/data/portfolio'

export function DayJob() {
  return (
    <section id="day-job" className="relative mx-auto max-w-5xl px-6 py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full opacity-20 blur-[110px]"
        style={{ background: 'radial-gradient(circle, var(--primary), transparent 70%)' }}
      />

      <SectionHeading eyebrow="Spec Sheet" title="The Day Job" description={dayJob.summary} />

      <div className="mt-12">
        <InfiniteSlider gap={40} speed={28} speedOnHover={8} className="py-2">
          {dayJob.tools.map((tool) => (
            <span key={tool} className="font-mono-label text-sm whitespace-nowrap text-muted-foreground">
              {tool}
            </span>
          ))}
        </InfiniteSlider>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {dayJob.highlights.map((item, i) => (
          <InView
            key={item.title}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Tilt rotationFactor={8} springOptions={{ stiffness: 300, damping: 25 }} className="h-full">
              <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card p-6">
                <BorderTrail className="bg-primary/60" size={80} />
                <Spotlight size={160} className="from-primary/20 via-primary/10 to-transparent" />
                <span className="font-mono-label text-[11px] text-primary uppercase">{item.tag}</span>
                <h3 className="mt-3 font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Tilt>
          </InView>
        ))}
      </div>

      <div className="mt-16 space-y-8 border-l border-border pl-6">
        {dayJob.roles.map((job, i) => (
          <InView
            key={`${job.company}-${job.period}`}
            variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full border-2 border-background bg-primary" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium text-foreground">
                {job.title} · {job.company}
              </h3>
              <span className="font-mono-label text-xs text-muted-foreground">{job.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{job.description}</p>
          </InView>
        ))}
      </div>

      <InView
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.4 }}
        className="mt-16 border-t border-border pt-10"
      >
        <span className="font-mono-label text-xs text-primary uppercase">Education</span>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{education.summary}</p>

        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
          {education.schools.map((school) => (
            <div key={school.school} className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white p-1.5">
                <img src={school.logo} alt={`${school.school} logo`} className="size-full object-contain" />
              </span>
              <div>
                <h3 className="text-sm font-medium text-foreground">{school.school}</h3>
                <p className="text-xs text-muted-foreground">
                  {school.degree} · {school.period}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="mt-6" nativeButton={false} render={<Link to="/education" />}>
          Full education details
          <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
        </Button>
      </InView>
    </section>
  )
}
