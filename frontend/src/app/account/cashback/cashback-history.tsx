import Card from "@/components/ui/card/card";

const MOCK_ITEMS = [
  1, 2, 3, 4, 5
]

export default function CashbackHistory() {
  return (
    <Card>
      <h2 className="text-xl font-bold">Histórico de cashback</h2>
      <div className="flex mt-6 uppercase font-medium text-sm text-gray-500">
        <div className="flex-4">
          Indicado
        </div>
        <div className="flex-1">
          Cashback
        </div>
        <div className="flex-1">
          Status
        </div>
        <div className="flex-1">
          Data
        </div>
      </div>
      {
        MOCK_ITEMS.map(item => (
          <div key={'C' + item} className="flex py-4 border-b-1 border-gray-200 text-sm">
            <div className="flex-4">
              Lucas Jandrey
            </div>
            <div className="flex-1">
              R$ 4,20
            </div>
            <div className="flex-1">
              <div className="p-1 px-2 rounded-md bg-green-200 text-green-900 font-medium w-fit text-xs">APROVADO</div>
            </div>
            <div className="flex-1">
              17/09/2025
            </div>
          </div>
        ))
      }
    </Card>
  )
}