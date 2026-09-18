const ICONS = {
  heart: (
    <path d="M12 21s-7.5-4.6-10-9.1C.5 8.7 2 5 5.5 5c2 0 3.3 1.1 4 2.1.7-1 2-2.1 4-2.1 3.5 0 5 3.7 3.5 6.9C19.5 16.4 12 21 12 21z" />
  ),
  services: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a5 5 0 0 1-6.6 6.6L6.5 20.5a2 2 0 0 1-2.8-2.8l7.7-7.7a5 5 0 0 1 6.6-6.6l-3.1 3.1z" />
  ),
}

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.name} project screenshot`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
    )
  }

  if (project.icon && ICONS[project.icon]) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-16 h-16 text-red/70">
          {ICONS[project.icon]}
        </svg>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-display text-4xl text-paper/[0.16] tracking-wide">
        {project.name.slice(0, 2)}
      </span>
    </div>
  )
}

export default function ProjectCard({ project, index }) {
  const isLive = project.status === 'live'

  return (
    <article
      className={`reveal r${(index % 3) + 1} border border-line bg-paper overflow-hidden grid ${
        project.featured ? 'lg:grid-cols-[1.15fr_1fr]' : 'grid-cols-1'
      }`}
    >
      <div
        className={`relative w-full overflow-hidden bg-gradient-to-br from-[#171E27] to-[#2A3644] ${
          !project.imageAspect ? (project.featured ? 'aspect-[16/10]' : 'aspect-[16/11]') : ''
        } ${!isLive ? 'opacity-[0.9]' : ''}`}
        style={project.imageAspect ? { aspectRatio: project.imageAspect } : undefined}
        aria-hidden="true"
      >
        <ProjectVisual project={project} />
      </div>

      <div className={`flex flex-col ${project.featured ? 'p-9 sm:p-10' : 'p-6 sm:p-7'}`}>
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <span className="text-[0.86rem] text-ink-soft">{project.category}</span>
          <span
            className={`text-[0.78rem] font-semibold px-2.5 py-1 rounded-full border inline-flex items-center gap-1.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full ${
              isLive
                ? 'text-live border-live/40 bg-live/[0.08] before:bg-live'
                : 'text-coming border-line bg-paper-dim before:bg-coming'
            }`}
          >
            {isLive ? 'Live' : 'Coming Soon'}
          </span>
        </div>

        <h3 className={`font-bold mb-3 ${project.featured ? 'text-2xl' : 'text-xl'}`}>
          {project.name}
        </h3>

        <p
          className={`text-ink-soft mb-5 ${
            project.featured ? 'text-[0.96rem]' : 'text-[0.9rem] line-clamp-3'
          }`}
        >
          {project.description}
        </p>

        <ul
          className={`list-none p-0 mb-5 grid gap-x-4 gap-y-2 ${
            project.featured ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {project.highlights.slice(0, isLive ? 6 : 5).map((h) => (
            <li key={h} className="text-[0.86rem] text-ink-soft pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-red">
              {h}
            </li>
          ))}
        </ul>

        {isLive ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary self-start mt-auto"
          >
            View Live Project
          </a>
        ) : (
          <span
            className="btn btn-secondary self-start mt-auto opacity-[0.55] pointer-events-none"
            aria-disabled="true"
          >
            Coming Soon
          </span>
        )}
      </div>
    </article>
  )
}
