import { useReveal } from '../hooks/useReveal'
import Container from './Container'
import { EMAIL, EMAIL_URL } from '../data/contact'
import { useStartProject } from '../hooks/useStartProject'

export default function Contact() {
  const ref = useReveal()
  const openStartProject = useStartProject()
  return (
    <section id="contact" className="py-16 sm:py-28 bg-surface border-t border-line" ref={ref}>
      <Container>
        <div className="text-center max-w-[680px] mx-auto reveal">
          <h2 className="font-display text-[1.9rem] sm:text-[2.7rem] font-extrabold text-ink">
            Have an Idea? Let's Turn It Into Reality.
          </h2>
          <p className="mt-6 text-ink-soft text-[1.05rem]">
            Whether you need a modern business website, an e-commerce platform, a
            web application or a new digital product, I'd be happy to discuss your
            idea. Tell me what you're trying to build, what problem you're solving
            and what you want your users to experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">
            <button onClick={openStartProject} className="btn btn-primary px-8 py-4 text-[1rem]">
              Start a Project
            </button>
          </div>

          <a
            href={EMAIL_URL}
            className="block mt-6 text-ink-soft text-[0.94rem] underline underline-offset-4 hover:text-accent"
          >
            {EMAIL}
          </a>

          <p className="mt-5 text-ink-soft/70 text-[0.85rem]">
            Based in India · IST (UTC+5:30) · Open to working with clients worldwide, usually responds within a few hours
          </p>
        </div>
      </Container>
    </section>
  )
}
