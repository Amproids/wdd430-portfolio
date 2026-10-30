import ProjectCard, { type Project } from "@/components/ProjectCard";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
