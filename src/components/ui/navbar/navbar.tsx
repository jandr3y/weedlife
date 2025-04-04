"use client"
import Image from "next/image";
import NavbarUserMenu from "./navbar-user-menu";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/store/context/cart";

const MENU_ITEMS = [
  { title: 'Loja', href: '/' },
  { title: 'Sobre', href: '/about' },
  { title: 'Suporte', href: '/support' }
]

const getLinkClass = (currentPath: string, href: string) => currentPath === href 
  ? "rounded-md bg-green-950 px-3 py-2 text-sm font-medium text-white" 
  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"

export default function Navbar() {

  const { cart } = useCart()
  const [displayUserMenu, setDisplayUserMenu] = useState(false)

  const [currentPath, setCurrentPath] = useState("")
  const router = useRouter()
  const pathName = usePathname()

  const cartButtonClass = useMemo(() => {
    return cart.length > 0
      ? "relative bg-green-400 font-medium uppercase text-sm px-6 py-2 rounded-md cursor-pointer"
      : "relative bg-green-100 px-6 py-2 rounded-md opacity-90 cursor-pointer"
  }, [cart.length])

  useEffect(() => {
    setCurrentPath(pathName)
  }, [pathName])
  
  const onCartClick = () => {
    if (cart.length > 0) {
      router.push('/cart')
    }
  }

  return (
    <nav className="bg-black py-3">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-primary-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                src="/images/logo.avif"
                width={65}
                height={65}
                alt="site logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {
                  MENU_ITEMS.map((item, idx) => (
                    <Link href={item.href} key={'x'+idx} className={getLinkClass(currentPath, item.href)}>
                      { item.title }
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className={cartButtonClass} onClick={onCartClick}>
                Carrinho ({ cart.length })
            </button>
            <div className="relative ml-3">
              <div>
                <button type="button" className="relative flex rounded-full bg-gray-800  text-sm focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => setDisplayUserMenu(!displayUserMenu)} onBlur={() => setTimeout(() => setDisplayUserMenu(false), 500)}>
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image src="/images/users/dev.jpg" className="rounded-full" width={35} height={35} alt="User image" />
                </button>
              </div>

              { displayUserMenu && <NavbarUserMenu /> }
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
        </div>
      </div>
    </nav>
  )
}