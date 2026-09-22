import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import { CogIcon, Settings01Icon, Settings02Icon, MusicNote01Icon, MusicNote02Icon, Music01Icon } from '@hugeicons/core-free-icons'
import type { SectionId } from '@/components/sections/Header'

const MAX_SPEED = 0.5
const COLLISION_DAMPING = 0.6
const DEFAULT_COUNT = 14

type IconKind = 'gear' | 'note'

const GEAR_ICONS = [CogIcon, Settings01Icon, Settings02Icon]
const NOTE_ICONS = [MusicNote01Icon, MusicNote02Icon, Music01Icon]
const GEAR_COLOR = 'text-primary/15'
const NOTE_COLOR = 'text-accent/15'

type IconSpec = {
  icon: (typeof GEAR_ICONS)[number]
  size: number
  colorClass: string
}

type PageMode = 'music' | 'work' | 'mixed'

function pageModeFor(pathname: string): PageMode {
  if (pathname.startsWith('/music/')) return 'music'
  if (pathname === '/resume' || pathname === '/education') return 'work'
  return 'mixed'
}

// The homepage shows one section at a time instead of a continuous scroll, so
// it gets the same per-view treatment as the other pages, driven by whichever
// section is currently active rather than the URL.
function homeSectionMode(section: SectionId | null): PageMode {
  if (section === 'music') return 'music'
  if (section === 'day-job') return 'work'
  return 'mixed'
}

function makeIcon(kind: IconKind, sizeSeed: number, variantSeed: number): IconSpec {
  const icons = kind === 'gear' ? GEAR_ICONS : NOTE_ICONS
  return { icon: icons[variantSeed % icons.length], size: 20 + (sizeSeed % 4) * 6, colorClass: kind === 'gear' ? GEAR_COLOR : NOTE_COLOR }
}

function buildSpec(mode: PageMode): IconSpec[] {
  let gearSeed = 0
  let noteSeed = 0
  return Array.from({ length: DEFAULT_COUNT }, (_, i) => {
    const kind: IconKind = mode === 'music' ? 'note' : mode === 'work' ? 'gear' : i % 2 === 0 ? 'gear' : 'note'
    return makeIcon(kind, i, kind === 'gear' ? gearSeed++ : noteSeed++)
  })
}

type Particle = {
  el: HTMLDivElement
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotation: number
  rotationSpeed: number
}

function clampSpeed(p: Particle) {
  const speed = Math.hypot(p.vx, p.vy)
  if (speed > MAX_SPEED) {
    const scale = MAX_SPEED / speed
    p.vx *= scale
    p.vy *= scale
  }
}

export function FloatingIcons({ homeSection }: { homeSection: SectionId | null }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const mode: PageMode = location.pathname === '/' ? homeSectionMode(homeSection) : pageModeFor(location.pathname)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // body.scrollHeight (not documentElement's) so this overlay's own height never
    // feeds back into the measurement — it would otherwise ratchet up and never shrink
    // when navigating from a tall page to a short one, since this component never unmounts.
    const getDocHeight = () => document.body.scrollHeight
    container.style.height = `${getDocHeight()}px`

    const els = Array.from(container.children) as HTMLDivElement[]
    const particles: Particle[] = els.map((el) => {
      const size = el.offsetWidth || 24
      const angle = Math.random() * Math.PI * 2
      const speed = 0.15 + Math.random() * 0.25

      return {
        el,
        x: Math.random() * Math.max(window.innerWidth - size, 0),
        y: Math.random() * Math.max(getDocHeight() - size, 0),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
      }
    })

    const onResize = () => {
      container.style.height = `${getDocHeight()}px`
    }
    window.addEventListener('resize', onResize)

    let raf = 0

    const tick = () => {
      const w = window.innerWidth
      const h = getDocHeight()
      container.style.height = `${h}px`

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.rotation += p.rotationSpeed

        if (p.x <= 0) {
          p.x = 0
          p.vx = Math.abs(p.vx)
        }
        if (p.x >= w - p.size) {
          p.x = w - p.size
          p.vx = -Math.abs(p.vx)
        }
        if (p.y <= 0) {
          p.y = 0
          p.vy = Math.abs(p.vy)
        }
        if (p.y >= h - p.size) {
          p.y = h - p.size
          p.vy = -Math.abs(p.vy)
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = b.x + b.size / 2 - (a.x + a.size / 2)
          const dy = b.y + b.size / 2 - (a.y + a.size / 2)
          const dist = Math.hypot(dx, dy)
          const minDist = (a.size + b.size) / 2
          if (dist > 0 && dist < minDist) {
            const nx = dx / dist
            const ny = dy / dist
            const overlap = (minDist - dist) / 2
            a.x -= nx * overlap
            a.y -= ny * overlap
            b.x += nx * overlap
            b.y += ny * overlap

            // scatter apart, then damp so the pair slows down instead of speeding up
            const avx = a.vx
            const avy = a.vy
            a.vx = (b.vx - nx * 0.3) * COLLISION_DAMPING
            a.vy = (b.vy - ny * 0.3) * COLLISION_DAMPING
            b.vx = (avx + nx * 0.3) * COLLISION_DAMPING
            b.vy = (avy + ny * 0.3) * COLLISION_DAMPING
          }
        }
      }

      for (const p of particles) {
        clampSpeed(p)
        p.el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.rotation}deg)`
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [mode])

  const spec = buildSpec(mode)

  return (
    <div ref={containerRef} aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden">
      {spec.map((icon, i) => (
        <div key={i} className={'absolute top-0 left-0 will-change-transform ' + icon.colorClass}>
          <HugeiconsIcon icon={icon.icon} size={icon.size} />
        </div>
      ))}
    </div>
  )
}
