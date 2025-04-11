import { cookies } from "next/headers";

export default async function Logout() {
  const cookiesManager = await cookies()
  cookiesManager.delete('token')
  return true
}