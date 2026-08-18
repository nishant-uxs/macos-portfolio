const SITE_URL = (process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://nishantx.in").replace(
  /\/+$/,
  "",
);

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
