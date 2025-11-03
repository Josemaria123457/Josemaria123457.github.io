import Link from "next/link";

type SearchParams = Record<string, string | string[] | undefined>;

export default function BuscarPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const raw = searchParams?.q;
  const q = Array.isArray(raw) ? (raw[0] ?? "").trim() : (raw ?? "").trim();

  return (
    <section className="band-2">
      <div className="container">
        <div className="surface">
          <h1>Resultados de búsqueda</h1>

          {!q ? (
            <>
              <p className="lead">Escribe algo para buscar.</p>
              <ul className="small">
                <li><Link href="/#servicios">Servicios</Link></li>
                <li><Link href="/#planes">Planes</Link></li>
                <li><Link href="/#portafolio">Portafolio</Link></li>
                <li><Link href="/#faq">Preguntas frecuentes</Link></li>
              </ul>
            </>
          ) : (
            <>
              <p className="lead">
                Término buscado: <b>{q}</b>
              </p>

              {/* TODO: Implementa la búsqueda real aquí */}
              <p className="small" style={{ opacity: 0.9 }}>
                Por ahora te mostramos accesos rápidos:
              </p>
              <ul className="small">
                <li><Link href="/#servicios">Ir a Servicios</Link></li>
                <li><Link href="/#planes">Ver Planes y precios</Link></li>
                <li><Link href="/#portafolio">Ver Portafolio</Link></li>
                <li><Link href="/#faq">Ir a Preguntas frecuentes</Link></li>
              </ul>

              <div style={{ marginTop: 16 }}>
                <Link className="btn" href="/">Volver al inicio</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
