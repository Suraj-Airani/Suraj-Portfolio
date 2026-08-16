import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import { profile } from '../data/portfolio';

const pageLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

export const Footer = () => (
  <footer className="relative mt-24 overflow-hidden border-t border-smoke/70">
    <div className="footer-glow pointer-events-none absolute inset-0" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-page gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <div className="flex items-center gap-3">
          <span className="bg-ember-cta grid h-8 w-8 place-items-center rounded-lg text-xs font-medium text-white">
            SA
          </span>
          <span className="text-sm text-cloud">{profile.name}</span>
        </div>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
          {profile.tagline} building scalable web applications with the MERN stack, Java, and Spring
          Boot.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            data-testid="footer-social-email"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-[rgba(13,10,25,0.28)] text-ash shadow-frost transition-colors duration-300 hover:text-cloud"
          >
            <FiMail size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            data-testid="footer-social-linkedin"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-[rgba(13,10,25,0.28)] text-ash shadow-frost transition-colors duration-300 hover:text-cloud"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            data-testid="footer-social-github"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-[rgba(13,10,25,0.28)] text-ash shadow-frost transition-colors duration-300 hover:text-cloud"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.instagramHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram profile"
            data-testid="footer-social-instagram"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-[rgba(13,10,25,0.28)] text-ash shadow-frost transition-colors duration-300 hover:text-cloud"
          >
            <FiInstagram size={18} />
          </a>
        </div>
      </div>

      <nav aria-label="Footer pages">
        <h3 className="text-sm font-medium text-cloud">Pages</h3>
        <ul className="mt-5 space-y-3">
          {pageLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                data-testid={`footer-link-${l.label.toLowerCase()}`}
                className="link-current text-sm font-light text-fog transition-colors duration-300 hover:text-ash"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <h3 className="text-sm font-medium text-cloud">Connect</h3>
        <ul className="mt-5 space-y-3 text-sm font-light text-fog">
          <li>
            <a
              href={`mailto:${profile.email}`}
              data-testid="footer-email-link"
              className="link-current transition-colors duration-300 hover:text-ash"
            >
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={profile.phoneHref}
              data-testid="footer-phone-link"
              className="link-current transition-colors duration-300 hover:text-ash"
            >
              {profile.phone}
            </a>
          </li>
          <li className="text-fog/70">{profile.location}</li>
        </ul>
      </div>
    </div>

    <div className="relative border-t border-smoke/50">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-fog/70 sm:flex-row">
        <span data-testid="footer-copyright">© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
      </div>
    </div>
  </footer>
);
