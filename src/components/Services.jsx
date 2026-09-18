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
    <section id="services" className="py-16 sm:py-28 bg-ink" ref={ref}>
      <Container>
        <span className="eyebrow reveal">What I Build</span>
        <h2 className="section-title text-paper mb-10 reveal">Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {SERVICES.map((s, i) => {
            const dark = i % 2 === 0
            return (
              <div
                className={`px-7 py-8 reveal r${(i % 3) + 1} ${dark ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}
                key={s.title}
              >
                <span className={`block font-display text-[2rem] mb-3.5 ${dark ? 'text-red' : 'text-red-deep'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[1.08rem] font-semibold mb-2.5">{s.title}</h3>
                <p className={`text-[0.94rem] ${dark ? 'text-white/60' : 'text-ink-soft'}`}>{s.text}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
