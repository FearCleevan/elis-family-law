import { NextResponse } from "next/server";

export async function GET() {
  const robots = `# http://elisfamilylaw.vercel.app
User-agent: *
Allow: /

# Crawl-delay for polite crawling
Crawl-delay: 10

# Sitemap location
Sitemap: http://elisfamilylaw.vercel.app/sitemap.xml

# Disallow admin and API routes
Disallow: /api/
Disallow: /admin/

# Allow all search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
`;

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}