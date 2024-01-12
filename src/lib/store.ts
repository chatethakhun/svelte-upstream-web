import { writable, type Writable } from "svelte/store";
interface User {
  id: number
  token: string
}

export const userStore: Writable<User | undefined> = writable({
  id: 0,
  email: "",
  name: "",
  token: ""
})

export const postStore = writable([])