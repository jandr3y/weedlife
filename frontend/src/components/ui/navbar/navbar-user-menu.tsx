"use client";
import UserContext from "@/store/context/user";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useContext, useState } from "react";

export default function NavbarUserMenu() {
  const gt = useTranslations('Global')
  const user = useContext(UserContext)
  const [displayUserMenu, setDisplayUserMenu] = useState(false)
  return (
    <div>
      <div>
        <button type="button" className="relative cursor-pointer flex rounded-full bg-gray-800  text-sm focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => setDisplayUserMenu(!displayUserMenu)} onBlur={() => setTimeout(() => setDisplayUserMenu(false), 500)}>
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <div className="w-10 h-10 rounded-full bg-green-100 text-xl flex items-center justify-center ">
            { user.data?.name.charAt(0).toUpperCase() }
          </div>
        </button>
      </div>
      {
        displayUserMenu && (
          <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
            <Link href="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
              { gt('my_order') }
            </Link>
            <Link href="/account/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
              { gt('my_account') }
            </Link>
            <Link href="/auth/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
              { gt('logout') }
            </Link>
          </div>
        )
      }
    </div>
  );
}