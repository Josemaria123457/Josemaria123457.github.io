// app/buscar/page.tsx
export default function BuscarPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = (searchParams.q ?? "").trim();
  return (
    <section className="band-2">
      <div className="container">
        <div className="surface">
          <h1>Resultados de búsqueda</h1>
          {!q ? (
            <p>Escribe algo para buscar.</p>
          ) : (
            <>
              <p className="lead">Término: <b>{q}</b></p>
              {/* TODO: aquí filtra tu contenido real */}
              <ul className="small">
                <li><a href="/#servicios">Servicios</a></li>
                <li><a href="/#planes">Planes</a></li>
                <li><a href="/#portafolio">Portafolio</a></li>
                <li><a href="/#faq">Preguntas frecuentes</a></li>
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
