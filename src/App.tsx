import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'
import { FloatingIcons } from '@/components/floating-icons'
import { Home } from '@/pages/Home'
import { MusicReleasePage } from '@/pages/MusicReleasePage'
import { ResumePage } from '@/pages/ResumePage'
import { EducationPage } from '@/pages/EducationPage'

function App() {
  return (
    <BrowserRouter>
      <FloatingIcons />
      <ScrollProgress className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-primary to-accent" />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music/:slug" element={<MusicReleasePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
