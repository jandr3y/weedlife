"use client";
import Card from "@/components/ui/card/card";
import AccountSidemenu from "../components/account-sidemenu/account-sidemenu";
import AccountForm from "@/components/account/account-form";
import { useEffect, useState } from "react";
import useBackendApi from "@/services/BackendApi/backendApi";
import { useTranslations } from "next-intl";
import { User } from "@/services/BackendApi/interfaces";

export default function AccountSettingsPage() {

  const api = useBackendApi()
  const t = useTranslations('Global')
  const [user, setUser] = useState<User|null>(null)

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await api.user.me()
        setUser(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <AccountSidemenu />
      </div>
      <div className="flex-4">
        <Card>
          <h2 className="text-xl font-bold mb-8">{ t('my_account') }</h2>
          <div className="max-w-2xl">
            { user && <AccountForm user={user} /> }
          </div>
        </Card>
      </div>
    </div>
  )
}