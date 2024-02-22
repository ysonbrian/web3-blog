"use client"

import { PostConnectionQuery } from "@/tina/__generated__/types"
import moment from "moment"
import Link from "next/link"
import { useTina } from "tinacms/dist/react"

export default function PostListPageComponent(props: {
  data: PostConnectionQuery
  variables: {}
  query: string
  tag?: string
}) {
  const { data } = useTina(props)
  const postList = props.tag
    ? data.postConnection.edges?.filter((post: any) => {
        if (post.node.tags && post.node.tags.includes(props.tag)) {
          return post
        }
      })
    : data.postConnection.edges

  postList?.sort((a: any, b: any) => {
    const dateA: any = new Date(a.node.date)
    const dateB: any = new Date(b.node.date)
    return dateB - dateA
  })

  const tags = data?.postConnection.edges?.reduce((acc: any, post: any) => {
    if (post.node.tags) {
      post.node.tags.forEach((tag: any) => {
        if (acc[tag]) {
          acc[tag]++
        } else {
          acc[tag] = 1
        }
      })
    }
    return acc
  }, {})

  return (
    <>
      <h3>Blog</h3>
      <p className="text-lg text-zinc-500">
        새로운 것을 배웠거나 공유하고 싶은 기술들을 정리합니다.
      </p>
      <div className="flex md:space-x-12">
        <div className=" hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-muted pt-5 font-sans md:flex">
          <div className="px-6 py-4">
            <a
              className={`uppercase ${props.tag === undefined ? "pointer-events-none text-emerald-600 dark:text-emerald-400" : "text-zinc-700 hover:text-emerald-500 dark:text-zinc-300 dark:hover:text-emerald-500"}`}
              href="/posts"
            >
              전체 게시글
            </a>
            <ul>
              {Object.keys(tags)
                .map((tag: any) => (
                  <li className="my-3 " key={tag}>
                    <Link
                      ariral-label={`View Posts tagged ${tag}`}
                      href={`/posts/tags/${tag}`}
                      className={`px-3 py-2 text-sm font-medium uppercase ${props.tag === tag ? "pointer-events-none text-emerald-600 dark:text-emerald-400" : "text-primary hover:text-emerald-500 dark:text-zinc-300 dark:hover:text-emerald-500"}`}
                    >
                      {tag} ({tags[tag]})
                    </Link>
                  </li>
                ))
                .sort((a: any, b: any) => a.key.localeCompare(b.key))}
            </ul>
          </div>
        </div>
        <div>
          <ul className="m-0 pl-0">
            {postList?.map((post: any) => (
              <li key={post.node.id} className="mt-0 pb-2">
                <div className="flex">
                  <span className="text-sm text-gray-400">
                    {moment(post.node.date).format("MMM DD, YYYY")}
                  </span>
                </div>
                <Link href={`/posts/${post.node._sys.filename}`}>
                  {post.node.title}
                </Link>
                {post.node.tags && (
                  <div className="flex flex-wrap gap-2 font-sans text-sm uppercase text-emerald-600 dark:text-emerald-400">
                    {post.node.tags.map((tag: any) => (
                      <Link
                        href={`/posts/tags/${tag}`}
                        className="underline-offset-2 hover:underline"
                        key={tag}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
