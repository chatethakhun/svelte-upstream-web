import { axiosInstance } from "../apiClient"

export const updateProfile = ({ token, data }: { token: string, data: User }) => {
  return axiosInstance(token).post('/profile', {
    name: data.name,
    thumbnail: data.thumbnail
  })
}