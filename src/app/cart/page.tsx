import Card from "@/components/ui/card/card";
import { getProductBySlug } from "@/mocks";
import { useCart } from "@/store/context/cart";
import { useMemo } from "react";

const MOCK_ITEMS = [1, 2, 3, 4, 5]

export default function CartPage() {

  const cart = useCart()
  const cartItems = useMemo(() => {
    return cart.cart.map(item => ({
      ...getProductBySlug(item.slug)
    }))
  }, [])

  return (
    <div className="max-w-2/3">
      <Card>
        <h1 className="text-2xl font-semibold mb-8">Carrinho</h1>
        <div className="flex mt-6 uppercase font-medium text-sm text-gray-500">
          <div className="flex-3">
            Produto
          </div>
          <div className="flex-1">
            Quantidade
          </div>
          <div className="flex-1">
            Total
          </div>
          <div className="flex-1">
            Ações
          </div>
        </div>
        {
          MOCK_ITEMS.map(item => (
            <div key={'C' + item} className="flex py-4 border-b-1 border-gray-200 text-sm">
              <div className="flex-3">
                Lucas Jandrey
              </div>
              <div className="flex-1">
                4
              </div>
              <div className="flex-1">
                $ 20
              </div>
              <div className="flex-1">
                Teste
              </div>
            </div>
          ))
        }

      </Card>
    </div>
  )
}