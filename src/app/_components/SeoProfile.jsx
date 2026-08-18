import { person, featuredProjects } from "../../constants/person";

export function SeoProfile() {
  return (
    <section className="sr-only" aria-label="Nishant Agarwal profile for search engines">
      <h1>Nishant Agarwal</h1>
      <p>{person.headline}</p>
      <p>{person.description}</p>
      <p>
        Official website of Nishant Agarwal: backend engineer, blockchain engineer, Web3 developer,
        Bennett University, India.
      </p>
      <h2>Work</h2>
      <ul>
        <li>Web3 Blockchain Developer Intern — Digital South Trust (Mar 2026 – Jul 2026)</li>
        <li>
          Open source: Hardhat, Hyperlane, FilOzone, Mastra, WalletConnect, viem (merged PRs)
        </li>
      </ul>
      <h2>Projects by Nishant Agarwal</h2>
      <ul>
        {featuredProjects.map((project) => (
          <li key={project.name}>
            <a href={project.github}>{project.name}</a> — {project.description}
          </li>
        ))}
      </ul>
      <h2>Contact Nishant Agarwal</h2>
      <p>
        Email <a href={`mailto:${person.email}`}>{person.email}</a>. GitHub{" "}
        <a href={person.github}>{person.github}</a>. LinkedIn{" "}
        <a href={person.linkedin}>{person.linkedin}</a>. Resume{" "}
        <a href={person.resumePath}>Nishant Agarwal Resume PDF</a>.
      </p>
    </section>
  );
}
