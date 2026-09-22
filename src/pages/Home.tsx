import { useEffect, type ComponentType } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Header, type SectionId } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { DayJob } from '@/components/sections/DayJob'
import { Music } from '@/components/sections/Music'
import { KnowMe } from '@/components/sections/KnowMe'
import { Links } from '@/components/sections/Links'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

const SECTION_COMPONENTS: Record<SectionId, ComponentType> = {
  'day-job': DayJob,
  music: Music,
  links: Links,
  contact: Contact,
}

export function Home({
  active,
  onSelect,
}: {
  active: SectionId | null
  onSelect: (id: SectionId | null) => void
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [active])

  const ActiveSection = active ? SECTION_COMPONENTS[active] : null

  return (
    <div className="flex min-h-screen flex-col">
      <Header active={active} onSelect={onSelect} />
      <main className="flex-1 pt-[72px]">
        <AnimatePresence mode="wait">
          {ActiveSection ? (
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ActiveSection />
            </motion.div>
          ) : (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onSelect={onSelect} />
              <KnowMe />
              <Stats />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer active={active} />
    </div>
  )
}
