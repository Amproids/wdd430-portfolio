import InfoCard from "@/components/InfoCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        My name is Andrew Parry, I&apos;m studying software development at BYU Pathways and I enjoy programming and coming up with new and interesting ideas!
      </p>
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <InfoCard
            title="What I'm Learning"
            description="Next.js, React, and TypeScript in WDD 430."
          />
          <InfoCard
            title="My Goals"
            description="Become a full-stack developer and build useful apps."
          />
        </div>
    </main>
  );
}
