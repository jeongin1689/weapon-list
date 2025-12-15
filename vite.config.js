import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/weapon-list/', // GitHub Pages 배포 시 저장소 이름과 동일하게 설정
})
