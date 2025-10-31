import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: { unoptimized: true } // ✅ desactiva la optimización del servidor
}

export default nextConfig
