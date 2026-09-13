import { useReveal } from '../hooks/useReveal'
import Container from './Container'

const GROUPS = [
  { label: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'ReactJS'] },
  { label: 'Backend', items: ['Python', 'FastAPI', 'NestJS'] },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL'] },
  { label: 'Tools & Infrastructure', items: ['Docker', 'Git', 'GitHub'] },
]

export default function Skills() {
  const ref = useReveal()
  return (
    <section id="skills" className="py-16 sm:py-28 bg-paper" ref={ref}>
      <Container>
        <h2 className="text-[1.9rem] sm:text-[2.6rem] font-extrabold max-w-[18ch] mb-10 text-ink reveal">
          Technical Expertise
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {GROUPS.map((g, i) => (
            <div className={`reveal r${(i % 3) + 1}`} key={g.label}>
              <h3 className="text-[0.95rem] text-ink-soft font-medium mb-4 pb-3 border-b border-line">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    className="text-[0.88rem] px-3.5 py-1.5 border border-line rounded text-ink hover:border-accent hover:text-accent transition-colors"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
