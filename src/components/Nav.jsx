import { useEffect, useState } from 'react'
import { useStartProject } from '../hooks/useStartProject'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const openStartProject = useStartProject()
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

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
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-5">
      <div className="max-w-content mx-auto flex items-center h-[64px] gap-6 rounded-full bg-ink/95 backdrop-blur-md border border-white/10 px-5 sm:px-7 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)]">
        <a
          href="#home"
          className="font-display text-paper text-[1.05rem] tracking-tight"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('home')
          }}
        >
          ALLWIN<span className="text-red">.S</span>
        </a>

        <nav className="hidden md:flex gap-7 text-[0.86rem] font-semibold uppercase tracking-wide ml-auto" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors ${active === link.id ? 'text-red' : 'text-white/65 hover:text-white'}`}
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
          type="button"
          onClick={openStartProject}
          className="btn btn-primary hidden md:inline-flex px-5 py-2.5 text-[0.85rem] ml-auto md:ml-0"
        >
          Let's Talk
        </button>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2 ml-auto"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="w-[22px] h-[2px] bg-paper block" />
          <span className="w-[22px] h-[2px] bg-paper block" />
          <span className="w-[22px] h-[2px] bg-paper block" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden max-w-content mx-auto mt-2 flex flex-col gap-1 px-5 pt-3 pb-6 bg-ink rounded-3xl border border-white/10">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="py-3 px-1 text-[1rem] text-paper border-b border-white/10"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-primary justify-center mt-3"
            onClick={() => {
              setMenuOpen(false)
              openStartProject()
            }}
          >
            Let's Talk
          </button>
        </div>
      )}
    </header>
  )
}
