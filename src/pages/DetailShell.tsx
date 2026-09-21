import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon, ArrowUp01Icon } from '@hugeicons/core-free-icons'
import { profile } from '@/data/portfolio'
import { ThemeToggle } from '@/components/theme-toggle'

export function DetailShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="font-mono-label inline-flex items-center gap-2 text-xs text-muted-foreground uppercase transition-colors hover:text-primary"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
            Back
          </Link>
          <span className="font-mono-label absolute left-1/2 -translate-x-1/2 text-xs text-foreground uppercase">
            {profile.name}
          </span>
          <Link to="/" aria-label="Home">
            <img src="/images/logo.png" alt="" className="size-8" />
          </Link>
        </div>
      </div>
      <ThemeToggle
        iconSize={18}
        className="fixed top-20 right-6 z-30 flex size-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary"
      />
      <main className="mx-auto max-w-4xl px-6 py-16">{children}</main>

      <div className="mt-16 border-t border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono-label mx-auto flex items-center gap-1.5 text-xs text-muted-foreground uppercase transition-colors hover:text-primary"
          >
            <HugeiconsIcon icon={ArrowUp01Icon} size={14} />
            Back to top
          </button>
        </div>
      </div>
    </div>
  )
}
