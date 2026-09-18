import { useReveal } from '../hooks/useReveal'
import Container from './Container'

const LINKS = [
  { label: 'Email', href: 'mailto:info.vilzoo@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Allwinsbi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/allwin-s-942a172b7' },
]

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="py-16 sm:py-28 bg-ink text-paper" ref={ref}>
      <Container>
        <div className="reveal">
          <span className="eyebrow">Collab</span>
          <h2 className="section-title text-paper max-w-[14ch] mb-8">
            Let's Build Something.
          </h2>

          <p className="text-white/65 text-[1.05rem] max-w-[56ch] mb-10">
            Whether you need a modern business website, an e-commerce platform, a
            web application or a new digital product, I'd be happy to discuss your
            idea.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 max-w-[640px]">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="rounded-xl border border-white/15 bg-white/[0.03] px-5 py-4 text-center font-semibold hover:border-red hover:text-red transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
