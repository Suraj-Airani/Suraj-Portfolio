import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { profile, projects, marqueeItems, certifications } from '../data/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

const chapters = [
  { to: '/about', index: '01', label: 'About', text: 'Bio, education & certifications' },
  { to: '/skills', index: '02', label: 'Skills', text: 'Full stack, databases, concepts & tools' },
  { to: '/experience', index: '03', label: 'Experience', text: 'Software Development Intern — Tap Academy' },
  { to: '/contact', index: '04', label: 'Contact', text: 'Start a conversation' },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-page gap-16 px-6 pb-20 pt-24 md:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Reveal>
              <p
                data-testid="hero-eyebrow"
                className="flex flex-wrap items-center gap-3 text-caption uppercase tracking-[0.35em] text-fog"
              >
                <span className="h-px w-10 bg-ember" aria-hidden="true" />
                {profile.tagline} — {profile.location}
              </p>
            </Reveal>

            <h1
              data-testid="hero-heading"
              className="mt-8 text-[56px] font-light leading-[0.88] tracking-[-0.02em] text-cloud sm:text-[80px] lg:text-[104px]"
            >
              <span className="hero-line">
                <span className="hero-line-inner animate-line-up" style={{ animationDelay: '0.15s' }}>
                  Suraj S
                </span>
              </span>
              <span className="hero-line">
                <span
                  className="hero-line-inner hero-stroke animate-line-up"
                  style={{ animationDelay: '0.32s' }}
                >
                  Airani
                </span>
              </span>
            </h1>

            <Reveal delay={450}>
              <p data-testid="hero-intro" className="mt-8 max-w-md leading-relaxed text-fog">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={560}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  data-testid="hero-cta-projects"
                  className="btn-ember inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm text-white"
                >
                  View Projects
                  <FiArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  data-testid="hero-cta-contact"
                  className="btn-ghost inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm text-cloud"
                >
                  Get in Touch
                </Link>
              </div>
            </Reveal>

            <Reveal delay={660}>
              <div
                data-testid="hero-availability"
                className="mt-12 inline-flex items-center gap-3 rounded-full px-4 py-2 shadow-glow-inset"
              >
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-ember" />
                <span className="text-body-sm text-ash">{profile.availability}</span>
              </div>
            </Reveal>
          </div>

          <div
            className="relative hidden lg:block"
            style={{ transform: `translateY(${scrollY * 0.12}px)` }}
            aria-hidden="true"
          >
            <div className="shadow-glow-inset relative rounded-3xl bg-panel/60 p-10">
              <div
                className="animate-spin-slow absolute -right-10 -top-10 h-40 w-40 rounded-full border border-dashed border-ember/30"
              />
              <p className="text-caption uppercase tracking-[0.35em] text-fog">Portfolio — 2026</p>
              <p className="mt-6 text-[64px] font-light leading-none tracking-[-0.04em] text-cloud">
                JavaScript
                <span className="block text-fog">+ Java</span>
              </p>
              <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
                <div className="flex items-baseline justify-between">
                  <span className="text-[40px] font-light text-cloud">{projects.length}</span>
                  <span className="text-body-sm text-fog">Production projects shipped</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[40px] font-light text-cloud">8.00</span>
                  <span className="text-body-sm text-fog">B.E. CGPA — VTU</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[40px] font-light text-cloud">{certifications.length}</span>
                  <span className="text-body-sm text-fog">Certifications earned</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Marquee items={marqueeItems} />
      </section>

      <section className="mx-auto max-w-page px-6 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeader
            index="01"
            label="Selected Work"
            title="Projects that shipped to production."
            description="Two full-stack systems — designed, built and deployed end to end."
          />
          <Reveal delay={220}>
            <Link
              to="/projects"
              data-testid="home-view-all-projects"
              className="link-current inline-flex items-center gap-2 text-sm text-ash transition-colors duration-300 hover:text-cloud"
            >
              View all projects
              <FiArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-2">
          {projects.length > 0 ? (
            projects.slice(0, 2).map((project, i) => (
              <Reveal key={project.id} delay={i * 120} className="h-full">
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center rounded-2xl border border-white/10 bg-panel/60 p-8 text-fog">
              No projects available
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-page px-6 pb-8">
        <SectionHeader
          index="02"
          label="Chapters"
          title="The rest of the story."
        />
        <div className="mt-14 border-t border-smoke/60">
          {chapters.map((c, i) => (
            <Reveal key={c.to} delay={i * 80}>
              <Link
                to={c.to}
                data-testid={`chapter-link-${c.label.toLowerCase()}`}
                className="chapter-row group flex items-center justify-between gap-6 border-b border-smoke/60 py-8"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-caption tracking-[0.3em] text-ember">{c.index}</span>
                  <div>
                    <span className="text-heading-sm font-light text-cloud md:text-heading">
                      {c.label}
                    </span>
                    <p className="mt-1 text-body-sm text-fog">{c.text}</p>
                  </div>
                </div>
                <FiArrowUpRight
                  size={22}
                  aria-hidden="true"
                  className="shrink-0 text-fog transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cloud"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
