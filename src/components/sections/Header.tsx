import { useEffect, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Wrench01Icon,
  MusicNote01Icon,
  UserIcon,
  Link01Icon,
  Mail01Icon,
} from '@hugeicons/core-free-icons'
import { Dock, type DockItem } from '@/components/dock'

const NAV_ITEMS: DockItem[] = [
  { id: 1, label: 'Day Job', href: '#day-job', Icon: ({ className }) => <HugeiconsIcon icon={Wrench01Icon} size={22} className={className} /> },
  { id: 2, label: 'Music', href: '#music', Icon: ({ className }) => <HugeiconsIcon icon={MusicNote01Icon} size={22} className={className} /> },
  { id: 3, label: 'Know Me', href: '#know-me', Icon: ({ className }) => <HugeiconsIcon icon={UserIcon} size={22} className={className} /> },
  { id: 4, label: 'Links', href: '#links', Icon: ({ className }) => <HugeiconsIcon icon={Link01Icon} size={22} className={className} /> },
  { id: 5, label: 'Contact', href: '#contact', Icon: ({ className }) => <HugeiconsIcon icon={Mail01Icon} size={22} className={className} /> },
]

export function Header() {
  const [activeId, setActiveId] = useState<number | null>(null)

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => ({ id: item.id, el: document.querySelector(item.href) })).filter(
      (s): s is { id: number; el: Element } => s.el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const match = sections.find((s) => s.el === entry.target)
          if (match) setActiveId(match.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s.el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <div className="pointer-events-auto">
        <Dock items={NAV_ITEMS} activeId={activeId} onSelect={setActiveId} />
      </div>
    </div>
  )
}
