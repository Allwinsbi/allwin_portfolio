import { useReveal } from '../hooks/useReveal'
import Container from './Container'

const POINTS = [
  { title: 'User-Focused', text: 'I care about how real users experience the product, not just how the code works.' },
  { title: 'Business-Minded', text: 'I build with the business objective in mind — whether that means selling products, generating leads or creating a useful digital service.' },
  { title: 'Full-Stack', text: 'I can work across frontend, backend, APIs and databases as part of one complete development workflow.' },
  { title: 'Reliable Communication', text: 'Clear communication and understanding requirements are important parts of my development process.' },
  { title: 'Growing With Technology', text: "I'm continuously learning and building new products to stay current with modern development practices." },
]

export default function WhyWorkWithMe() {
  const ref = useReveal()
  return (
    <section className="py-16 sm:py-28 bg-paper" ref={ref}>
      <Container>
        <h2 className="text-[1.9rem] sm:text-[2.6rem] font-extrabold max-w-[18ch] mb-10 text-ink reveal">
          More Than Just Code
        </h2>
        <div className="grid sm:grid-cols-2 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {POINTS.map((p, i) => (
            <div className={`bg-surface px-8 py-8 reveal r${(i % 3) + 1}`} key={p.title}>
              <h3 className="text-[1.05rem] font-semibold mb-2.5 text-ink">{p.title}</h3>
              <p className="text-ink-soft text-[0.94rem] max-w-[46ch]">{p.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
