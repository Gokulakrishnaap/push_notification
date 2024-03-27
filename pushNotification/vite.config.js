import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_APP_APIKEY': JSON.stringify(process.env.VITE_APP_APIKEY),
    'process.env.APP_AUTH_DOMAIN': JSON.stringify(process.env.APP_AUTH_DOMAIN),
    'process.env.VITE_APP_PROJECT_ID': JSON.stringify(process.env.VITE_APP_PROJECT_ID),
    'process.env.VITE_APP_STORAGE_BUCKET': JSON.stringify(process.env.VITE_APP_STORAGE_BUCKET),
    'process.env.VITE_APP_MESSAGING_SENDERID': JSON.stringify(process.env.VITE_APP_MESSAGING_SENDERID),
    'process.env.VITE_APP_APPID': JSON.stringify(process.env.VITE_APP_APPID),
    'process.env.VITE_APP_MEASUREMENTID': JSON.stringify(process.env.VITE_APP_MEASUREMENTID),
    'process.env.VITE_APP_VAPID_KEY': JSON.stringify(process.env.VITE_APP_VAPID_KEY),
  }
})