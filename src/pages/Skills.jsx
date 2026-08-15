import { skillGroups, marqueeItems } from '../data/portfolio';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

const chapterNumber = (i) => String(i + 1).padStart(2, '0');

export default function Skills() {
  return (
    <div>
      <div className="mx-auto max-w-page px-6 pt-24 md:pt-32">
        <SectionHeader
          index="01"
          label="Skills"
          title="Tools of the trade."
          description="A stack built around shipping — from schema design to CI/CD deployment."
        />
      </div>

      <div className="mt-16">
        <Marquee items={marqueeItems} />
      </div>

      <div className="mx-auto grid max-w-page gap-8 px-6 pt-20 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={i * 100} className="h-full">
            <article
              data-testid={`skill-group-${group.id}`}
              className="flex h-full flex-col rounded-2xl bg-surface p-10"
            >
              <p className="text-caption uppercase tracking-[0.35em] text-fog">
                <span className="text-ember">{chapterNumber(i)}</span> — {group.label}
              </p>
              <ul className="mt-8 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-silver/20 bg-[rgba(163,163,163,0.12)] px-5 py-2 text-body-sm text-cloud transition-colors duration-300 hover:border-silver/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
