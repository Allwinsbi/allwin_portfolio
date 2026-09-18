import { useReveal } from '../hooks/useReveal'
import Container from './Container'

export default function Experience() {
  const ref = useReveal()
  return (
    <section id="experience" className="py-16 sm:py-28 bg-paper-dim border-y border-line" ref={ref}>
      <Container>
        <span className="eyebrow reveal">Field Notes</span>
        <h2 className="section-title mb-10 reveal">Experience</h2>

        <div className="reveal grid sm:grid-cols-[220px_1fr] gap-6 sm:gap-10 border border-line rounded-lg p-7 sm:p-9 bg-paper">
          <div>
            <p className="font-display text-xl text-ink">Accenture</p>
            <p className="text-ink-soft text-[0.85rem] mt-3">April 2025 – May 2026</p>
            <p className="text-red-deep text-[0.85rem] mt-1 font-semibold">1 Year Professional Experience</p>
          </div>
          <div className="space-y-4">
            <p className="text-ink-soft text-[0.96rem] max-w-[62ch]">
              I gained professional experience working in a structured enterprise
              environment, collaborating with teams and working with business
              requirements, validation, documentation and quality-focused delivery.
            </p>
            <p className="text-ink-soft text-[0.96rem] max-w-[62ch]">
              This experience strengthened my problem-solving, communication,
              teamwork, requirement understanding and professional delivery skills.
            </p>
            <p className="text-ink-soft text-[0.96rem] max-w-[62ch]">
              Alongside my professional experience, I continued developing my
              skills through hands-on full-stack projects and independent product
              development.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
