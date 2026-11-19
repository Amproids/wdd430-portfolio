function ProjectCardSkeleton() {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse">
      <div className="h-6 w-2/3 bg-gray-200 rounded mb-4" />
      <div className="h-4 w-full bg-gray-200 rounded mb-2" />
      <div className="h-4 w-5/6 bg-gray-200 rounded mb-4" />
      <div className="flex gap-2 mb-4">
        <div className="h-6 w-16 bg-gray-200 rounded" />
        <div className="h-6 w-16 bg-gray-200 rounded" />
        <div className="h-6 w-20 bg-gray-200 rounded" />
      </div>
      <div className="h-4 w-28 bg-gray-200 rounded" />
    </div>
  );
}

export default function ProjectListSkeleton({ count = 2 }: { count?: number }) {
  return (
    <section>
      <div className="h-8 w-32 bg-gray-200 rounded mb-6 animate-pulse" />
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: count }, (_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
