import Container from './Container'
import { EMAIL, EMAIL_URL } from '../data/contact'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-paper text-ink-soft pt-16 pb-7 border-t border-line">
      <Container>
        <div className="grid sm:grid-cols-3 gap-8 pb-10 border-b border-line">
          <div>
            <p className="font-display text-ink text-2xl font-extrabold uppercase">Allwin S</p>
            <p className="text-accent text-[0.9rem] mt-1">Full-Stack Developer</p>
            <p className="mt-3.5 text-[0.9rem] max-w-[34ch]">
              Building modern digital experiences for businesses, startups and ideas.
            </p>
          </div>

          <nav className="flex flex-col gap-2.5 text-[0.92rem]" aria-label="Footer">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="hover:text-accent transition-colors w-fit"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="text-[0.92rem] flex flex-col gap-2.5">
            <a href={EMAIL_URL} className="hover:text-accent transition-colors w-fit">
              {EMAIL}
            </a>
            <span className="text-[0.82rem] text-ink-soft/70 mt-1">IST (UTC+5:30)</span>
          </div>
        </div>

        <p className="pt-6 text-[0.82rem] text-ink-soft/60">© 2026 allwin All rights reserved.</p>
      </Container>
    </footer>
  )
}
