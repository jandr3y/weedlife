import { AxiosInstance } from "axios";

export default function CashbackRequests(client: AxiosInstance) {
  return {
    async details() {
      return await client.get('/cashback/details')
    },
    async history() {
      return await client.get('/cashback/history')
    }
  }
}