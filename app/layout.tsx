import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pinonet.me"),
  title: "PINONET • Diseño y desarrollo de páginas web",
  description:
    "Creamos páginas web rápidas y optimizadas para vender: landing pages, sitios corporativos y e-commerce inicial. SEO técnico, analítica y dominio/hosting.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.pinonet.me/",
    title: "PINONET • Sitios web modernos y rápidos",
    description: "Tu web lista para convertir visitantes en clientes.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PINONET • Diseño web",
    description: "Landing pages y sitios de negocio con enfoque a conversión.",
    images: ["/og-image.jpg"],
  },
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Enlace de salto para accesibilidad */}
        <a href="#main-content" style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
        }} className="skip-link">
          Saltar al contenido
        </a>

        <Header />

        {/* Contenido principal con landmark */}
        <main id="main-content" role="main">
          {children}
        </main>

        <Footer />

        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/529532295158"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Chatear por WhatsApp"
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" width={28} height={28} />
        </a>
      </body>
    </html>
  );
}
