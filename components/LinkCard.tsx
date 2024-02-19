import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function LinkCard({
  link,
  title,
  description,
  img,
}: {
  link: string
  title: string
  description: string
  img?: any
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`background-image: group relative h-fit min-h-[320px] max-w-[500px] overflow-hidden rounded-xl border border-zinc-200 hover:border-zinc-800/50 hover:bg-zinc-400/10 dark:border-zinc-600 dark:hover:border-zinc-400/50 dark:hover:bg-zinc-800/10 md:gap-8`}
    >
      <img className="my-0 max-w-full" src={img} alt={title} />
      <article className="px-4 md:px-8">
        <h2 className="z-20 text-lg font-medium text-zinc-800 group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white">
          {title}
        </h2>
        <p
          className="z-20 mt-4 text-sm text-zinc-600 group-hover:text-zinc-800 
        dark:text-zinc-400 dark:group-hover:text-zinc-200"
        >
          {description}
        </p>
      </article>
    </Link>
  )
}
