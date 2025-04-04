import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}
export default function TextInput({ label, ...props }: Props) {
  return (
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">{ label }</label>
      <input {...props} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" />
    </div>
  )
}