import Container from './Container'
import { useStartProject } from '../hooks/useStartProject'

const TICKER = ['Full-Stack Development', 'E-commerce', 'Web Applications', 'Mobile Apps', 'API & Backend']

export default function Hero() {
  const openStartProject = useStartProject()
  return (
    <section id="home" className="bg-ink text-paper pt-[100px] sm:pt-[120px] pb-14 sm:pb-16">
      <Container>
        <div className="max-w-[820px]">
          <span className="eyebrow">Full-Stack Developer · India</span>

          <h1 className="section-title text-paper max-w-[16ch]">
            I Build Modern Digital Experiences For Businesses &amp; Ideas.
          </h1>

          <p className="mt-7 text-[1.1rem] text-white/65 max-w-[56ch]">
            I build modern, responsive websites, e-commerce platforms, mobile
            applications and full-stack digital products that turn ideas into
            practical experiences for real users.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button type="button" onClick={openStartProject} className="btn btn-primary">
              Start a Project
            </button>
            <a
              href="#projects"
              className="btn btn-secondary !text-paper !border-white/25 hover:!border-white"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mt-14 text-[0.92rem] text-white/60">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-red text-[1.5rem]">1</span>
              <span>Year professional experience at Accenture</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-14 sm:mt-16 border-y border-white/10 py-4 overflow-hidden">
        <div className="marquee-track">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="flex items-center shrink-0 px-6 font-display text-[1.4rem] sm:text-[1.8rem] uppercase text-white/80">
              {item}
              <span className="w-2 h-2 rounded-full bg-red ml-6" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
