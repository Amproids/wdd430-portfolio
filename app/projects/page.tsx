import { Suspense } from "react";
import ProjectsByType from "@/components/ProjectsByType";

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Projects Overview</h2>
      <p className="text-gray-700 mb-8">
        All of my projects. Pick a category above to filter them.
      </p>
      <Suspense fallback={<p className="text-gray-500">Loading projects...</p>}>
        <ProjectsByType />
      </Suspense>
    </div>
  );
}
