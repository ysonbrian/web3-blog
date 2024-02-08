"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { RxMoon, RxSun } from "react-icons/rx"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }
  return (
    <>
      {/* <Buttoan variant="outline" size="icon" onClick={toggleTheme}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Buttoan> */}
      <button onClick={toggleTheme} className="hidden text-gray-300 dark:flex">
        <RxSun />
      </button>
      <button onClick={toggleTheme} className="flex text-gray-600 dark:hidden">
        <RxMoon />
      </button>
    </>
  )
}
