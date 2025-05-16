import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get the base path for deployment
// For GitHub Pages, we need to use the repo name as the base path
const getBase = () => {
  // When in production mode (like GitHub Pages), use /project/ as the base
  if (process.env.NODE_ENV === 'production') {
    return '/project/'
  }
  // In development mode, use root
  return '/'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/LendFlow-frontend/', // Match your GitHub repository name exactly
})
