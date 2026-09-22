import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { SlidingNumber } from '@/components/motion-primitives/sliding-number'

export function StatCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 900
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.round(value * (1 - (1 - progress) ** 3)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value])

  return (
    <span ref={ref} className="flex items-baseline font-mono text-4xl font-semibold text-foreground sm:text-5xl md:text-4xl">
      <SlidingNumber value={count} />
      <span className="text-primary">{suffix}</span>
    </span>
  )
}
