import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUp01Icon } from '@hugeicons/core-free-icons'
import { profile } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 px-6 py-8 pb-28 text-center backdrop-blur-md">
      <img src="/images/logo.png" alt="" className="mx-auto mb-5 size-[81px]" />
      <p className="font-mono-label text-xs text-muted-foreground uppercase">
        © {new Date().getFullYear()} {profile.name} — built with React, Tailwind CSS, Watermelon UI &amp; Motion-Primitives
      </p>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-mono-label mx-auto mt-5 flex items-center gap-1.5 text-xs text-muted-foreground uppercase transition-colors hover:text-primary"
      >
        <HugeiconsIcon icon={ArrowUp01Icon} size={14} />
        Back to top
      </button>
    </footer>
  )
}
