import Container from './Container'
import { useStartProject } from '../hooks/useStartProject'

export default function Hero() {
  const openStartProject = useStartProject()
  return (
    <section
      id="home"
      className="relative pt-[150px] sm:pt-[190px] pb-20 sm:pb-28 overflow-hidden bg-hero"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero to-hero-glow" />
        <div className="absolute -top-32 -right-24 w-[560px] h-[560px] rounded-full bg-accent/30 blur-[130px]" />
        <div className="absolute bottom-[-160px] left-[-100px] w-[420px] h-[420px] rounded-full bg-cta/20 blur-[130px]" />
        <img
          src="https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.12] mix-blend-overlay"
          loading="eager"
        />
      </div>

      <Container>
        <div className="max-w-[820px]">
          <p className="text-[0.9rem] text-cta font-semibold mb-5 tracking-wide uppercase">
            Full-Stack Developer · India
          </p>

          <h1 className="font-display font-extrabold uppercase leading-[0.98] text-[2.6rem] sm:text-[4rem] lg:text-[5rem] max-w-[16ch] text-paper">
            Allwin S
          </h1>
          <p className="mt-4 text-[1.3rem] sm:text-[1.6rem] font-display font-medium text-paper/80">
            I build modern digital experiences for businesses, startups &amp; ideas.
          </p>

          <p className="mt-7 text-[1.1rem] text-paper/70 max-w-[56ch]">
            Modern, responsive websites, e-commerce platforms, mobile
            applications and full-stack digital products that turn ideas into
            practical experiences for real users.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button onClick={openStartProject} className="btn btn-primary-inverted">
              Start a Project
            </button>
            <a
              href="#projects"
              className="btn btn-secondary-inverted"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mt-16 text-[0.92rem] text-paper/70">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[1.4rem] font-bold text-paper">1</span>
              <span>Year professional experience at Accenture</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-paper/20" />
            <div>Full-Stack Development</div>
            <div className="hidden sm:block w-px h-4 bg-paper/20" />
            <div>Web · Mobile · E-commerce</div>
          </div>
        </div>
      </Container>
    </section>
  )
}
