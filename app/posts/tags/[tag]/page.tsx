import PostListPageComponent from "@/components/app/posts/post-list-page"
import client from "@/tina/__generated__/client"
import React from "react"

export default async function PostPageByTag({
  params,
}: {
  params: { tag: string }
}) {
  const posts = await client.queries.postConnection()

  const result = {
    query: posts.query,
    data: posts.data,
    variables: posts.variables,
    tag: params.tag,
  }

  return <PostListPageComponent {...result} />
}
