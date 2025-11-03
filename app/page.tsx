import Link from "next/link"
export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container wrap">
          <div>
            <span className="eyebrow">Web performance • SEO • Conversión</span>
            <h1>Diseñamos páginas web <b>profecionales</b>,<b>rapidas</b> y optimizadas para resultados reales</h1>
            <p>Creamos páginas web, tiendas en línea y plataformas corporativas con un enfoque estratégico en rendimiento, posicionamiento y conversión.</p>

            <div className="badges">
              <span className="badge">SEO técnico</span>
              <span className="badge">WhatsApp & Analisis</span>
            </div>

            <div className="cta">
              <a className="btn primary" href="https://www.ejemplo.com/servicios">Ver planes</a>
              <a className="btn" href="#contacto">Solicitar cotización</a>
            </div>

            <div className="stats" role="list">
              <div className="stat" role="listitem"><b>7 días</b><span className="small">entrega rapida</span></div>
              <div className="stat" role="listitem"><b>+95</b><span className="small">performance</span></div>
              <div className="stat" role="listitem"><b>SSL</b><span className="small">y dominio</span></div>
              <div className="stat" role="listitem"><b>Soporte</b><span className="small">incluido</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="band-1">
        <div className="container">
          <div className="surface">
            <h2>Servicios</h2>
            <p className="lead">Paquetes diseñados para negocios locales, emprendedores y pequeñas o medianas empresas.</p>
            <div className="grid cards">
              <article className="card">
                <h3>Landing de alto impacto</h3>
                <p>Página diseñada para captar clientes: mensajes claros, llamada a la acción, contacto directo por WhatsApp y métricas de conversión.</p>
                <span className="tag">Entrega desde 7 días</span>
              </article>
              <article className="card">
                <h3>Sitio corporativo 3–5 secciones</h3>
                <p>Incluye página de inicio, servicios, sobre nosotros, contacto y blog opcional.
Optimizado para SEO y rendimiento..</p>
                <span className="tag">SEO + rendimiento</span>
              </article>
              <article className="card">
                <h3>Tienda en línea básica</h3>
                <p>Catálogo inicial, integración de pagos y capacitación para administrar productos.
Ideal para comenzar a vender en línea.</p>
                <span className="tag">Escalable</span>
              </article>
              <article className="card">
                <h3>Rediseño & migración</h3>
                <p>Actualizamos o migramos su sitio desde Wix o WordPress a una versión moderna, veloz y segura.
