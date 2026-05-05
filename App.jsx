import Navbar from './Navbar'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
