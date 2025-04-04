import Card from "@/components/ui/card/card";
import AccountSidemenu from "../components/account-sidemenu/account-sidemenu";
import AccountForm from "../components/account-form/account-form";

export default function AccountSettingsPage() {
  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <AccountSidemenu />
      </div>
      <div className="flex-4">
        <Card>
          <h2 className="text-xl font-bold mb-8">Minha conta</h2>
          <div className="max-w-2xl">
            <AccountForm user={{ name: 'Lucas Jandrey'}} />
          </div>
        </Card>
      </div>
    </div>
  )
}