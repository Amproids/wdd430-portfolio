import { Suspense } from "react";
import SchoolProjectList from "@/components/SchoolProjectList";
import ProjectListSkeleton from "@/components/ProjectListSkeleton";

export default function SchoolPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">School Projects</h2>
      <p className="text-gray-700 mb-8">Projects I built for BYU Pathways courses.</p>
      <Suspense fallback={<ProjectListSkeleton count={2} />}>
        <SchoolProjectList />
      </Suspense>
    </div>
  );
}
