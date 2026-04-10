import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import FeaturedIn from './components/FeaturedIn'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme } = useTheme()
  return (
    <div data-theme={theme} className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <FeaturedIn />
      <Contact />
      <Footer />
    </div>
  )
}
