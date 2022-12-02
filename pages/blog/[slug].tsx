import { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { PostMeta } from "../../components/Blog/PostCard"
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
  return (
    <div className="min-h-cont py-4">
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.metaKeywords.join(", ")}
      />
      <Container center classes="py-8">
        <article className="relative min-w-96 max-w-4xl bg-slate-100 shadow-xl p-2 mb-6 mx-auto">
          <div className="relative min-w-full min-h-40 h-screen max-h-72 ">
            <Image
              src={post.image.url}
              alt={post.image.title}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <section className="p-6 w-full h-full flex justify-center items-center flex-col">
            <h4 className=" w-full text-lg font-semibold capitalize text-center">
              {post.title}
            </h4>
            <PostMeta post={post} />
            <div className="w-full markdown">
              {documentToReactComponents(
                post.body.json as any,
                customMarkdownOptions(post.body)
              )}
            </div>
          </section>
          <p className="text-center mb-4 font-semibold">Categorized in: </p>
          <div className="flex justify-center items-center gap-2 mb-4">
            {post.category.map((cat: string, i: number) => {
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
