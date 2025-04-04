import AccountSidemenuItem from "./account-sidemenu-item";

export default function AccountSidemenu() {
  return (
    <div>
      <h2 className="text-xl font-bold">Menu</h2>
      <div className="border-1 border-gray-200 rounded-md mt-4 border-b-0 flex flex-col">
        <AccountSidemenuItem title="Meus pedidos" href="/account" />
        <AccountSidemenuItem title="Cashback" href="/account/cashback" />
        <AccountSidemenuItem title="Minha conta" href="/account/settings" />
        <AccountSidemenuItem title="Endereços" href="/account/address" />
        <AccountSidemenuItem title="Sair" href="/account/logout" />
      </div>
    </div>
  )
}