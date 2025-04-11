"use client"
import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface UserCookieData {
  token: string,
  name: string,
  email: string,
  invite_code: string
  id: string
}

export interface UserCookieState {
  data: UserCookieData|null,
  setData?: Dispatch<SetStateAction<UserCookieData | null>>
}

const UserContext = createContext<UserCookieState>({
  data: null
})

type Props = {
  children: React.ReactNode,
  cookieState?: UserCookieData
}
export function UserContextProvider({ children, cookieState }: Props) {
  const [data, setData] = useState<UserCookieData|null>(cookieState || null)
  
  return (
    <UserContext.Provider value={{
      data,
      setData
    }}>
      { children }
    </UserContext.Provider>
  )
}


export default UserContext