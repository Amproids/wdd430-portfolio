import ProjectListSkeleton from "@/components/ProjectListSkeleton";

export default function Loading() {
  return (
    <div>
      <div className="h-9 w-72 bg-gray-200 rounded mb-4 animate-pulse" />
      <div className="h-5 w-80 bg-gray-200 rounded mb-8 animate-pulse" />
      <ProjectListSkeleton count={2} />
    </div>
  );
}
