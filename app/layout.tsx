// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image"; // ✅ agregado

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alianzama.edu.mx"),
  title: "ISIAMA • Instituto Superior de Idiomas e Innovación",
  description:
    "Aprende Inglés, Francés e Informática en ISIAMA. Asesores certificados, metodología comunicativa, certificación CeNNi y RVOE SEP. Sedes en Tlaxiaco y Pinotepa Nacional.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://alianzama.edu.mx/",
    title: "ISIAMA • Instituto Superior de Idiomas e Innovación",
    description:
      "Idiomas • Tecnología • Certificación. CeNNi y RVOE SEP. Tlaxiaco y Pinotepa.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISIAMA • Instituto Superior de Idiomas e Innovación",
    description:
      "Aprende Inglés, Francés e Informática con asesores certificados. CeNNi y RVOE SEP.",
    images: ["/og-image.jpg"],
  },
  icons: { icon: "/favicon.ico" },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1a120b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />

        {/* ===== Botón flotante de WhatsApp ===== */}
        <a
          href="https://wa.me/529532295158"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatear por WhatsApp"
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" width={28} height={28} /> {/* ✅ cambiado */}
        </a>
      </body>
    </html>
  );
}
