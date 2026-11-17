import { Suspense } from "react";
import ProjectsByType from "@/components/ProjectsByType";

export default function SchoolPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">School Projects</h2>
      <p className="text-gray-700 mb-8">Projects I built for BYU Pathways courses.</p>
      <Suspense fallback={<p className="text-gray-500">Loading projects...</p>}>
        <ProjectsByType type="school" />
      </Suspense>
    </div>
  );
}
