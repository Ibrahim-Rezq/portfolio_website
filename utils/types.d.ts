type Maybe<T> = T | null
type MaybeAll<T> = Maybe<T> | undefined
type JsonB<T = unknown> = Record<string, T>
type EmptyObject = Record<string, never>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ErrorObject = any

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
