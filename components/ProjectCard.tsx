export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4 flex-1">{project.description}</p>
      <ul className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline font-medium"
      >
        View on GitHub
      </a>
    </article>
  );
}
