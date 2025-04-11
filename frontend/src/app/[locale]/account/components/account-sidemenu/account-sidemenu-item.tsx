"use client"
import { useLocale } from "next-intl"
import Link from "next/link"
import { useEffect, useState } from "react"

type Props = {
  title: string
  href: string
}

export default function AccountSidemenuItem({ title, href }: Props) {
  const [currentPath, setCurrentPath] = useState("")
  const locale = useLocale()

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const activeClass = currentPath.replace(`/${locale}/`, '/') === href ? "bg-green-300" : "hover:bg-gray-100"

  return (
    <Link href={href} className={`px-3 py-3 border-b-1 border-gray-200 hover:cursor-pointer ${activeClass}`}>
      {title}
    </Link>
  )
}
