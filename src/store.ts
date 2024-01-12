import { writable, type Writable } from "svelte/store";
interface User {
  id: number
  token: string
}

export const loginSession = <Writable<User>> <unknown>writable(undefined)