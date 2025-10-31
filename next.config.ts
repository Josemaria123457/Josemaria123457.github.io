import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',             // ✅ convierte tu sitio en HTML/CSS/JS estático
  images: { unoptimized: true } // ✅ desactiva la optimización del servidor
}

export default nextConfig
