const SITE_URL = (process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://nishantx.in").replace(
  /\/+$/,
  "",
);

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/files/resume.pdf`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
