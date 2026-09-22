import type { ReactNode } from 'react'
import { InView } from '@/components/motion-primitives/in-view'

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent = 'primary',
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  accent?: 'primary' | 'accent' | 'photo-orange'
}) {
  const colorClass = accent === 'accent' ? 'text-accent' : accent === 'photo-orange' ? 'text-photo-orange' : 'text-primary'
  const lineClass = accent === 'accent' ? 'bg-accent' : accent === 'photo-orange' ? 'bg-photo-orange' : 'bg-primary'

  return (
    <InView
      variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className={'font-mono-label inline-flex items-center gap-2 text-xs uppercase ' + colorClass}>
        <span className={'h-px w-6 ' + lineClass} />
        {eyebrow}
        <span className={'h-px w-6 ' + lineClass} />
      </span>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:mt-3 sm:text-4xl md:mt-1 md:text-2xl">{title}</h2>
      {description && <p className="mt-3 text-muted-foreground sm:mt-4 md:mt-2 md:text-sm">{description}</p>}
    </InView>
  )
}
