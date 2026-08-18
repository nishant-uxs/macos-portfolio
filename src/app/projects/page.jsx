import { person, featuredProjects } from "../../constants/person";

export const metadata = {
  title: "Projects by Nishant Agarwal",
  description:
    "Projects by Nishant Agarwal: Krydo, BlockForge, CivicSense, and TrustMesh — backend, blockchain, and zero-knowledge systems.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-16">
      <article className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Projects by Nishant Agarwal
        </h1>
        <p className="text-lg text-white/70">{person.headline}</p>
        {featuredProjects.map((project) => (
          <section key={project.name} className="border-t border-white/10 pt-6">
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="mt-2 text-white/70">{project.description}</p>
            <p className="mt-3 flex gap-4 text-sm">
              <a className="text-cyan-300 underline" href={project.url}>
                Live
              </a>
              <a className="text-cyan-300 underline" href={project.github}>
                GitHub
              </a>
            </p>
          </section>
        ))}
        <p>
          <a className="text-cyan-300 underline" href="/about">
            About Nishant Agarwal
          </a>
        </p>
      </article>
    </main>
  );
}
