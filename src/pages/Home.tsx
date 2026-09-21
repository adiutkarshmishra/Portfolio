import { Header } from '@/components/sections/Header'
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
  return (
    <>
      <Header />
      <ThemeToggle
        iconSize={18}
        className="fixed top-6 right-6 z-50 flex size-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary"
      />
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
