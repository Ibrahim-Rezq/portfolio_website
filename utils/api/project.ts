const PROJECT_DATA_FIELDS = `
        id
        image
        title
        body
        catagory {
          name
          icon
        }
        liveLink
        githubLink

  `

async function fetchGraphQL(query: string) {
  const { NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN, NEXT_PUBLIC_CONTENTFUL_SPACE } =
    process.env
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${NEXT_PUBLIC_CONTENTFUL_SPACE}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractProject(fetchResponse: any) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0]
}

function extractProjectEntries(fetchResponse: any) {
  return fetchResponse?.data?.blogPostCollection?.items
}

export async function getAllProjectsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
        blogPostCollection(where: { slug_exists: true }, order: date_DESC) {
          items {
            ${PROJECT_DATA_FIELDS}
          }
        }
      }`
  )
  return extractProjectEntries(entries)
}

export async function getAllProjects() {
  const entries = await fetchGraphQL(
    `query {
        blogPostCollection(order: publishedAt_DESC) {
          items {
            ${PROJECT_DATA_FIELDS}
          }
        }
      }
      `
  )
  return extractProjectEntries(entries)
}

export async function getProjectAndMoreProjects(slug: string) {
  const entry = await fetchGraphQL(
    `query {
        blogPostCollection(where: { slug: "${slug}" }, limit: 1) {
          items {
            ${PROJECT_DATA_FIELDS}
          }
        }
      }`
  )
  const entries = await fetchGraphQL(
    `query {
        blogPostCollection(where: { slug_not_in: "${slug}" }, order: date_DESC }, limit: 2) {
          items {
            ${PROJECT_DATA_FIELDS}
          }
        }
      }`
  )
  return {
    blogPost: extractProject(entry),
    moreBlogPosts: extractProjectEntries(entries),
  }
}
