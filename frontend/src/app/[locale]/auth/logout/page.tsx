"use client";
import UserContext from "@/store/context/user";
import axios from "axios";
import { useLocale } from "next-intl";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";

export default function LogoutPage() {

  const user = useContext(UserContext)
  const locale = useLocale()

  useEffect(() => {
    async function serverCall() {
      if (user.setData) {
        user.setData(null)
      }

      try {
        await axios.post('/api/logout', {})
        redirect('/' + locale)
      } catch {
        redirect('/account')
      }
    }

    serverCall()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}