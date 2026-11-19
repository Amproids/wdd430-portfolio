import { Suspense } from "react";
import ProjectSearch from "@/components/ProjectSearch";
import ProjectResults from "@/components/ProjectResults";
import ProjectListSkeleton from "@/components/ProjectListSkeleton";

export default function ProjectsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Projects Overview</h2>
      <p className="text-gray-700 mb-6">
        Search all of my projects, or pick a category above.
      </p>
      <Suspense fallback={<div className="h-10 w-full max-w-md mb-8 bg-gray-200 rounded-lg animate-pulse" />}>
        <ProjectSearch />
      </Suspense>
      <Suspense fallback={<ProjectListSkeleton count={2} />}>
        <ProjectResults searchParams={props.searchParams} />
      </Suspense>
    </div>
  );
}
