import { axiosInstance } from "../apiClient"

export const login = (email: string, password: string) => {
  return axiosInstance.post('/login', { user: { email, password } })
}

export const logout = () => {
  return axiosInstance.post('/logout')
}