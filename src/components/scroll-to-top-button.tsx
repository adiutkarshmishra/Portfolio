import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUp01Icon } from '@hugeicons/core-free-icons'

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="fixed right-6 bottom-24 z-50 flex size-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary"
        >
          <HugeiconsIcon icon={ArrowUp01Icon} size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
