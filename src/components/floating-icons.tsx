import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { HugeiconsIcon } from '@hugeicons/react'
import { CogIcon, Settings01Icon, Settings02Icon, MusicNote01Icon, MusicNote02Icon, Music01Icon } from '@hugeicons/core-free-icons'

const MAX_SPEED = 0.5
const COLLISION_DAMPING = 0.6

type IconKind = 'gear' | 'note'

const GEAR_ICONS = [CogIcon, Settings01Icon, Settings02Icon]
const NOTE_ICONS = [MusicNote01Icon, MusicNote02Icon, Music01Icon]

type IconSpec = {
  kind: IconKind
  icon: (typeof GEAR_ICONS)[number]
  size: number
  /** Home-page only: index into HOME_ZONES this particle is confined to. */
  zone: number | null
  colorClass: string
}

const GEAR_COLOR = 'text-primary/15'
const NOTE_COLOR = 'text-accent/15'

// Home page only: 5 vertical zones anchored to sections. Each zone is a closed
// box a particle can't drift out of (no visible divider — purely a physics bound).
const HOME_ZONE_ANCHORS: [string | null, string | null][] = [
  [null, '#day-job'],
  ['#day-job', '#music'],
  ['#music', '#know-me'],
  ['#know-me', '#links'],
  ['#links', null],
]
const HOME_ZONE_MIX: { gears: number; notes: number; gearColorClass?: string }[] = [
  { gears: 5, notes: 5 },
  { gears: 10, notes: 0 },
  { gears: 0, notes: 10 },
  { gears: 5, notes: 5, gearColorClass: 'text-photo-orange/15' },
  { gears: 5, notes: 5 },
]

const DEFAULT_COUNT = 14

type PageMode = 'home' | 'music' | 'work' | 'mixed'

function pageModeFor(pathname: string): PageMode {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/music/')) return 'music'
  if (pathname === '/resume' || pathname === '/education') return 'work'
  return 'mixed'
}

function makeIcon(kind: IconKind, sizeSeed: number, variantSeed: number, colorClass: string): IconSpec {
  const icons = kind === 'gear' ? GEAR_ICONS : NOTE_ICONS
  return { kind, icon: icons[variantSeed % icons.length], size: 20 + (sizeSeed % 4) * 6, zone: null, colorClass }
}

function buildSpec(mode: PageMode): IconSpec[] {
  if (mode === 'home') {
    const spec: IconSpec[] = []
    let gearSeed = 0
    let noteSeed = 0
    HOME_ZONE_MIX.forEach((mix, zone) => {
      const gearColor = mix.gearColorClass ?? GEAR_COLOR
      for (let i = 0; i < mix.gears; i++) spec.push({ ...makeIcon('gear', i, gearSeed++, gearColor), zone })
      for (let i = 0; i < mix.notes; i++) spec.push({ ...makeIcon('note', i, noteSeed++, NOTE_COLOR), zone })
    })
    return spec
  }

  let gearSeed = 0
  let noteSeed = 0
  return Array.from({ length: DEFAULT_COUNT }, (_, i) => {
    const kind: IconKind = mode === 'music' ? 'note' : mode === 'work' ? 'gear' : i % 2 === 0 ? 'gear' : 'note'
    const colorClass = kind === 'gear' ? GEAR_COLOR : NOTE_COLOR
    return makeIcon(kind, i, kind === 'gear' ? gearSeed++ : noteSeed++, colorClass)
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
  top: number
  bottom: number
}

function clampSpeed(p: Particle) {
  const speed = Math.hypot(p.vx, p.vy)
  if (speed > MAX_SPEED) {
    const scale = MAX_SPEED / speed
    p.vx *= scale
    p.vy *= scale
  }
}

function resolveZoneBounds(docHeight: number): [number, number][] {
  const anchorY = (selector: string | null, fallback: number) => {
    if (!selector) return fallback
    const el = document.querySelector(selector)
    if (!el) return fallback
    return el.getBoundingClientRect().top + window.scrollY
  }
  return HOME_ZONE_ANCHORS.map(([start, end]) => [anchorY(start, 0), anchorY(end, docHeight)])
}

export function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const mode = pageModeFor(location.pathname)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // body.scrollHeight (not documentElement's) so this overlay's own height never
    // feeds back into the measurement — it would otherwise ratchet up and never shrink
    // when navigating from a tall page to a short one, since this component never unmounts.
    const getDocHeight = () => document.body.scrollHeight
    container.style.height = `${getDocHeight()}px`

    const zoneBounds = mode === 'home' ? resolveZoneBounds(getDocHeight()) : null

    const els = Array.from(container.children) as HTMLDivElement[]
    const particles: Particle[] = els.map((el) => {
      const size = el.offsetWidth || 24
      const angle = Math.random() * Math.PI * 2
      const speed = 0.15 + Math.random() * 0.25
      const zoneIndex = el.dataset.zone !== undefined ? Number(el.dataset.zone) : null
      const [top, bottom] =
        zoneIndex !== null && zoneBounds ? zoneBounds[zoneIndex] : [0, getDocHeight()]

      return {
        el,
        x: Math.random() * Math.max(window.innerWidth - size, 0),
        y: top + Math.random() * Math.max(bottom - top - size, 0),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        top,
        bottom,
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
        if (p.y <= p.top) {
          p.y = p.top
          p.vy = Math.abs(p.vy)
        }
        if (p.y >= p.bottom - p.size) {
          p.y = p.bottom - p.size
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
        <div
          key={i}
          data-zone={icon.zone ?? undefined}
          className={'absolute top-0 left-0 will-change-transform ' + icon.colorClass}
        >
          <HugeiconsIcon icon={icon.icon} size={icon.size} />
        </div>
      ))}
    </div>
  )
}
