import Link from "next/link"
import ThemeToggle from "@/components/ThemeToggle"
import {
  RxChatBubble,
  RxCode,
  RxDividerVertical,
  RxHome,
  RxPerson,
} from "react-icons/rx"
import { RiGithubFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri"

export default function Header() {
  return (
    <header className="mb-20 mt-16 flex content-center items-center justify-between font-sans text-base">
      <div className="flex items-center gap-4">
        <Link href="/" className="max-sm:hidden">
          Home
        </Link>
        <Link href="/" className="sm:hidden">
          <RxHome />
        </Link>
        <Link href="/posts" className="max-sm:hidden">
          Blog
        </Link>
        <Link href="/posts" className="sm:hidden">
          <RxChatBubble />
        </Link>
        {/* <Link href="/about" className="max-sm:hidden">
          About
        </Link>
        <Link href="/about" className="sm:hidden">
          <RxPerson />
        </Link> */}
        <Link href="/projects" className="max-sm:hidden">
          Projects
        </Link>
        <Link href="/projects" className="sm:hidden">
          <RxCode />
        </Link>
      </div>
      <div className="flex justify-between gap-4">
        <Link href="https://youtube.com">
          <RiYoutubeFill />
        </Link>
        <Link href="https://x.com">
          <RiTwitterFill />
        </Link>
        <Link href="https://github.com/ysonbrian">
          <RiGithubFill />
        </Link>
        <RxDividerVertical className="text-gray-300 dark:text-gray-600" />
        <ThemeToggle />
      </div>
    </header>
  )
}
