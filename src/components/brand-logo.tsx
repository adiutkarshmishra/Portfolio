import { AnimatePresence, motion } from 'motion/react'
import { cn, withBase } from '@/lib/utils'

export function BrandLogo({
  accent,
  src: srcOverride,
  className,
}: {
  accent?: 'music'
  src?: string
  className?: string
}) {
  const src = srcOverride ?? withBase(accent === 'music' ? '/images/logo-music.png' : '/images/logo.png')

  return (
    <span className={cn('relative inline-block shrink-0', className)}>
      <AnimatePresence initial={false}>
        <motion.img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 size-full"
          initial={{ opacity: 0, rotate: -150, scale: 0.55 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 150, scale: 0.55 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        />
      </AnimatePresence>
    </span>
  )
}
