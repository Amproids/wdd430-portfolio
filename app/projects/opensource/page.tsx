import { Suspense } from "react";
import ProjectsByType from "@/components/ProjectsByType";

export default function OpenSourcePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Open Source Projects</h2>
      <p className="text-gray-700 mb-8">Projects I&apos;ve shared publicly on GitHub.</p>
      <Suspense fallback={<p className="text-gray-500">Loading projects...</p>}>
        <ProjectsByType type="opensource" />
      </Suspense>
    </div>
  );
}
