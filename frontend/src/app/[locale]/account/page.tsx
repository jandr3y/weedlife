import Card from "@/components/ui/card/card";
import AccountSidemenu from "./components/account-sidemenu/account-sidemenu";
import AccountSummary from "./components/account-summary/account-summary";
import { useTranslations } from "next-intl";


export default function MembersPage() {

  const t = useTranslations('Global')

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <AccountSidemenu />
      </div>
      <div className="flex-4">
        <div>
          <AccountSummary />
        </div>
        <div className="mt-8">
          <Card>
            <h2 className="text-xl font-bold">{ t('last_orders.title') }</h2>
            <div className="flex mt-6 uppercase font-medium text-sm text-gray-500">
              <div className="flex-3">
                { t('last_orders.items') }
              </div>
              <div className="flex-1">
                { t('last_orders.value') }
              </div>
              <div className="flex-1">
                { t('last_orders.payment') }
              </div>
              <div className="flex-1">
                { t('status') }
              </div>
              <div className="flex-1">
                { t('date') }
              </div>
              <div className="flex-1">
                { t('last_orders.actions') }
              </div>
            </div>
            {
              [].map(item => (
                <div key={'P'+item} className="flex py-4 border-b-1 text-sm border-gray-200 text-md items-center">
                  <div className="flex-3">
                    <div>Pedido nº 420</div>
                    <ul className="text-xs text-gray-400">
                      <li>2x ERVA DELUXE</li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    R$ 4,20
                  </div>
                  <div className="flex-1">
                    Stripe
                  </div>
                  <div className="flex-1">
                    <div className="p-1 px-2 rounded-md bg-green-200 text-green-900 font-medium w-fit text-xs">APROVADO</div>
                  </div>
                  <div className="flex-1">
                    17/09/2025
                  </div>
                  <div className="flex-1">
                    X
                  </div>
                </div>
              ))
            }
          </Card>
        </div>
      </div>
    </div>
  )
}