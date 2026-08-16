import { FiMail, FiInstagram, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

const channels = [
  {
    id: 'linkedin',
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'Suraj S Airani',
    href: profile.linkedin,
    external: true,
  },
  {
    id: 'github',
    icon: FiGithub,
    label: 'GitHub',
    value: 'Suraj-Airani',
    href: profile.github,
    external: true,
  },
  {
    id: 'instagram',
    icon: FiInstagram,
    label: 'Instagram',
    value: 'Suraj_Airani',
    href: profile.instagramHref,
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-page px-6 pt-24 md:pt-32">
      <SectionHeader
        index="01"
        label="Contact"
        title="Let's build something worth shipping."
        description="Available immediately for full-time roles. The fastest way to reach me is email — I read everything."
      />

      <Reveal delay={220}>
        <a
          href={`mailto:${profile.email}`}
          data-testid="contact-email-cta"
          className="btn-ember mt-12 inline-flex items-center gap-3 rounded-lg px-8 py-4 text-base text-white"
        >
          <FiMail size={18} aria-hidden="true" />
          {profile.email}
        </a>
      </Reveal>

      <div className="mt-16 grid gap-5 sm:grid-cols-3">
        {channels.map((c, i) => (
          <Reveal key={c.id} delay={i * 100} className="h-full">
            <a
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              data-testid={`contact-channel-${c.id}`}
              className="shadow-glow-inset group flex h-full flex-col gap-6 rounded-3xl p-8 transition-transform duration-500 ease-out hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-shell/60 text-ash transition-colors duration-300 group-hover:text-cloud">
                <c.icon size={19} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-caption uppercase tracking-[0.3em] text-fog">
                  {c.label}
                </span>
                <span className="mt-2 flex items-center gap-2 text-body-sm text-cloud">
                  {c.value}
                  <FiArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="text-fog transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cloud"
                  />
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={280}>
        <p data-testid="contact-location" className="mt-16 text-body-sm text-fog">
          Open to relocate and remote work.
        </p>
      </Reveal>
    </div>
  );
}
