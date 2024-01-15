import type { Cookies } from "@sveltejs/kit";
import { AxiosError } from "axios";

export const handleRemoveCookie = (error: AxiosError, cookies: Cookies) => {
 if(error instanceof AxiosError) {
  if(error.status === 401) {
   cookies.delete('session', { path: '/' });
  }
 }
} 