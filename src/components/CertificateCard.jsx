import { FiArrowUpRight } from 'react-icons/fi';

export function CertificateCard({ certification, index }) {
  const hasLink = !!certification.link;

  return (
    <article
      data-testid={`certification-item-${index}`}
      className="shadow-glow-inset flex h-full flex-col gap-3 rounded-3xl p-7"
    >
      <span className="text-caption uppercase tracking-[0.25em] text-fog">
        {certification.issuer} · {certification.date}
      </span>
      <h3 className="text-body font-light leading-snug text-ash">
        <span className="text-cloud">{certification.title}</span>
      </h3>
      {hasLink ? (
        <a
          href={certification.link}
          target="_blank"
          rel="noreferrer"
          data-testid={`certification-${index}-view-btn`}
          className="mt-auto inline-flex items-center gap-1.5 text-caption font-medium text-ember transition-colors duration-300 hover:text-cloud"
        >
          View Certificate
          <FiArrowUpRight size={14} aria-hidden="true" />
        </a>
      ) : (
        <span
          data-testid={`certification-${index}-view-btn`}
          aria-disabled="true"
          className="mt-auto inline-flex cursor-not-allowed items-center gap-1.5 text-caption font-medium text-fog/40"
        >
          View Certificate
          <FiArrowUpRight size={14} aria-hidden="true" />
        </span>
      )}
    </article>
  );
}
