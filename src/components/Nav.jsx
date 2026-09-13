import { useEffect, useState } from 'react'
import { useStartProject } from '../hooks/useStartProject'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const openStartProject = useStartProject()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-5 sm:px-7 flex items-center h-[80px] gap-8">
        <a
          href="#home"
          className={`font-display font-extrabold text-xl sm:text-2xl tracking-tight transition-colors ${
            scrolled ? 'text-ink' : 'text-paper'
          }`}
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('home')
          }}
        >
          ALLWIN S
        </a>

        <nav className="hidden md:flex gap-7 text-[0.92rem] ml-auto" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative py-1 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-[3px] after:h-[1.5px] after:w-full after:origin-left after:transition-transform after:duration-250 ${
                scrolled ? 'after:bg-accent' : 'after:bg-cta'
              } ${
                active === link.id
                  ? `after:scale-x-100 ${scrolled ? 'text-ink' : 'text-paper'}`
                  : `after:scale-x-0 ${scrolled ? 'text-ink-soft hover:text-ink' : 'text-paper/75 hover:text-paper'}`
              }`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={openStartProject}
          className="btn btn-primary hidden md:inline-flex px-5 py-2.5 text-[0.88rem]"
        >
          Start a Project
        </button>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2 ml-auto"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`w-[22px] h-[2px] block ${scrolled ? 'bg-ink' : 'bg-paper'}`} />
          <span className={`w-[22px] h-[2px] block ${scrolled ? 'bg-ink' : 'bg-paper'}`} />
          <span className={`w-[22px] h-[2px] block ${scrolled ? 'bg-ink' : 'bg-paper'}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-5 pt-3 pb-6 bg-paper border-b border-line">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="py-3 px-1 text-[1rem] text-ink border-b border-line"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false)
              openStartProject()
            }}
            className="btn btn-primary justify-center mt-3"
          >
            Start a Project
          </button>
        </div>
      )}
    </header>
  )
}
