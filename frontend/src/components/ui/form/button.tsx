import { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className="text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-35 disabled:cursor-not-alloweds cursor-pointer">
      { props.children }
    </button>       
  )
}