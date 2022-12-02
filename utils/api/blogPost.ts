const POST_DATA_FIELDS = `
        id
        title
        slug
        image {
          url
          title
          width
          height
        }
        publishedAt
        category
        summary
        metaTitle
        metaKeywords
        metaDescription
        body {
          json
        }
   
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

function extractPost(fetchResponse: any) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0]
}

function extractPostEntries(fetchResponse: any) {
  return fetchResponse?.data?.blogPostCollection?.items
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
        blogPostCollection(where: { slug_exists: true }, order: date_DESC) {
          items {
            ${POST_DATA_FIELDS}
          }
        }
      }`
  )
  return extractPostEntries(entries)
}

export async function getAllBlogPosts() {
  const entries = await fetchGraphQL(
    `query {
        blogPostCollection(order: publishedAt_DESC) {
          items {
            ${POST_DATA_FIELDS}
          }
        }
      }
      `
  )
  return extractPostEntries(entries)
}

export async function getBlogPostAndMoreBlogPosts(slug: string) {
  const entry = await fetchGraphQL(
    `query {
        blogPostCollection(where: { slug: "${slug}" }, limit: 1) {
          items {
            ${POST_DATA_FIELDS}
          }
        }
      }`
  )
  const entries = await fetchGraphQL(
    `query {
        blogPostCollection(where: { slug_not_in: "${slug}" }, order: date_DESC }, limit: 2) {
          items {
            ${POST_DATA_FIELDS}
          }
        }
      }`
  )
  return {
    blogPost: extractPost(entry),
    moreBlogPosts: extractPostEntries(entries),
  }
}
