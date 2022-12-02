import { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { PostMeta } from "../../components/PostCard"
import { SEOHead } from "../../components/Global/SEOHead"
import { Badge } from "../../components/UI/Badge"
import { Container } from "../../components/UI/Container"
import Icon from "../../components/UI/Icon"
import {
  getAllBlogPosts,
  getBlogPostAndMoreBlogPosts,
} from "../../utils/api/blogPost"

import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function RichTextAsset({ id, assets }: any) {
  const asset = assets?.find((asset: any) => asset.sys.id === id)

  if (asset?.url) {
    return <Image src={asset.url} layout="fill" alt={asset.description} />
  }

  return null
}

const customMarkdownOptions = (content: any) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
})

type BlogPostProps = {
  post: BlogPost
}

const BlogPost = ({ post }: BlogPostProps) => {
  const {
    image,
    body,
    title,
    category,
    metaTitle,
    metaKeywords,
    metaDescription,
  } = post
  return (
    <div className="min-h-cont py-4">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        keywords={`${metaKeywords.join(", ")}, ${category.join(", ")}`}
      />
      <Container center classes="py-8">
        <article className="relative min-w-96 max-w-4xl bg-slate-100 shadow-2xl p-2 mb-6 mx-auto flex flex-col gap-10">
          <figure className="relative min-w-full min-h-40 h-screen max-h-72 ">
            <Image
              src={image.url}
              alt={image.title}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <figcaption className="mb-[-1.5rem] text-center">hello</figcaption>
          </figure>
          <section className="w-full h-full flex justify-center items-center flex-col px-4">
            <h4 className=" w-full text-lg font-semibold capitalize text-center">
              {title}
            </h4>
            <PostMeta post={post} />
            <div className="w-full markdown">
              {documentToReactComponents(
                body.json as any,
                customMarkdownOptions(body)
              )}
            </div>
          </section>
          <div>
            <p className="text-center mb-4 font-semibold">Categorized in: </p>
            <div className="flex justify-center items-center gap-2 mb-4">
              {category.map((cat: string, i: number) => {
                return (
                  <Link key={cat + i} href="/">
                    <Badge variant={Badge.variant.BLUE}>
                      <Icon />
                      {cat}
                    </Badge>
                  </Link>
                )
              })}
            </div>
          </div>
        </article>
      </Container>
    </div>
  )
}

export default BlogPost

export async function getStaticProps(context: any) {
  const {
    params: { slug },
  } = context
  const data = await getBlogPostAndMoreBlogPosts(slug)
  return {
    props: {
      post: data?.blogPost ?? null,
      morePosts: data?.moreBlogPosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllBlogPosts()
  return {
    paths: allPosts?.map(({ slug }: { slug: string }) => `/blog/${slug}`) ?? [],
    fallback: false,
  }
}
