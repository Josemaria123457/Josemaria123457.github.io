// app/gracias/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Gracias | PINONET",
  description:
    "Hemos recibido tu mensaje. Te contactaremos en menos de 24 horas. Si es urgente, escríbenos por WhatsApp.",
  robots: { index: false },
  openGraph: {
    title: "Gracias | PINONET",
    description:
      "Hemos recibido tu mensaje. Te contactaremos en menos de 24 horas.",
    url: "https://www.pinonet.me/gracias",
    siteName: "PINONET",
  },
};

export default function GraciasPage() {
  return (
    <main className="min-h-[80vh] bg-white">
      <section className="mx-auto w-full max-w-3xl px-4 py-16">
        {/* Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-green-50">
              {/* Check icon */}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              ¡Gracias! Recibimos tu mensaje
            </h1>
          </div>

          {/* Lead */}
          <p className="text-gray-600">
            Te contactaremos en menos de <span className="font-medium">24 h</span> con la
            propuesta inicial. Si tu proyecto es urgente, escríbenos por WhatsApp
            y te respondemos más rápido.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="font-medium">Incluimos</p>
              <ul className="mt-2 space-y-1">
                <li>• Performance y SEO técnico</li>
                <li>• Dominio y SSL</li>
                <li>• Enfoque en conversión</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="font-medium">Tiempo estimado</p>
              <ul className="mt-2 space-y-1">
                <li>• Kickoff: 24–48 h</li>
                <li>• Primer borrador: 3–7 días</li>
                <li>• Ajustes finales: 1–3 días</li>
              </ul>
            </div>
          </div>

          {/* Próximos pasos */}
          <div className="mt-8">
            <h2 className="text-base font-semibold">Próximos pasos</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-6 text-gray-700">
              <li>Revisamos tu mensaje y te escribimos con 2–3 opciones.</li>
              <li>Coordinamos una llamada breve si hace falta.</li>
              <li>Enviamos propuesta con tiempos y presupuesto.</li>
            </ol>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-gray-300 px-5 text-sm font-medium hover:bg-gray-50"
            >
              Volver al inicio
            </Link>

            <a
              href="https://wa.me/529532295158?text=Hola%20PINONET,%20acabo%20de%20enviar%20el%20formulario%20en%20pinonet.me%20y%20quiero%20continuar%20mi%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-green-600 px-5 text-sm font-semibold text-white hover:bg-green-700"
            >
              Escribir por WhatsApp
            </a>
          </div>

          {/* Footer */}
          <p className="mt-8 text-xs text-gray-500">
            PINONET • Sitios web rápidos, seguros y orientados a conversión.
          </p>
        </div>
      </section>
    </main>
  );
}
