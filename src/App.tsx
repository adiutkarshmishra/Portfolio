import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { FloatingIcons } from '@/components/floating-icons'
import { Home } from '@/pages/Home'
import type { SectionId } from '@/components/sections/Header'
import { MusicReleasePage } from '@/pages/MusicReleasePage'
import { ResumePage } from '@/pages/ResumePage'
import { EducationPage } from '@/pages/EducationPage'

function AppShell() {
  const [homeSection, setHomeSection] = useState<SectionId | null>(null)
  const location = useLocation()

  const isMusic = homeSection === 'music' || location.pathname.startsWith('/music/')
  const isDayJob = homeSection === 'day-job'
  const progressColor = isMusic ? 'bg-accent' : isDayJob ? 'bg-primary' : 'bg-gradient-to-r from-primary to-accent'

  return (
    <>
      <FloatingIcons homeSection={homeSection} />
      <ScrollProgress className={'fixed inset-x-0 top-0 z-50 ' + progressColor} />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home active={homeSection} onSelect={setHomeSection} />} />
        <Route path="/music/:slug" element={<MusicReleasePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
