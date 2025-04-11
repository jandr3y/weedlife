"use client";
import Card from "@/components/ui/card/card";
import TextInput from "@/components/ui/form/text-input";
import { APP_URL } from "@/config";
import useBackendApi from "@/services/BackendApi/backendApi";
import UserContext, { UserCookieState } from "@/store/context/user";
import { useLocale, useTranslations } from "next-intl";
import { useContext, useEffect, useMemo, useState } from "react";
import LevelBlock from "./level-block";
import { Copy } from "lucide-react";
import Button from "@/components/ui/form/button";
import { Slide, toast } from "react-toastify";

interface CashbackDetails {
  total: number,
  monthly_total: number,
  level: number
}

const formatCurrency = (amount: number) => {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

export default function AccountSummary() {
  const gt = useTranslations('Global')
  const api = useBackendApi()
  const locale = useLocale()
  const user = useContext<UserCookieState>(UserContext)
  const firstName = useMemo(() => user.data?.name.split(' ')[0], [user.data?.name])
  const [cashbackDetails, setCashbackDetails] = useState<CashbackDetails | null>(null)
  const inviteUrl = `${APP_URL}/${locale}/auth/register/${user.data?.invite_code}`;

  const copyInviteCode = () => {
    navigator.clipboard.writeText(inviteUrl)
    toast(gt('invite_code_copied'), {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    })
  }

  useEffect(() => {
    async function getCashbackDetails() {
      try {
        const { data } = await api.cashback.details()
        setCashbackDetails(data)
      } catch (err) {
        console.log(err)
      }
    }

    getCashbackDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="flex gap-3 mb-3">
        <Card className="flex-2 flex flex-col justify-between">
          <h1 className="text-xl font-medium">{gt('hello_name')} {firstName}!</h1>
          <div className="flex items-end gap-4">
            <TextInput
              label={gt('invite_code')}
              value={inviteUrl}
              onChange={() => { }}
              rootClass="flex-1"
              onClick={copyInviteCode}
            />
            <Button onClick={copyInviteCode}>
              <Copy />
            </Button>
          </div>
        </Card>
        <div className="flex-1 flex flex-col gap-3">
          <div className="bg-gray-300 p-4 rounded-md">
            <h3 className="font-bold text-2xl text-gray-900">{cashbackDetails && formatCurrency(cashbackDetails.total)}</h3>
            <small className="text-gray-800">{gt('total')}</small>
            <small className="text-gray-800"></small>
          </div>
          <div className="bg-gray-100 text-gray-800 p-4 rounded-md">
            <h3 className="font-bold text-lg">{cashbackDetails && formatCurrency(cashbackDetails.monthly_total)}</h3>
            <small className="text-gray-800">{gt('available_total')}</small>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-100 text-gray-800 p-4 rounded-md">
          <h3 className="font-bold text-lg mb-4">{gt('level')}</h3>
          <div className="flex gap-4">
            <LevelBlock
              percent={10}
              level={1}
              locked={true}
              count={0}
            />
            <LevelBlock
              percent={5}
              level={2}
              locked={true}
              count={0}
            />
            <LevelBlock
              percent={5}
              level={3}
              locked={true}
              count={0}
            />
          </div>
        </div>
      </div>
    </div>
  )
}