import { useReveal } from '../hooks/useReveal'
import Container from './Container'

const SERVICES = [
  { title: 'Business Websites', text: 'Modern, responsive websites that establish a strong digital presence and clearly communicate a business, its services and its value.' },
  { title: 'E-commerce Platforms', text: 'Customer-focused online stores designed around product discovery, shopping experiences and scalable functionality.' },
  { title: 'Full-Stack Web Applications', text: 'Complete web applications combining modern frontend interfaces with reliable backend systems, APIs and databases.' },
  { title: 'Mobile Applications', text: 'Modern mobile product experiences designed around usability, performance and practical user requirements.' },
  { title: 'Website Redesign', text: 'Transforming outdated websites into modern, responsive and user-friendly digital experiences.' },
  { title: 'Backend & API Development', text: 'Reliable backend services and APIs designed to support modern web and application experiences.' },
]

export default function Services() {
  const ref = useReveal()
  return (
    <section id="services" className="py-16 sm:py-28 bg-surface border-y border-line" ref={ref}>
      <Container>
        <h2 className="text-[1.9rem] sm:text-[2.6rem] font-extrabold max-w-[18ch] mb-10 text-ink reveal">
          What I Can Build
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {SERVICES.map((s, i) => (
            <div
              className={`bg-surface hover:bg-surface-soft transition-colors px-7 py-8 reveal r${(i % 3) + 1}`}
              key={s.title}
            >
              <span className="block font-display text-accent text-[0.85rem] mb-3.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[1.08rem] font-semibold mb-2.5 text-ink">{s.title}</h3>
              <p className="text-ink-soft text-[0.94rem]">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
