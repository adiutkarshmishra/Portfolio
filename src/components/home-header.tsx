import { AnimatePresence, motion } from 'motion/react'
import { profile } from '@/data/portfolio'

export function HomeHeader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md"
        >
          <div className="relative mx-auto max-w-5xl px-6 py-4 text-center">
            <span className="font-mono-label text-xs text-foreground uppercase">{profile.name}</span>
            <button
              type="button"
              aria-label="Scroll to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute top-1/2 right-[30px] -translate-y-1/2"
            >
              <img src="/images/logo.png" alt="" className="size-8" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
