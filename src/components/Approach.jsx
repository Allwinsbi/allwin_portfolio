import { useReveal } from '../hooks/useReveal'
import Container from './Container'

const STAGES = [
  { num: '01', title: 'Understand', text: 'Understand the business, target users, requirements and goals.' },
  { num: '02', title: 'Plan', text: 'Break the idea into practical features and create a clear development direction.' },
  { num: '03', title: 'Build', text: 'Develop responsive interfaces, backend services, APIs and database functionality.' },
  { num: '04', title: 'Refine', text: 'Test, troubleshoot and improve the product to provide a better user experience.' },
  { num: '05', title: 'Deliver', text: 'Focus on delivering a reliable, maintainable and professional digital product.' },
]

export default function Approach() {
  const ref = useReveal()
  return (
    <section className="py-16 sm:py-28 bg-surface border-y border-line" ref={ref}>
      <Container>
        <h2 className="text-[1.9rem] sm:text-[2.6rem] font-extrabold max-w-[18ch] mb-10 text-ink reveal">
          From Idea to Digital Product
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-8 lg:gap-1">
          {STAGES.map((s, i) => (
            <div className={`relative pt-7 reveal r${(i % 3) + 1}`} key={s.num}>
              <span
                className={`absolute top-0 left-0 right-3 h-0.5 ${i === 0 ? 'bg-accent' : 'bg-line'}`}
                aria-hidden="true"
              />
              <div className="font-display text-[0.85rem] text-accent mb-3">{s.num}</div>
              <h3 className="text-[1.05rem] font-semibold mb-2 text-ink">{s.title}</h3>
              <p className="text-[0.88rem] text-ink-soft">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
