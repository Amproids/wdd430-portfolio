import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Fitness Tracker (WDD 330 Final Project)",
    description:
      "A fitness app and exercise tracker with a separate client and server, built as my final project for WDD 330.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Amproids/wdd330-final-project",
  },
  {
    title: "Alternative Voting Demo",
    description:
      "A web page that simulates hypothetical voting scenarios and compares alternative voting methods.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Amproids/alternative-voting-demo",
  },
  {
    title: "CSE 341 Project 2 API",
    description:
      "A REST API built with Express and MongoDB, with GitHub and Google OAuth login, input validation, Jest tests, and Swagger docs.",
    technologies: ["Node.js", "Express", "MongoDB", "Passport", "Swagger"],
    link: "https://github.com/Amproids/cse341-project-2",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are
          some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
