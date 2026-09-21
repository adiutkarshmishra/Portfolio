import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { DetailShell } from '@/pages/DetailShell'
import { profile } from '@/data/portfolio'

export function ResumePage() {
  return (
    <DetailShell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-mono-label text-xs text-primary uppercase">Résumé</span>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{profile.name}</h1>
        </div>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono-label inline-flex items-center gap-1.5 text-xs text-primary uppercase hover:underline"
        >
          Open in new tab
          <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-border bg-black">
        <iframe src={profile.resumeUrl} title="Resume" className="h-[80vh] w-full" />
      </div>
    </DetailShell>
  )
}
