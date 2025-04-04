"use client";
import Card from "@/components/ui/card/card";
import TextInput from "@/components/ui/form/text-input";
import { APP_URL } from "@/config";
import { Lock } from "lucide-react";

export default function AccountSummary() {
  return (
    <div>
      <div className="flex gap-3 mb-3">
        <Card className="flex-2 flex flex-col justify-between">
          <h1 className="text-xl font-medium">Olá, Teste!</h1>
          <TextInput label="Código de convite" value={APP_URL + '/account/register/TESTCODE'} onChange={() => {}} />
        </Card>
        <div className="flex-1 flex flex-col gap-3">
          <div className="bg-gray-300 p-4 rounded-md">
            <h3 className="font-bold text-2xl text-gray-900">$ 4.20</h3>
            <small className="text-gray-800">Total Cashback</small>
            <small className="text-gray-800"></small>
          </div>
          <div className="bg-gray-100 text-gray-800 p-4 rounded-md">
            <h3 className="font-bold text-lg">$ 2.20</h3>
            <small className="text-gray-800">Cashback vigente do mês</small>
          </div>
        </div>
      </div>
      <div>
      <div className="bg-gray-100 text-gray-800 p-4 rounded-md">
          <h3 className="font-bold text-lg mb-4">Níveis</h3>
            <div className="flex gap-4">
              <div className="flex-1 text-center bg-green-300 rounded-md p-2">
                <h3 className="font-bold text-md">10%</h3>
                <small>1º</small>
              </div>
              <div className="flex-1 text-center bg-green-300 rounded-md p-2">
                <h3 className="font-bold text-md">5%</h3>
                <small>2º</small>
              </div>
              <div className="flex-1 relative text-center bg-red-200 text-red-800 rounded-md p-2">
                <Lock className="absolute top-1/3 left-6" />
                <h3 className="font-bold text-md">5%</h3>
                <small>3º</small>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}