import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}
export default function Card({ children, className }: Props) {
  return (
    <div className={"border-1 border-gray-200 p-4 rounded-md " + className}>
      { children }
    </div>
  )
}