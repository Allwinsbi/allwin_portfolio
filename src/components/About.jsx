import { useReveal } from '../hooks/useReveal'
import Container from './Container'

const CARDS = [
  { title: 'Business Understanding', text: 'Building solutions around business and customer needs.' },
  { title: 'Modern User Experience', text: 'Creating clean, responsive and intuitive digital experiences.' },
  { title: 'Full-Stack Capability', text: 'Working across frontend, backend, APIs and databases.' },
  { title: 'Problem Solving', text: 'Turning requirements and ideas into practical solutions.' },
  { title: 'Continuous Improvement', text: 'Continuously learning and improving with modern technologies.' },
]

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="py-16 sm:py-28 bg-ink" ref={ref}>
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-[72px] items-start">
          <div className="reveal">
            <span className="eyebrow">About Me</span>
            <h2 className="section-title text-paper max-w-[14ch] mb-10">
              Building Digital Products With Purpose
            </h2>
            <div className="space-y-[18px]">
              <p className="text-white/60 max-w-[52ch]">
                I'm a Full-Stack Developer with 1 year of professional experience at
                Accenture, combined with hands-on experience developing real-world
                websites, e-commerce platforms and application concepts.
              </p>
              <p className="text-white/60 max-w-[52ch]">
                I enjoy transforming ideas and business requirements into modern
                digital products with a strong focus on user experience, responsive
                design, reliable backend systems and practical functionality.
              </p>
              <p className="text-white/60 max-w-[52ch]">
                My experience covers the complete development journey — from
                designing frontend experiences and developing backend APIs to
                working with databases, application infrastructure and deployment
                environments.
              </p>
              <p className="text-white/60 max-w-[52ch]">
                I'm passionate about technology, continuous learning and building
                products that solve real-world problems.
              </p>
            </div>
          </div>

          <div className="grid gap-px bg-white/10">
            {CARDS.map((c, i) => {
              const dark = i % 2 === 0
              return (
                <div
                  className={`px-7 py-6 reveal r${(i % 3) + 1} ${dark ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}
                  key={c.title}
                >
                  <h3 className="text-[1.02rem] font-semibold mb-2">{c.title}</h3>
                  <p className={`text-[0.95rem] ${dark ? 'text-white/60' : 'text-ink-soft'}`}>{c.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
