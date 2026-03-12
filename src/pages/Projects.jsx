import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import getProjects from "../data/projects";

export default function Projects({ t }) {
  const projects = getProjects(t);

  return (
    <section className="section-container py-20">
        <br></br>
        <br></br>
      <Reveal>
        <SectionTitle
          eyebrow={t.projectsPageEyebrow}
          title={t.projectsPageTitle}
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}