import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Approach from './components/Approach'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { StartProjectProvider } from './hooks/useStartProject'

export default function App() {
  return (
    <StartProjectProvider>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Skills />
        <Approach />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </StartProjectProvider>
  )
}
