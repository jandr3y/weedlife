import AccountSidemenu from "../components/account-sidemenu/account-sidemenu";
import AccountSummary from "../components/account-summary/account-summary";
import CashbackHistory from "./cashback-history";

export default function CashbackPage() {
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
          <CashbackHistory />
        </div>
      </div>
    </div>
  )
}