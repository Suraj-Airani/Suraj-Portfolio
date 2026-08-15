import { Reveal } from './Reveal';

export const SectionHeader = ({ index, label, title, description }) => (
  <div className="max-w-2xl">
    <Reveal>
      <p
        data-testid={`section-label-${label.toLowerCase().replace(/\s+/g, '-')}`}
        className="flex items-center gap-3 text-caption uppercase tracking-[0.35em] text-fog"
      >
        {index && <span className="text-ember">{index}</span>}
        <span className="h-px w-8 bg-smoke" aria-hidden="true" />
        {label}
      </p>
    </Reveal>
    <Reveal delay={90}>
      <h2 className="mt-5 text-[34px] font-light leading-[0.98] tracking-[-0.02em] text-cloud md:text-heading-lg">
        {title}
      </h2>
    </Reveal>
    {description && (
      <Reveal delay={180}>
        <p className="mt-5 leading-relaxed text-fog">{description}</p>
      </Reveal>
    )}
  </div>
);
