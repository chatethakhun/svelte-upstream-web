import { axiosInstance } from "../apiClient"

export const getPosts = (token: string) => {
  return axiosInstance(token).get('/api/posts')
}