"use client";
import { useCart } from "@/store/context/cart"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useMemo } from "react"

export default function CartButton() {
  const { cart } = useCart()
  const router = useRouter()
  const t = useTranslations('Global')

  const cartButtonClass = useMemo(() => {
    return cart.length > 0
      ? "relative bg-green-400 font-medium uppercase text-sm px-6 py-2 rounded-md cursor-pointer"
      : "relative bg-green-100 px-6 py-2 rounded-md opacity-90 cursor-pointer"
  }, [cart.length])

  const onCartClick = () => {
    if (cart.length > 0) {
      router.push('/cart')
    }
  }

  return (
    <button type="button" className={cartButtonClass} onClick={onCartClick}>
        { t('cart') } ({ cart.length })
    </button>
  )
}