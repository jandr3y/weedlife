import axios from "axios"
import UserRequests from "./requests/user"
import { useContext } from "react"
import UserContext from "@/store/context/user"
import CashbackRequests from "./requests/cashback"
import { API_URL } from "@/config"


export default function useBackendApi() {
  const user = useContext(UserContext)
  const token = user.data?.token
  console.log(user)
  const client = axios.create({
    baseURL: API_URL
  })

  client.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + token
    console.log('ooi', token)
    return config
  })
  
  return {
    user: UserRequests(client),
    cashback: CashbackRequests(client),
    client
  }
}