"use client"
import Image from "next/image";
import Link from "next/link";
import s from "./product-grid.module.css"
import { Product, useCart } from "@/store/context/cart";

export default function ProductGridListItem(props: Product) {

  const cart = useCart()

  return (
    <div>
      <Image src={props.picture} width={500} height={500} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-300 group-hover:opacity-75 xl:aspect-7/8" />
      <Link href={props.url} >
        <h3 className="mt-4 text-sm text-gray-700">{props.name}</h3>
      </Link>
      <p className="mt-1 text-lg font-medium text-gray-900">$ {props.value}</p>
      <button className="bg-green-400 text-sm rounded-full px-3 py-1.5 mt-3 border-1 border-green-700 cursor-pointer hover:bg-green-500"
        onClick={() => cart.add(props)}>
        + Adicionar ao carrinho
      </button>
    </div>
  )
}