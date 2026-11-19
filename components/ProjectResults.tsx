import ProjectList from "@/components/ProjectList";
import Pagination from "@/components/Pagination";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";

export default async function ProjectResults({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const params = await searchParams;
  const query = params?.query || "";
  const totalPages = await fetchProjectsPages(query);
  // keep the page between 1 and the last page
  const requestedPage = Number(params?.page) || 1;
  const currentPage = Math.min(Math.max(requestedPage, 1), Math.max(totalPages, 1));

  const projects = await fetchFilteredProjects(query, currentPage);

  return (
    <>
      {projects.length > 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <p className="text-gray-700">
          {query ? <>No projects match &quot;{query}&quot;.</> : "No projects found."}
        </p>
      )}
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}
