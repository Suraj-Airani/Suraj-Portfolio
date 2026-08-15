import { projects } from '../data/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

export default function Projects() {
  return (
    <div className="mx-auto max-w-page px-6 pt-24 md:pt-32">
      <SectionHeader
        index="01"
        label="Projects"
        title="Built. Deployed. In production."
        description="Every project below is live code — full-stack systems shipped end to end, from API design to CI/CD deployment."
      />

      <div className="mt-14 grid items-stretch gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 120} className="h-full">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
