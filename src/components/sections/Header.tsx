import { ThemeToggle } from '@/components/theme-toggle'
import { BrandLogo } from '@/components/brand-logo'
import { profile } from '@/data/portfolio'

export type SectionId = 'day-job' | 'music' | 'links' | 'contact'

const NAV_ITEMS: { id: SectionId | null; label: string; accent?: 'accent' }[] = [
  { id: null, label: 'Home' },
  { id: 'day-job', label: 'Day Job' },
  { id: 'music', label: 'Music', accent: 'accent' },
  { id: 'links', label: 'Links' },
  { id: 'contact', label: 'Contact' },
]

export function Header({
  active,
  onSelect,
}: {
  active: SectionId | null
  onSelect: (id: SectionId | null) => void
}) {
  return (
    <div className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-0.5 px-3 py-4 sm:gap-4 sm:px-6">
        <button type="button" onClick={() => onSelect(null)} className="flex shrink-0 items-center gap-2">
          <BrandLogo accent={active === 'music' ? 'music' : undefined} className="size-6 sm:size-8" />
          <span className="font-mono-label hidden text-xs text-foreground uppercase lg:inline">{profile.name}</span>
        </button>

        <nav className="flex shrink-0 items-center gap-[0.9375rem] sm:gap-1 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id ?? 'home'}
              type="button"
              onClick={() => onSelect(item.id)}
              className={
                'font-mono-label rounded-md px-0.5 py-1.5 text-[0.625rem] whitespace-nowrap uppercase transition-colors sm:px-3 sm:text-xs ' +
                (active === item.id
                  ? 'bg-secondary ' + (item.accent === 'accent' ? 'text-accent' : 'text-primary')
                  : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground')
              }
            >
              {item.label}
            </button>
          ))}
        </nav>

        <ThemeToggle
          iconSize={16}
          className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:size-8"
        />
      </div>
    </div>
  )
}
