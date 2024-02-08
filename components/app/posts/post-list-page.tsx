"use client"

import { PostConnectionQuery } from "@/tina/__generated__/types"
import Link from "next/link"
import { useTina } from "tinacms/dist/react"

export default function PostListPageComponent(props: {
  data: PostConnectionQuery
  variables: {}
  query: string
}) {
  const { data } = useTina(props)
  const postList = data.postConnection.edges
  return (
    <>
      <h1>Blog</h1>
      <div>
        {postList?.map((post: any) => (
          <div key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`}>
              {post.node.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
