"use client"

import { HomePageQuery } from "@/tina/__generated__/types"
import Link from "next/link"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import moment from "moment"
import Image from "next/image"
export function HomePageComponent(props: {
  data: HomePageQuery
  variables: {}
  query: string
}) {
  const { data } = useTina(props)
  const title = data.page.title
  const content = data.page.body
  console.log("content", data)

  const postList = data.postConnection.edges
  return (
    <section className="prose-xl mx-auto w-full max-w-4xl dark:prose-invert">
      <h1 data-tina-field={tinaField(data.page, "title")}>{title}</h1>
      <Image
        src={"/profile_picture.png"}
        alt="profile_picture"
        width={300}
        height={300}
      />
      <article data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={content} />
      </article>

      {postList && postList.length > 0 && (
        <section>
          <h2 className="mt-8 text-3xl">최근 게시물</h2>
          <ul className="list-[circle]">
            {postList.map((edge: any, index: number) => {
              return (
                <li key={index} className="my-0">
                  <Link href={`/posts/${edge.node._sys.filename}`}>
                    {edge.node.title}
                    <span className="text-sm text-gray-400">
                      {" "}
                      - {moment(edge.node.date).format("MMM DD, YYYY")}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </section>
  )
}
