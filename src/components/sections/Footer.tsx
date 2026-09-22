import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUp01Icon } from '@hugeicons/core-free-icons'
import { profile } from '@/data/portfolio'
import type { SectionId } from '@/components/sections/Header'
import { BrandLogo } from '@/components/brand-logo'

export function Footer({ active }: { active?: SectionId | null }) {
  return (
    <footer className="border-t border-border bg-background/80 px-6 py-6 pb-16 text-center backdrop-blur-md sm:py-8 sm:pb-20 md:py-0">
      <BrandLogo
        accent={active === 'music' ? 'music' : undefined}
        className="mx-auto mb-4 size-16 sm:mb-5 sm:size-20 md:mb-1 md:size-6"
      />
      <p className="font-mono-label text-xs text-muted-foreground uppercase">
        © {new Date().getFullYear()} {profile.name} — built with React, Tailwind CSS, Watermelon UI &amp; Motion-Primitives
      </p>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-mono-label mx-auto mt-4 flex items-center gap-1.5 text-xs text-muted-foreground uppercase transition-colors hover:text-primary sm:mt-5 md:hidden"
      >
        <HugeiconsIcon icon={ArrowUp01Icon} size={14} />
        Back to top
      </button>
    </footer>
  )
}
