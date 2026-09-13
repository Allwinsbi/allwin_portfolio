import { useState } from 'react'

const ICON_PATHS = {
  vilzoo: (
    <path d="M6 6h15l-1.5 9h-12L6 6Zm0 0-1-3H2m6 3-1.5 9M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  ),
  aeronero: (
    <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z" />
  ),
  thangam: (
    <path d="M4 10 12 4l8 6M5 10v10h14V10M9 20v-6h6v6" />
  ),
  chill: (
    <path d="M12 21s-7-4.35-9.5-8.5C.5 8.8 2.3 5 6 5c2 0 3.4 1.1 4 2.4C10.6 6.1 12 5 14 5c3.7 0 5.5 3.8 3.5 7.5C19 16.65 12 21 12 21Z" />
  ),
  synzoo: (
    <path d="m14.7 6.3-5.4 5.4M5 19l3-1 8.5-8.5a2.1 2.1 0 0 0-3-3L5 15l-1 3 1 1Zm11-13 3 3" />
  ),
}

// Distinct accent color per project, used for its icon badge and category tag.
const ACCENT_CLASSES = {
  vilzoo: { text: 'text-vilzoo', bg: 'bg-vilzoo/10', border: 'border-vilzoo/30', dot: 'before:bg-vilzoo' },
  aeronero: { text: 'text-aeronero', bg: 'bg-aeronero/10', border: 'border-aeronero/30', dot: 'before:bg-aeronero' },
  thangam: { text: 'text-thangam', bg: 'bg-thangam/10', border: 'border-thangam/30', dot: 'before:bg-thangam' },
  chill: { text: 'text-chill', bg: 'bg-chill/10', border: 'border-chill/30', dot: 'before:bg-chill' },
  synzoo: { text: 'text-synzoo', bg: 'bg-synzoo/10', border: 'border-synzoo/30', dot: 'before:bg-synzoo' },
}

function CategoryIcon({ id }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[id]}
    </svg>
  )
}

export default function ProjectCard({ project, index }) {
  const isLive = project.status === 'live'
  const [screenshotFailed, setScreenshotFailed] = useState(false)
  const accent = ACCENT_CLASSES[project.id] ?? ACCENT_CLASSES.vilzoo
  const hasScreenshot = Boolean(project.screenshot) && !screenshotFailed

  return (
    <article
      className={`reveal r${(index % 3) + 1} border border-line bg-paper overflow-hidden grid ${
        project.featured ? 'lg:grid-cols-2' : 'grid-cols-1'
      }`}
    >
      {hasScreenshot ? (
        <div
          className={`relative bg-surface ${
            project.featured ? 'min-h-[260px] lg:min-h-full' : 'min-h-[190px]'
          }`}
        >
          <img
            src={project.screenshot}
            alt={`${project.name} website screenshot`}
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
            onError={() => setScreenshotFailed(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
          <span
            className={`absolute top-4 left-4 text-[0.78rem] font-semibold px-2.5 py-1 rounded-full border inline-flex items-center gap-1.5 backdrop-blur-sm ${
              isLive
                ? 'text-live border-live/40 bg-paper/80'
                : 'text-coming border-line bg-paper/80'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-live' : 'bg-coming'}`} aria-hidden="true" />
            {isLive ? 'Live' : 'Coming Soon'}
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-3 px-6 pt-6 sm:px-7 sm:pt-7">
          <span
            className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 ${accent.text} ${accent.bg} ${accent.border}`}
            aria-hidden="true"
          >
            <CategoryIcon id={project.id} />
          </span>
          <span className="text-[0.78rem] font-semibold px-2.5 py-1 rounded-full border inline-flex items-center gap-1.5 text-coming border-line bg-surface">
            <span className="w-1.5 h-1.5 rounded-full bg-coming" aria-hidden="true" />
            Coming Soon
          </span>
        </div>
      )}

      <div className={`flex flex-col ${project.featured ? 'p-8 sm:p-10' : 'p-6 sm:p-7 pt-4 sm:pt-4'}`}>
        <span className={`text-[0.86rem] mb-2 font-semibold ${accent.text}`}>{project.category}</span>

        <h3
          className={`font-display font-extrabold uppercase mb-3 text-ink ${
            project.featured ? 'text-3xl' : 'text-xl'
          }`}
        >
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
          className={`list-none p-0 mb-6 grid gap-x-4 gap-y-2 ${
            project.featured ? 'grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {project.highlights.slice(0, isLive ? 6 : 5).map((h) => (
            <li
              key={h}
              className={`text-[0.86rem] text-ink-soft pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 ${accent.dot}`}
            >
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
            className="btn btn-secondary self-start mt-auto opacity-[0.6] pointer-events-none"
            aria-disabled="true"
          >
            Coming Soon
          </span>
        )}
      </div>
    </article>
  )
}
