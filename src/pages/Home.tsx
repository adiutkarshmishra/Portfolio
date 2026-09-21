import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Header } from '@/components/sections/Header'
import { HomeHeader } from '@/components/home-header'
import { ThemeToggle } from '@/components/theme-toggle'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { DayJob } from '@/components/sections/DayJob'
import { Music } from '@/components/sections/Music'
import { KnowMe } from '@/components/sections/KnowMe'
import { Links } from '@/components/sections/Links'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export function Home() {
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('#home')
    if (!hero) return

    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0 })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <HomeHeader visible={pastHero} />
      <Header />
      <motion.div
        animate={{ top: pastHero ? 80 : 24 }}
        transition={{ duration: 0.3 }}
        className="fixed right-6 z-50"
      >
        <ThemeToggle
          iconSize={18}
          className="flex size-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary"
        />
      </motion.div>
      <main>
        <Hero />
        <Stats />
        <DayJob />
        <Music />
        <KnowMe />
        <Links />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
