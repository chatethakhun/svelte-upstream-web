import axios, { type AxiosInstance } from 'axios';

function createAxiosInstanceWithToken(): AxiosInstance {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Set the base URL for all requests
    timeout: 5000, // Set a timeout of 5 seconds for all requests
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header to JSON
    },
  });

  // You can also customize the instance further if needed
  // For example, you can add interceptors or default headers here

  return instance;
}

function createAxiosInstance({ token }: { token: string }): AxiosInstance {

  const headers = {
    'Content-Type': 'application/json'
  }

  if(token) {
    Object.assign(headers, { 'Authorization': `${token}` })
  }


  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Set the base URL for all requests
    timeout: 10000, // Set a timeout of 5 seconds for all requests
    headers: headers
  });

  // You can also customize the instance further if needed
  // For example, you can add interceptors or default headers here

  return instance;
}

// Usage:
export const axiosWithAuth = createAxiosInstanceWithToken();
export const axiosInstance = (token = '') => createAxiosInstance({ token })