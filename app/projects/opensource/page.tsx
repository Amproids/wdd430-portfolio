import { connection } from "next/server";
import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function OpenSourcePage() {
  await connection();
  const projects = await getProjects("opensource");

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Open Source Projects</h2>
      <p className="text-gray-700 mb-8">Projects I&apos;ve shared publicly on GitHub.</p>
      <ProjectList projects={projects} />
    </div>
  );
}
