import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
  token: import.meta.env.SANITY_API_TOKEN,
});

export async function getAllPosts() {
  return sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      tags,
      readingTime
    }
  `);
}

export async function getPostBySlug(slug: string) {
  return sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      tags,
      readingTime
    }
  `,
    { slug },
  );
}

export async function getAllCaseStudies() {
  return sanityClient.fetch(`
    *[_type == "caseStudy"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      client,
      role,
      domain,
      excerpt,
      techStack,
      metrics
    }
  `);
}

export async function getCaseStudyBySlug(slug: string) {
  return sanityClient.fetch(
    `
    *[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      client,
      role,
      domain,
      excerpt,
      body,
      techStack,
      metrics
    }
  `,
    { slug },
  );
}
