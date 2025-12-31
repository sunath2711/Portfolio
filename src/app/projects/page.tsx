import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "End-to-End CI/CD Pipeline",
    description:
      "Designed and implemented a complete CI/CD pipeline with automated testing, quality gates, and zero-downtime deployment.",
    tags: ["CI/CD", "Jenkins", "Docker", "Kubernetes"],
  },
  {
    title: "Kubernetes Deployment Platform",
    description:
      "Built a containerized microservices setup with scalable deployments, health checks, and rollout strategies.",
    tags: ["Kubernetes", "Docker", "Cloud Native"],
  },
  {
    title: "AI-Powered Assistant (WIP)",
    description:
      "Exploring intelligent assistants that can understand context and provide meaningful, human-like interactions.",
    tags: ["AI", "LLMs", "Next.js"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Selected <span className="text-purple-400">Projects</span>
        </h1>

        <p className="mt-4 text-neutral-400 max-w-2xl">
          A curated set of work that reflects my focus on engineering quality,
          scalability, and thoughtful product design.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
