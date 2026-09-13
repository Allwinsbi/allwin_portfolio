import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Container from './Container'

export default function Projects() {
  const ref = useReveal()
  const featured = projects.filter((p) => p.featured)
  const secondary = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-16 sm:py-28" ref={ref}>
      <Container>
        <div className="mb-12 reveal">
          <h2 className="font-display text-[1.9rem] sm:text-[2.6rem] font-extrabold text-paper max-w-[18ch] mb-3">
            Selected work
          </h2>
          <p className="text-paper-soft text-[1.02rem] max-w-[48ch]">
            A mix of live client products and projects currently in development.
          </p>
        </div>

        <div className="grid gap-7 mb-7">
          {featured.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.id} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {secondary.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.id} />
          ))}
        </div>
      </Container>
    </section>
  )
}
