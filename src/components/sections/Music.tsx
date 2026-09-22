import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import { PlayIcon } from '@hugeicons/core-free-icons'
import { SectionHeading } from '@/components/section-heading'
import { InView } from '@/components/motion-primitives/in-view'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { Tilt } from '@/components/motion-primitives/tilt'
import { Badge } from '@/components/ui/badge'
import { music, musicReleases } from '@/data/portfolio'

function releaseSubtitle(release: (typeof musicReleases)[number]) {
  if (release.kind === 'song') return `${release.releaseType} · ${release.year}`
  return release.subtitle
}

export function Music() {
  return (
    <section id="music" className="relative mx-auto max-w-5xl px-6 py-10 sm:py-14 md:pt-2 md:pb-4">
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full opacity-20 blur-[110px]"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }}
      />

      <SectionHeading eyebrow="Setlist" title="The Music" description={music.summary} accent="accent" />

      <div className="mt-6 flex flex-wrap justify-center gap-2 md:mt-4">
        {music.genres.map((genre) => (
          <Badge key={genre} variant="outline" className="border-accent/30 text-xs text-accent">
            {genre}
          </Badge>
        ))}
      </div>

      <span className="font-mono-label mt-8 mb-4 block text-center text-xs text-accent uppercase sm:mt-10 sm:mb-5 md:mt-6 md:mb-3">
        Latest Releases
      </span>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-5 md:gap-3">
        {musicReleases.map((release, i) => (
          <InView
            key={release.slug}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Tilt rotationFactor={10} springOptions={{ stiffness: 300, damping: 25 }}>
              <Link to={`/music/${release.slug}`} className="group block overflow-hidden rounded-xl border border-border bg-card">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={release.cover}
                    alt=""
                    loading="lazy"
                    className={
                      'size-full transition-transform duration-500 group-hover:scale-110 ' +
                      (release.kind === 'channel' || release.kind === 'band'
                        ? 'object-cover object-top'
                        : 'object-cover')
                    }
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <HugeiconsIcon icon={PlayIcon} size={20} />
                    </span>
                  </div>
                </div>
                <div className="p-3 sm:p-3.5 md:p-2.5">
                  <h3 className="font-medium text-foreground md:text-sm">{release.title}</h3>
                  <p className="font-mono-label mt-1 text-xs text-muted-foreground uppercase">
                    {releaseSubtitle(release)}
                  </p>
                </div>
              </Link>
            </Tilt>
          </InView>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 md:mt-6">
        <InfiniteSlider gap={40} speed={24} speedOnHover={6} reverse className="py-2">
          {music.tools.map((tool) => (
            <span key={tool} className="font-mono-label text-sm whitespace-nowrap text-muted-foreground">
              {tool}
            </span>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}
