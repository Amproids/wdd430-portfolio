import { connection } from "next/server";
import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function ProjectsByType({
  type,
}: {
  type: "opensource" | "school";
}) {
  await connection();
  const projects = await getProjects(type);
  return <ProjectList projects={projects} />;
}