Sin interrupciones de servicio.</p>
                <span className="tag">Sin caídas</span>
              </article>
            </div>
          </div>
        </div>
      </section>
{/* ===== QUIÉNES SOMOS (mitad imagen / mitad texto) ===== */}
<section id="quienes-somos" className="band-1">
  <div className="container">
    <div
      className="surface"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "stretch",
        overflow: "hidden",
        borderRadius: "16px",
      }}
    >
      {/* Columna izquierda: IMAGEN (desde internet) */}
      <div
        style={{
          flex: "1 1 360px",
          minHeight: "340px",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1400&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.95)",
          borderRadius: "20px",
        }}
        role="img"
        aria-label="Equipo PINONET trabajando en diseño y desarrollo web"
      />

      {/* Columna derecha: TEXTO */}
      <article
        style={{
          flex: "1 1 360px",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <span className="eyebrow">Equipo de trabajo PINONET desarrollando sitios web</span>
        <h2 className="text-3xl font-bold" style={{ color: "var(--accent, #60a5fa)", marginBottom: "12px" }}>
          Quiénes somos
        </h2>

        <p className="lead" style={{ marginBottom: 12 }}>
          En <strong>PINONET</strong> combinamos <em>diseño, tecnología y estrategia</em> para construir
          sitios web <b>profesionales, rápidos y optimizados</b> que impulsan resultados reales.
        </p>
        <p style={{ opacity: 0.85 }}>
          Nuestro equipo trabaja con pasión y precisión para ofrecer rendimiento, seguridad y una
          presencia digital que destaca.
        </p>

        <div style={{ marginTop: 20 }}>
          <Link className="btn primary" href="https://www.pinonet.me/conocenos" aria-label="Ir a la página Conócenos">
            Conócenos más
          </Link>
        </div>
      </article>
    </div>
  </div>
</section>

      {/* PROCESO */}
      <section id="proceso" className="band-2">
        <div className="container">
          <div className="surface">
            <h2>Nuestro proceso</h2>
            <div className="timeline" role="list">
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>1. Análisis (Brief)</strong><br /><span className="small">Definimos objetivos, referencias visuales y contenido principal.</span></div></div>
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>2. Prototipo</strong><br /><span className="small">WElaboramos el diseño inicial (wireframe) y la propuesta visual.</span></div></div>
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>3. Desarrollo</strong><br /><span className="small">Construcción del sitio web con diseño adaptable, SEO técnico y analítica integrada..</span></div></div>
              <div className="step" role="listitem"><span className="dot" aria-hidden="true"></span><div><strong>4. Lanzamiento</strong><br /><span className="small">Entrega final con dominio, certificado SSL y seguimiento posterior.</span></div></div>
            </div>
          </div>
        </div>
      </section>

{/* PORTAFOLIO */}
<section id="portafolio" className="band-1">
  <div className="container">
    <div className="surface">
      <h2>Portafolio</h2>
      <p className="lead">Algunos diseños que hemos entregado.</p>

      {/*
        Edita este array: titulo, slug (ruta destino) e imagen (colócala en /public/portafolio/…)
      */}
      {(() => {
        const proyectos = [
    {
      titulo: "Barbería Tradicional",
      slug: "https://alianzama.edu.mx",
      img: "/portafolio/barberia.jpg",
      excerpt: "Sitio elegante y cálido para una barbería local.",
    },
    {
      titulo: "Restaurante La Mesa",
      slug: "https://restaurant-lamesa.vercel.app",
      img: "/portafolio/restaurante.jpg",
      excerpt: "Web moderna para restaurante con menú digital.",
    },
    {
      titulo: "Consultora Nova",
      slug: "/proyectos/consultora",
      img: "/portafolio/consultora.jpg",
      excerpt: "Página corporativa profesional y responsiva.",
    },
    {
      titulo: "Tienda Verde",
      slug: "https://tienda-verde.com.mx",
      img: "/portafolio/tienda-verde.jpg",
      excerpt: "E-commerce sostenible con carrito y pagos en línea.",
    },
  ];

  return (
    <div className="grid cards">
      {proyectos.map((p) => {
        const isExternal = p.slug.startsWith("http");
        const content = (
          <article className="card portfolio-card">
            <img className="thumb" src={p.img} alt={p.titulo} loading="lazy" />
            <h3>{p.titulo}</h3>
            <p>{p.excerpt}</p>
          </article>
        );

        return isExternal ? (
          <a
            key={p.slug}
            href={p.slug}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        ) : (
          <Link key={p.slug} href={p.slug} className="card-link">
            {content}
          </Link>
        );
      })}
    </div>
  );
})()}
    </div>
  </div>
</section>


      {/* PLANES */}
      <section id="planes" className="band-2">
        <div className="container">
          <div className="surface">
            <h2>Planes y precios</h2>
            <p className="lead">Facturación en MXN. Personalizamos cualquier plan.</p>
            <div className="grid cards">
              <article className="card">
                <h3>Landing</h3>
                <p>$2,900 MXN</p>
                <ul className="small">
                  <li>1 sección</li><li>WhatsApp/CTA</li><li>SEO base</li><li>1 mes de soporte</li>
                </ul>
              </article>
              <article className="card">
                <h3>Negocio</h3>
                <p>$7,900 MXN</p>
                <ul className="small">
                  <li>3–5 secciones</li><li>Analítica + eventos</li><li>2 meses soporte</li><li>Dominio + hosting*</li>
                </ul>
              </article>
              <article className="card">
                <h3>E-commerce inicial</h3>
                <p>$10,900 MXN</p>
                <ul className="small">
                  <li>Catálogo básico</li><li>Checkout externo</li><li>Capacitación</li><li>3 meses soporte</li>
                </ul>
              </article>
            </div>
            <p className="small" style={{marginTop:8}}>*Dominio y hosting incluidos el primer año en planes Negocio/E-commerce.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="band-1">
        <div className="container">
          <div className="surface">
            <h2>Preguntas frecuentes</h2>
            <div className="grid">
              <article className="card"><h3>¿Qué necesito para empezar?</h3><p>Únicamente requerimos su logotipo y contenido básico.<br></br>
Si aún no los tiene, lo asesoramos paso a paso para elaborarlos.</p></article>
              <article className="card"><h3>¿Incluye SEO?</h3><p>SSí. Todos los planes incluyen optimización técnica inicial, que abarca metadatos,<br /> mapa del sitio (sitemap), etiquetas OG y configuraciones básicas de rendimiento.</p></article>
              <article className="card"><h3>¿Cuál es el tiempo de entrega?</h3><p>Las páginas de aterrizaje (landing) se entregan en un promedio de 7 días hábiles. <br />
Los sitios web más amplios se completan en un plazo aproximado de 2 a 3 semanas.</p></article>
            </div>
          </div>
        </div>
      </section>
{/* ===== CONTACTO (rediseño móvil-first, aislado) ===== */}
<section id="contacto" className="band-2">
  <div className="container">
    <div className="surface">
      <h2>Hablemos de tu proyecto</h2>
      <p className="lead">Cuéntanos objetivos, plazos y referencias. Respondemos en menos de 24 h.</p>

      <div className="contact-wrap">
        {/* FORMULARIO */}
  <form
  id="contacto-form"
  className="card contact-form"
  action="https://formsubmit.co/cotactanos@pinonet.me"
  method="POST"
>
  {/* formsubmit */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="Nueva solicitud PINONET" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_honey" style={{ display: "none" }} />

  {/* 🔽 NUEVO: redirección a tu página gracias */}
  <input type="hidden" name="_next" value="https://www.pinonet.me/gracias" />

  <div className="field">
    <label htmlFor="c-nombre">Nombre <span className="req">*</span></label>
    <input id="c-nombre" name="nombre" required autoComplete="name" placeholder="Tu nombre" />
  </div>

  <div className="row two">
    <div className="field">
      <label htmlFor="c-correo">Correo <span className="req">*</span></label>
      <input id="c-correo" name="correo" type="email" required autoComplete="email" placeholder="tu@correo.com" />
    </div>
    <div className="field">
      <label htmlFor="c-whats">WhatsApp</label>
      <input id="c-whats" name="whatsapp" inputMode="tel" placeholder="+52 9xx xxx xxxx" />
    </div>
  </div>

  <div className="row two">
    <div className="field">
      <label htmlFor="c-tipo">Tipo de sitio</label>
      <select id="c-tipo" name="tipo" defaultValue="">
        <option value="" disabled>Elige una opción</option>
        <option>Landing</option>
        <option>Sitio 3–5 secciones</option>
        <option>E-commerce inicial</option>
        <option>Rediseño / Migración</option>
      </select>
    </div>
    <div className="field">
      <label htmlFor="c-plazo">Plazo objetivo</label>
      <select id="c-plazo" name="plazo" defaultValue="">
        <option value="" disabled>Selecciona</option>
        <option>1 semana</option>
        <option>2–3 semanas</option>
        <option>1 mes</option>
      </select>
    </div>
  </div>

  <div className="field">
    <label htmlFor="c-mensaje">Mensaje <span className="req">*</span></label>
    <textarea
      id="c-mensaje"
      name="mensaje"
      rows={4}
      required
      placeholder="Objetivos, referencias y plazos"
    />
  </div>

  <label className="check">
    <input type="checkbox" name="acepta" required />
    <span className="check-text">Acepto el tratamiento de mis datos.</span>
  </label>

  <button className="btn primary" type="submit">Solicitar propuesta</button>
  <p className="microcopy">
    También puedes escribir a <a href="mailto:cotactanos@pinonet.me">cotactanos@pinonet.me</a> o por{" "}
    <a href="https://wa.me/529541210879" target="_blank" rel="noopener">WhatsApp</a>.
  </p>
</form>


        {/* INFO */}
        <aside className="card contact-info">
          <h3>Contacto directo</h3>
          <ul className="small info-list">
            <li>Email: <a href="mailto:cotactanos@pinonet.me">cotactanos@pinonet.me</a></li>
            <li>WhatsApp: <a href="https://wa.me/529541210879" target="_blank" rel="noopener">(954) 121 0879</a></li>
            <li>Horario: Lun–Sab 10:00–18:00</li>
            <li>Ubicación: Oaxaca, México (remoto a todo MX)</li>
          </ul>

          <div className="trust">
            <h4>Confianza</h4>
            <p>Más de 100 proyectos entregados con éxito.</p>
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>
    </>
  );
}