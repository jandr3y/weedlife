"use client"
import AccountForm from "@/components/account/account-form";
import UserContext from "@/store/context/user";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { useContext } from "react";

export default function MembersRegisterPage() {

  const t = useTranslations('RegisterPage')
  const user = useContext(UserContext)

  if (user.data) {
    redirect('/account')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl mb-16 font-semibold">{ t('title') }</h2>
      <AccountForm />
    </div>
  )
}