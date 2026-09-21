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
  accent?: 'primary' | 'accent'
}) {
  return (
    <InView
      variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span
        className={
          'font-mono-label inline-flex items-center gap-2 text-xs uppercase ' +
          (accent === 'accent' ? 'text-accent' : 'text-primary')
        }
      >
        <span className={'h-px w-6 ' + (accent === 'accent' ? 'bg-accent' : 'bg-primary')} />
        {eyebrow}
        <span className={'h-px w-6 ' + (accent === 'accent' ? 'bg-accent' : 'bg-primary')} />
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </InView>
  )
}
