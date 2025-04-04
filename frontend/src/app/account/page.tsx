import Card from "@/components/ui/card/card";
import AccountSidemenu from "./components/account-sidemenu/account-sidemenu";
import AccountSummary from "./components/account-summary/account-summary";

const MOCK_ITEMS = [1,2,3,4,5]

export default function MembersPage() {
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
            <h2 className="text-xl font-bold">Meus pedidos</h2>
            <div className="flex mt-6 uppercase font-medium text-sm text-gray-500">
              <div className="flex-3">
                Pedido
              </div>
              <div className="flex-1">
                Valor
              </div>
              <div className="flex-1">
                Pagamento
              </div>
              <div className="flex-1">
                Status
              </div>
              <div className="flex-1">
                Data
              </div>
              <div className="flex-1">
                Ações
              </div>
            </div>
            {
              MOCK_ITEMS.map(item => (
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