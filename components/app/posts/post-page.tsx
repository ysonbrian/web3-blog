"use client"

import { TextBox } from "@/components/RichText"
import { PostQuery } from "@/tina/__generated__/types"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import {
  TweetEmbed,
  PullQuote,
  CaptionedImage,
  VideoPlayer,
} from "@/components/RichText"
export function PostPageComponent(props: {
  data: PostQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)
  const title = data.post.title
  const content = data.post.body

  return (
    <article>
      <h1 data-tina-field={tinaField(data.post, "title")}>{title}</h1>
      <section data-tina-field={tinaField(data.post, "body")}>
        <TinaMarkdown
          components={{
            TextBox,
            TweetEmbed,
            PullQuote,
            CaptionedImage,
            VideoPlayer,
          }}
          content={content}
        />
      </section>
    </article>
  )
}
