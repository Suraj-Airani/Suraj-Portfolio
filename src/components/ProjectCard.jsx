import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export const ProjectCard = ({ project, index }) => (
  <article
    data-testid={`project-card-${project.id}`}
    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface transition-transform duration-500 ease-out hover:-translate-y-1.5"
  >
    <div
      className="project-thumb relative h-60 shrink-0 overflow-hidden md:h-auto md:flex-[7]"
      data-variant={index % 2}
    >
      <div className="thumb-grid absolute inset-0" aria-hidden="true" />
      <span className="absolute left-6 top-6 z-10 rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/80">
        {project.year}
      </span>
      <div className="absolute inset-0 z-10 grid place-items-center">
        <span className="thumb-monogram text-[64px] font-light tracking-[-0.05em] text-white/90">
          {project.monogram}
        </span>
      </div>
      <span className="absolute bottom-6 right-6 z-10 max-w-[55%] text-right text-[11px] uppercase leading-relaxed tracking-[0.25em] text-white/60">
        {project.subtitle}
      </span>
    </div>

    <div className="flex flex-1 flex-col gap-4 p-6 md:min-h-[250px] md:flex-[3]">
      <h3 className="text-heading font-light text-cloud">{project.title}</h3>
      <p className="text-body-sm leading-relaxed text-fog">{project.description}</p>
      <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-lg border border-silver/15 bg-shell/50 px-2.5 py-1 text-[11px] text-ash"
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex gap-3 pt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          data-testid={`project-${project.id}-github-btn`}
          className="btn-ghost flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm text-cloud"
        >
          <FaGithub size={16} aria-hidden="true" />
          GitHub
        </a>
        <button
          type="button"
          disabled
          data-testid={`project-${project.id}-demo-btn`}
          className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-smoke bg-shell/40 px-4 py-2.5 text-sm text-fog"
        >
          <FiArrowUpRight size={16} aria-hidden="true" />
          Live Demo · Soon
        </button>
      </div>
    </div>
  </article>
);
