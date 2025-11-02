// app/gracias/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Gracias • PINONET",
  description:
    "Tu mensaje fue enviado. Te contactaremos en menos de 24 horas. Mientras tanto, puedes volver al sitio o escribirnos por WhatsApp.",
  robots: { index: false },
};

export default function GraciasPage() {
  return (
    <main className="min-h-[70vh] bg-white">
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
              <span className="text-2xl">✅</span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              ¡Gracias! Recibimos tu mensaje
            </h1>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Te contactaremos en &lt; 24 h con la propuesta. Si tu proyecto es
            urgente, escríbenos por WhatsApp y te respondemos más rápido.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Web performance • SEO • Conversión</li>
            <li>• Entrega rápida • SSL y dominio • Soporte incluido</li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-gray-300 px-5 text-sm font-medium hover:bg-gray-50"
            >
              Volver al inicio
            </Link>

            <a
              href="https://wa.me/529532295158?text=Hola%20PINONET,%20acabo%20de%20enviar%20el%20formulario%20y%20me%20gustaría%20acelerar%20mi%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-green-600 px-5 text-sm font-semibold text-white hover:bg-green-700"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            PINONET • Diseño y desarrollo de sitios web rápidos, seguros y
            orientados a conversión.
          </p>
        </div>
      </section>
    </main>
  );
}
