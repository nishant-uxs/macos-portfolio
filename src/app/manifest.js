import { person } from "../constants/person";

export default function manifest() {
  return {
    name: `${person.name} | ${person.jobTitle}`,
    short_name: person.name,
    description: person.headline,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#000000",
    theme_color: "#000000",
    categories: ["portfolio", "developer", "productivity"],
    icons: [
      {
        src: "/macbook.png",
        sizes: "100x100",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.png",
        sizes: "444x592",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
