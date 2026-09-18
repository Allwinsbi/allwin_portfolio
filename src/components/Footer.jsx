import Container from './Container'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 pt-16 pb-7">
      <Container>
        <div className="grid sm:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          <div>
            <p className="font-display text-paper text-[1.15rem]">Allwin S</p>
            <p className="text-red text-[0.9rem] mt-1">Full-Stack Developer</p>
            <p className="mt-3.5 text-[0.9rem] max-w-[34ch]">
              Building modern digital experiences for businesses, startups and ideas.
            </p>
          </div>

          <nav className="flex flex-col gap-2.5 text-[0.92rem]" aria-label="Footer">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="hover:text-paper transition-colors w-fit"
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
            <a href="mailto:allwinsbi@gmail.com" className="hover:text-paper transition-colors w-fit">
              allwinsbi@gmail.com
            </a>
            <a
              href="https://github.com/Allwinsbi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-paper transition-colors w-fit"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/allwin-s-942a172b7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-paper transition-colors w-fit"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <p className="pt-6 text-[0.82rem] text-white/45">© 2026 Allwin S. All rights reserved.</p>
      </Container>
    </footer>
  )
}
