import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-smoke bg-void/80 backdrop-blur-md">
      <nav className="mx-auto flex h-[66px] max-w-page items-center justify-between px-6">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-3">
          <span className="bg-ember-cta grid h-8 w-8 place-items-center rounded-lg text-xs font-medium text-white">
            SA
          </span>
          <span className="hidden text-sm tracking-wide text-ash sm:block">Suraj S Airani</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `link-current text-sm transition-colors duration-300 ${isActive ? 'active text-cloud' : 'text-ash hover:text-cloud'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="nav-cta-hire"
            className="btn-ember hidden rounded-lg px-5 py-2.5 text-sm text-white sm:block"
          >
            Hire Me
          </Link>
          <button
            type="button"
            data-testid="nav-mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-cloud lg:hidden"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div data-testid="nav-mobile-menu" className="border-t border-smoke bg-void lg:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block py-3 text-base ${isActive ? 'text-cloud' : 'text-ash'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                data-testid="nav-mobile-cta"
                className="btn-ember mt-3 block rounded-lg px-5 py-3 text-center text-sm text-white"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
