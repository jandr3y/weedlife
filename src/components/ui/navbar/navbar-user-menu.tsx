import Link from "next/link";

export default function NavbarUserMenu() {
  return (
    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
      <Link href="/account" className="block px-4 py-2 text-sm text-gray-700">
        Meus pedidos
      </Link>
      <Link href="/account/settings" className="block px-4 py-2 text-sm text-gray-700">
        Minha conta
      </Link>
      <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700">
        Sair
      </Link>
    </div>
  )
}