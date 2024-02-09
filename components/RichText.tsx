import dynamic from "next/dynamic"
import { Tweet } from "react-tweet"
import { TinaMarkdown } from "tinacms/dist/rich-text"

export const TextBox = (props: any) => {
  return (
    <>
      <div className="bg-gray-100 p-8 py-1 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <TinaMarkdown content={props.text} />
      </div>
    </>
  )
}

export const TweetEmbed = (props: any) => {
  return (
    <div className="flex items-center justify-center">
      <Tweet id={`${props.tweetId}`} />
    </div>
  )
}

export const PullQuote = (props: any) => {
  return (
    <>
      <blockquote className="mb-1 border border-gray-200 leading-9 dark:border-gray-700">
        <p className="mb-1 opacity-80">{props.text}</p>
      </blockquote>
      {props.author && (
        <a className="text-[.8em] italic opacity-80" href={props.authorLink}>
          {props.author}
        </a>
      )}
    </>
  )
}

const ReactPlayer = dynamic(() => import("react-player/lazy"))

export const VideoPlayer = (props: any) => {
  return <ReactPlayer width="100%" controls url={props.url} />
}

export const CaptionedImage = (props: any) => {
  return (
    <figure className="flex flex-col items-center justify-center py-6 md:ml-[50px] md:min-w-[calc(100%+100px)] lg:ml-[-100px] lg:min-w-[calc(100%+200px)] xl:ml-[-130px] xl:min-w-[calc(100%+260px)]">
      <img style={{ maxWidth: "100%" }} src={props.imgUrl} alt={props.alt} />
      <figcaption className="text-[.8em]">{props.caption}</figcaption>
    </figure>
  )
}
