"use client"
import Button from "@/components/ui/form/button"
import UserContext from "@/store/context/user"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useContext } from "react"

type Props = {
  children: React.ReactNode,
  title: string
}
export default function ProductGridList({ title, children }: Props) {
  const user = useContext(UserContext)
  const gt = useTranslations('Global')

  const lockedStyle = user.data
    ? {}
    : { filter: 'blur(6px) grayscale(1)' }

  return (
    <div className="flex flex-col gap-5 mb-8 relative">
      <h2 className="text-xl font-semibold mb-4">{ title }</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" style={lockedStyle}>
        { children }
      </div>
      {
        !user.data 
          ? (
            <div className="absolute flex flex-col gap-4 shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md text-md">
              { gt('protected_message') }
              <Link href="/auth/login">
                <Button>{ gt('signin') }</Button>
              </Link>
            </div>
          )
          : null
      }
    </div>  
  )
}

export { default as ProductGridListItem } from "./product-grid-list-item"