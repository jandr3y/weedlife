import { AxiosInstance } from "axios";
import { UpdateUserData, User } from "../interfaces";

export default function UserRequests(client: AxiosInstance) {
  return {
    async create(data: User) {
      return await client.post('/users', data)
    },
    async login(email: string, password: string) {
      return await client.post('/auth/login', { email, password })
    },
    async me() {
      return await client.get('/users/me')
    },
    async update(data: UpdateUserData) {
      return await client.put('/users', data)
    }
  }
}