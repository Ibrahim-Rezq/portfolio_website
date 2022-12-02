type JsonB<T = unknown> = Record<string, T>

type BlogPost = {
  id: number | string
  image: {
    url: string
    title: string
    width: string
    height: string
  }
  summary: string
  body: JsonB
  title: string
  category: string[]
  slug: string
  publishedAt: string
  metaTitle: string
  metaKeywords: string[]
  metaDescription: string
}
