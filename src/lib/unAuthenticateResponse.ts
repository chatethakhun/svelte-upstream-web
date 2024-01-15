import type { Cookies } from "@sveltejs/kit";
import { AxiosError } from "axios";

export const handleRemoveCookie = (error: AxiosError, cookies: Cookies) => {
  console.log('err');
  
 if(error instanceof AxiosError) {
  if(error.response?.status === 401) {
   cookies.delete('session', { path: '/' });
  }
 }
} 