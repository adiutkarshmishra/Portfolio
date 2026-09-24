import { HugeiconsIcon } from '@hugeicons/react'
import { MusicNote01Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { TextShimmer } from '@/components/motion-primitives/text-shimmer'
import { InView } from '@/components/motion-primitives/in-view'
import type { SectionId } from '@/components/sections/Header'
import { profile } from '@/data/portfolio'

export function Hero({ onSelect }: { onSelect: (id: SectionId) => void }) {
  return (
    <section
      id="home"
      className="relative mx-auto flex max-w-5xl flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-10 text-center sm:pt-20 sm:pb-14 md:pt-0 md:pb-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[90px] sm:h-96 sm:w-96 md:h-64 md:w-64"
        style={{ background: 'radial-gradient(circle, var(--primary), transparent 70%)' }}
      />

      <InView variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
        <span className="font-mono-label inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] text-muted-foreground uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-primary" />
          Spec sheet &amp; setlist below
        </span>
      </InView>

      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:mt-4 sm:text-6xl md:mt-1 md:text-4xl">
        <TextEffect per="char" preset="fade-in-blur" delay={0.15} speedReveal={1.4}>
          {profile.name}
        </TextEffect>
      </h1>

      <div className="mt-2 text-lg sm:mt-3 sm:text-2xl md:mt-0 md:text-base">
        <TextShimmer duration={2.5} className="font-medium [--base-color:var(--foreground)] [--base-gradient-color:var(--primary)]">
          {profile.roles.join('  ·  ')}
        </TextShimmer>
      </div>

      <InView
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="mt-3 max-w-xl text-balance text-muted-foreground sm:mt-4 md:mt-0">{profile.tagline}</p>
      </InView>

      <InView
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 md:mt-1"
      >
        <Button size="lg" onClick={() => onSelect('day-job')}>
          See the engineering
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-accent/40 text-accent hover:bg-accent/10 hover:text-accent"
          onClick={() => onSelect('music')}
        >
          <HugeiconsIcon icon={MusicNote01Icon} size={16} />
          Hear the music
        </Button>
      </InView>
    </section>
  )
}
