import { DetailShell } from '@/pages/DetailShell'
import type { BandRelease } from '@/data/portfolio'

export function BandPage({ release }: { release: BandRelease }) {
  return (
    <DetailShell>
      <div className="grid gap-10 sm:grid-cols-[280px_1fr] sm:items-start">
        <img
          src={release.cover}
          alt={release.title}
          className="w-full rounded-xl border border-border object-contain"
        />

        <div>
          <span className="font-mono-label text-xs text-accent uppercase">{release.subtitle}</span>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{release.title}</h1>
          <div className="mt-4 space-y-4">
            {release.description.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </DetailShell>
  )
}
