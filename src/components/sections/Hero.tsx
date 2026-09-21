import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon, Github01Icon, Linkedin01Icon, MusicNote01Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { TextShimmer } from '@/components/motion-primitives/text-shimmer'
import { SpinningText } from '@/components/motion-primitives/spinning-text'
import { InView } from '@/components/motion-primitives/in-view'
import { profile } from '@/data/portfolio'

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[100px]"
        style={{ background: 'radial-gradient(circle, var(--primary), transparent 70%)' }}
      />

      <InView variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
        <span className="font-mono-label inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] text-muted-foreground uppercase">
          <span className="size-1.5 animate-pulse rounded-full bg-primary" />
          Spec sheet &amp; setlist below
        </span>
      </InView>

      <h1 className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
        <TextEffect per="char" preset="fade-in-blur" delay={0.15} speedReveal={1.4}>
          {profile.name}
        </TextEffect>
      </h1>

      <div className="mt-4 text-xl sm:text-2xl">
        <TextShimmer duration={2.5} className="font-medium [--base-color:var(--foreground)] [--base-gradient-color:var(--primary)]">
          {profile.roles.join('  ·  ')}
        </TextShimmer>
      </div>

      <InView
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="mt-5 max-w-xl text-balance text-muted-foreground">{profile.tagline}</p>
      </InView>

      <InView
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-3"
      >
        <Button size="lg" onClick={() => document.querySelector('#day-job')?.scrollIntoView({ behavior: 'smooth' })}>
          See the engineering
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-accent/40 text-accent hover:bg-accent/10 hover:text-accent"
          onClick={() => document.querySelector('#music')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <HugeiconsIcon icon={MusicNote01Icon} size={16} />
          Hear the music
        </Button>
      </InView>

      <InView
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 flex items-center gap-5 text-muted-foreground"
      >
        <a href="https://github.com/adiutkarshmishra" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary">
          <HugeiconsIcon icon={Github01Icon} size={20} />
        </a>
        <a href="https://www.linkedin.com/in/adiutkarsh-mishra/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary">
          <HugeiconsIcon icon={Linkedin01Icon} size={20} />
        </a>
      </InView>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <SpinningText
          duration={14}
          radius={3.5}
          fontSize={0.5}
          className="font-mono-label text-muted-foreground"
        >
          {'SCROLL DOWN • SCROLL DOWN • '}
        </SpinningText>
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={20}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
        />
      </div>
    </section>
  )
}
