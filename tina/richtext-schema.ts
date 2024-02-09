import { Template, tinaTableTemplate } from "tinacms"

export const richTextComponents: Template[] = [
  tinaTableTemplate,
  {
    name: "VideoPlayer",
    label: "VideoPlayer",
    fields: [{ name: "url", label: "Video URL", type: "string" }],
    ui: {
      defaultItem: {
        url: "https://www.youtube.com",
      },
    },
  },
  {
    name: "CaptionedImage",
    label: "Label Image",
    fields: [{ name: "imgUrl", label: "Image URL", type: "image" }],
  },
  {
    name: "TweetEmbed",
    label: "Tweet",
    ui: {
      defaultItem: {
        twwetId: "1519480761749016577",
      },
    },
    fields: [
      {
        name: "tweetId",
        label: "Tweet ID",
        type: "string",
        description:
          "Unique number (about 20-digits) at the end of the Tweet URL",
      },
    ],
  },
  {
    name: "TextBox",
    label: "Text Box",
    fields: [
      {
        name: "text",
        label: "Text",
        type: "rich-text",
      },
    ],
  },
  {
    name: "PullQuote",
    label: "Pull Quote",
    ui: {
      defaultItem: {
        text: "If I have seen further than others, it is by standing upon the shoulders of giants",
        author: "Issac Newton",
      },
    },
    fields: [
      {
        name: "text",
        label: "Text",
        type: "string",
      },
      {
        name: "author",
        label: "Author",
        description: "Optional",
        type: "string",
      },
      {
        name: "authoerLink",
        label: "Authoer Link",
        description: "Optional",
        type: "string",
      },
    ],
  },
]
