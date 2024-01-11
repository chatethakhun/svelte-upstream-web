import { toast } from '@zerodevx/svelte-toast'

export const successToast = (message: string) => toast.push(message, {
  theme: {
    '--toastBackground': 'green',
    '--toastColor': 'white',
    '--toastBarBackground': 'olive'
  }
})

export const warningToast = (message: string) => toast.push(message, {
  theme: {
    '--toastBackground': 'green',
    '--toastColor': 'white',
    '--toastBarBackground': 'olive'
  }
})

export const failureToast = (message: string) => toast.push(message, {
  theme: {
    '--toastBackground': '#FA7070',
    '--toastColor': 'white',
    '--toastBarBackground': 'white',
    '--toastBorderRadius': '0.5rem',
    '--toastMsgPadding': '0.75rem'
  }
})