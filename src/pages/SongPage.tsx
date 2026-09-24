import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { DetailShell } from '@/pages/DetailShell'
import type { SongRelease } from '@/data/portfolio'

export function SongPage({ release }: { release: SongRelease }) {
  return (
    <DetailShell accent="music">
      <div className="grid gap-10 sm:grid-cols-[17.5rem_1fr] sm:items-start">
        <img
          src={release.cover}
          alt={release.title}
          className="aspect-square w-full rounded-xl border border-border object-cover"
        />

        <div>
          <span className="font-mono-label text-xs text-accent uppercase">
            {release.releaseType}
            {release.trackCount ? ` · ${release.trackCount}` : ''} · {release.year}
          </span>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{release.title}</h1>
          <p className="mt-4 text-muted-foreground">{release.description}</p>

          <a
            href={release.musicUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono-label mt-5 inline-flex items-center gap-1.5 text-xs text-primary uppercase hover:underline"
          >
            Listen on YouTube Music
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
          </a>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-border bg-black">
        <div className="aspect-video">
          <iframe
            src={release.embedUrl}
            title={release.title}
            className="size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </DetailShell>
  )
}
