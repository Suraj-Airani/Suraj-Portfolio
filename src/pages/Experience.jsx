import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { experience } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

export default function Experience() {
  return (
    <div className="mx-auto max-w-page px-6 pt-24 md:pt-32">
      <SectionHeader
        index="01"
        label="Experience"
        title="Where I've worked."
        description="Hands-on, production-minded engineering — inside collaborative, Agile teams."
      />

      <div className="mt-14 space-y-8">
        {experience.map((job, i) => (
          <Reveal key={job.id} delay={i * 100}>
            <article
              data-testid={`experience-item-${job.id}`}
              className="relative overflow-hidden rounded-3xl bg-panel p-10 md:p-14"
            >
              <div
                className="bg-electric-current pointer-events-none absolute left-0 top-0 h-full w-px opacity-60"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="text-caption uppercase tracking-[0.35em] text-fog">
                    <span className="text-ember">01</span> — Current Role
                  </p>
                  <h2 className="mt-5 text-[28px] font-light leading-tight tracking-[-0.02em] text-cloud md:text-heading-lg">
                    {job.role}
                  </h2>
                  <p className="mt-3 text-subheading text-ash">{job.company}</p>
                </div>
                <span className="rounded-full border border-silver/15 bg-shell/50 px-4 py-1.5 text-caption text-ash">
                  {job.period}
                </span>
              </div>

              <ul className="mt-10 max-w-2xl space-y-5 border-t border-white/10 pt-10">
                {job.points.map((point, j) => (
                  <li key={j} className="flex gap-4 text-body leading-relaxed text-fog">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="shadow-glow-inset mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl p-10 md:flex-row md:items-center md:p-14">
          <div>
            <p className="text-caption uppercase tracking-[0.35em] text-fog">Next chapter</p>
            <p className="mt-4 text-heading font-light text-cloud">
              Open to full-time software engineering roles.
            </p>
          </div>
          <Link
            to="/contact"
            data-testid="experience-cta-contact"
            className="btn-ember inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm text-white"
          >
            Start a conversation
            <FiArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
