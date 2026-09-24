import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Github01Icon,
  Linkedin01Icon,
  SpotifyIcon,
  MusicNote01Icon,
  YoutubeIcon,
  InstagramIcon,
  File01Icon,
  ArrowUpRight01Icon,
} from '@hugeicons/core-free-icons'
import { SectionHeading } from '@/components/section-heading'
import { InView } from '@/components/motion-primitives/in-view'
import { BorderTrail } from '@/components/motion-primitives/border-trail'
import { links } from '@/data/portfolio'

const ICONS: Record<string, typeof Github01Icon> = {
  GitHub: Github01Icon,
  LinkedIn: Linkedin01Icon,
  Spotify: SpotifyIcon,
  'YouTube Music': MusicNote01Icon,
  YouTube: YoutubeIcon,
  Instagram: InstagramIcon,
  Resume: File01Icon,
}

function LinkCardContent({ label, category }: { label: string; category: string }) {
  return (
    <>
      <BorderTrail className="bg-primary/50 opacity-0 group-hover:opacity-100" size={50} />
      <span className="flex size-9 items-center justify-center rounded-md bg-secondary text-foreground">
        <HugeiconsIcon icon={ICONS[label] ?? File01Icon} size={18} />
      </span>
      <span className="flex-1">
        <span className="block text-sm font-medium text-foreground">{label}</span>
        <span className="font-mono-label block text-[0.6875rem] text-muted-foreground uppercase">{category}</span>
      </span>
      <HugeiconsIcon
        icon={ArrowUpRight01Icon}
        size={16}
        className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
      />
    </>
  )
}

export function Links() {
  return (
    <section id="links" className="mx-auto max-w-3xl px-6 py-10 sm:py-14 md:pt-2 md:pb-4">
      <SectionHeading eyebrow="Patch Bay" title="All of my links" />

      <div className="mt-8 grid gap-2.5 sm:mt-10 md:mt-5 md:landscape:grid-cols-2">
        {links.map((link, i) => (
          <InView
            key={link.label}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className={link.label === 'Resume' ? 'md:landscape:col-span-2' : undefined}
          >
            {link.label === 'Resume' ? (
              <Link
                to="/resume"
                className="group relative flex items-center gap-3 overflow-hidden rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40"
              >
                <LinkCardContent label={link.label} category={link.category} />
              </Link>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-3 overflow-hidden rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40"
              >
                <LinkCardContent label={link.label} category={link.category} />
              </a>
            )}
          </InView>
        ))}
      </div>
    </section>
  )
}
