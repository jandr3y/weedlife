import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {

  const t = useTranslations('Global')

  return (
    <div className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex">
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-4">Weedlife</h4>
          <Link href="/">{ t('store') }</Link>
          <Link href="/about">{ t('about') }</Link>
          <Link href="/support">{ t('support') }</Link>
        </div>
      </div>
    </div>
  )
}