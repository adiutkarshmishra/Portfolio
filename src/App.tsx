import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { FloatingIcons } from '@/components/floating-icons'
import { Home } from '@/pages/Home'
import type { SectionId } from '@/components/sections/Header'
import { MusicReleasePage } from '@/pages/MusicReleasePage'
import { ResumePage } from '@/pages/ResumePage'
import { EducationPage } from '@/pages/EducationPage'

function AppShell() {
  const [homeSection, setHomeSection] = useState<SectionId | null>(null)

  return (
    <>
      <FloatingIcons homeSection={homeSection} />
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
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
