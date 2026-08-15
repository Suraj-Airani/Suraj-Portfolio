import { FiMapPin, FiMail } from 'react-icons/fi';
import { profile, education, certifications } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

export default function About() {
  return (
    <div className="mx-auto max-w-page px-6 pt-24 md:pt-32">
      <SectionHeader
        index="01"
        label="About"
        title="The person behind the code."
        description={profile.bio}
      />

      <section className="mt-20">
        <Reveal>
          <h2 className="flex items-baseline gap-4 text-heading font-light text-cloud">
            <span className="text-caption tracking-[0.3em] text-ember">02</span>
            Education
          </h2>
        </Reveal>
        <div className="mt-10 space-y-6">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <article
                data-testid={`education-item-${i}`}
                className="grid gap-4 rounded-2xl bg-surface p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10"
              >
                <div>
                  <h3 className="text-heading-sm font-light text-cloud md:text-heading">{e.title}</h3>
                  <p className="mt-2 text-body-sm text-fog">{e.school}</p>
                </div>
                <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
                  <span className="rounded-full border border-silver/15 bg-shell/50 px-3 py-1 text-caption text-ash">
                    {e.period}
                  </span>
                  <span className="rounded-full bg-cloud px-3 py-1 text-caption font-medium text-steel">
                    {e.score}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <Reveal>
          <h2 className="flex items-baseline gap-4 text-heading font-light text-cloud">
            <span className="text-caption tracking-[0.3em] text-ember">03</span>
            Certifications
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="h-full">
              <article
                data-testid={`certification-item-${i}`}
                className="shadow-glow-inset flex h-full flex-col gap-3 rounded-3xl p-7"
              >
                <span className="text-caption uppercase tracking-[0.25em] text-fog">
                  {c.issuer} · {c.date}
                </span>
                <h3 className="text-body font-light leading-snug text-ash">
                  <span className="text-cloud">{c.title}</span>
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <Reveal>
          <div className="atmo-ember flex flex-col gap-6 rounded-3xl bg-panel p-10 md:flex-row md:items-center md:justify-between md:p-14">
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-body-sm text-fog">
                <FiMapPin size={15} aria-hidden="true" className="text-ember" />
                {profile.location}
              </p>
              <p className="text-heading font-light text-cloud">{profile.availability}.</p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              data-testid="about-cta-email"
              className="btn-ember inline-flex items-center gap-2 self-start rounded-lg px-6 py-3 text-sm text-white md:self-auto"
            >
              <FiMail size={16} aria-hidden="true" />
              {profile.email}
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
