import type { MetadataRoute } from "next";

// Pre-launch gate: do not invite search indexing until explicit approval.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
