import { axiosInstance } from "../apiClient"

export const login = (email: string, password: string) => {
  return axiosInstance.post('/login', { user: { email, password } })
}

export const logout = () => {
  return axiosInstance.post('/logout')
}

export const register = (email: string, password: string, name: string) => {
  return axiosInstance.post('/signup', { user: { email, password, name } })
}