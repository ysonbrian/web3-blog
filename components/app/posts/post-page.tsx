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
  CodeBlock,
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
  const code_block = data.post.body.children.filter(
    (data: any) => data.type === "code_block",
  )

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
            code_block: () => {
              return (
                <>
                  {code_block.map((code: any, number: any) => (
                    <li key={number} className="list-none">
                      <CodeBlock code={code.value} lang={code.lang} />
                    </li>
                  ))}
                </>
              )
            },
          }}
          content={content}
        />
      </section>
    </article>
  )
}
