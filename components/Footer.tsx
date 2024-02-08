import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <div className="py-10 text-center text-sm">
      <hr />
      <p>
        The{" "}
        <Link
          href="https://ysonbrian.github.io"
          target="_blank"
          className="underline-offset-2 hover:text-emerald-500 hover:underline"
        >
          ysonbrian{" "}
        </Link>
        Blog
      </p>
    </div>
  )
}
