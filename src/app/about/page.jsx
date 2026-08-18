import { person, featuredProjects } from "../../constants/person";

export const metadata = {
  title: "About Nishant Agarwal",
  description: person.headline,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-16">
      <article className="mx-auto max-w-3xl space-y-6">
        <p className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
          nishantx.in
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Nishant Agarwal</h1>
        <p className="text-xl text-white/70">{person.jobTitle}</p>
        <p className="text-lg leading-relaxed text-white/80">{person.description}</p>
        <section>
          <h2 className="mt-10 text-2xl font-semibold">Education</h2>
          <p className="mt-3 text-white/70">
            {person.degree}, {person.university}, {person.location}
          </p>
        </section>
        <section>
          <h2 className="mt-10 text-2xl font-semibold">Selected work</h2>
          <ul className="mt-4 space-y-3 text-white/70">
            {featuredProjects.map((project) => (
              <li key={project.name}>
                <a className="text-cyan-300 underline" href={project.github}>
                  {project.name}
                </a>
                {" — "}
                {project.description}
              </li>
            ))}
          </ul>
        </section>
        <p className="pt-8">
          <a className="text-cyan-300 underline" href="/">
            Open the interactive portfolio
          </a>
        </p>
      </article>
    </main>
  );
}
