"use client";
import Card from "@/components/ui/card/card";
import useBackendApi from "@/services/BackendApi/backendApi";
import { CashbackHistory as CashbackHistoryI } from "@/services/BackendApi/interfaces";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const formatDate = (dateString: string) => {
  return (new Date(dateString)).toLocaleDateString()
}

export default function CashbackHistory() {

  const t = useTranslations('Global')
  const api = useBackendApi()
  const [events, setEvents] = useState<CashbackHistoryI[]>([])

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await api.cashback.history()
        setEvents(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card>
      <h2 className="text-xl font-bold">
        { t('cashback_history.title') }
      </h2>
      <div className="flex mt-6 uppercase font-medium text-sm text-gray-500">
        <div className="flex-4">
          { t('cashback_history.event') }
        </div>
        <div className="flex-1">
          { t('cashback') }
        </div>
        <div className="flex-1">
          { t('status') }
        </div>
        <div className="flex-1">
          { t('date') }
        </div>
      </div>
      {
        events.map(item => (
          <div key={'C' + item.id} className="flex py-4 border-b-1 border-gray-200 text-sm">
            <div className="flex-4">
              { t.rich('cashback_events.'+item.title, {
                name: () => <strong className="font-semibold">{ item.message?.split(' ')[0] }</strong>
              }) }
            </div>
            <div className="flex-1">
              { item.value ? item.value : null }
            </div>
            <div className="flex-1">
              <div className="p-1 px-2 rounded-md bg-green-200 text-green-900 font-medium w-fit text-xs">
                { item.status }
              </div>
            </div>
            <div className="flex-1">
              { formatDate(item.created_at) }
            </div>
          </div>
        ))
      }
    </Card>
  )
}