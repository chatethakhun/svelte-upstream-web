import { axiosInstance } from "../apiClient"

export const login = (email: string, password: string) => {
  return axiosInstance.post('/login', { user: { email, password } })
}