import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto px-4 py-12">
      <nav className="flex flex-wrap gap-4 mb-8 border-b border-gray-200 pb-4">
        <Link href="/projects" className="text-blue-600 hover:underline">
          Overview
        </Link>
        <Link href="/projects/opensource" className="text-blue-600 hover:underline">
          Open Source
        </Link>
        <Link href="/projects/school" className="text-blue-600 hover:underline">
          School
        </Link>
        <Link href="/projects/settings" className="text-blue-600 hover:underline">
          Settings
        </Link>
      </nav>
      {children}
    </main>
  );
}
