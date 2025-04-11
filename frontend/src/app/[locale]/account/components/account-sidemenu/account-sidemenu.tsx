import { useTranslations } from "next-intl";
import AccountSidemenuItem from "./account-sidemenu-item";

export default function AccountSidemenu() {

  const gt = useTranslations('Global')

  return (
    <div>
      <h2 className="text-xl font-bold">Menu</h2>
      <div className="border-1 border-gray-200 rounded-md mt-4 border-b-0 flex flex-col">
        <AccountSidemenuItem title={gt('my_order')} href="/account" />
        <AccountSidemenuItem title={gt('cashback')} href="/account/cashback" />
        <AccountSidemenuItem title={gt('my_account')} href="/account/settings" />
        <AccountSidemenuItem title={gt('addresses')} href="/account/address" />
        <AccountSidemenuItem title={gt('logout')} href="/auth/logout" />
      </div>
    </div>
  )
}