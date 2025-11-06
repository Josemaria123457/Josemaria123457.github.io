// app/conocenos/page.tsx
import type { Metadata } from "next";
import styles from "./conocenos.module.css";

export const metadata: Metadata = {
  title: "conocenos • PINONET",
  description:
    "Conoce la historia, visión, misión y el equipo detrás de PINONET. Creamos sitios web rápidos, seguros y enfocados en conversión.",
  alternates: { canonical: "/conocenos" },
};

export default function Pageconocenos() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>Sobre PINONET</p>
            <h1 className={styles.title}>
              Diseñamos y desarrollamos sitios web que{" "}
              <span className={styles.accent}>impulsan resultados</span>
            </h1>
            <p className={styles.subtitle}>
              Unimos estrategia, diseño y tecnología para crear experiencias medibles,
              rápidas y seguras. Trabajamos con negocios locales, emprendedores y pymes.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <strong>+95</strong>
                <span>Performance promedio</span>
              </div>
              <div className={styles.stat}>
                <strong>7 días</strong>
                <span>Entrega landing</span>
              </div>
              <div className={styles.stat}>
                <strong>AA</strong>
                <span>Accesibilidad</span>
              </div>
            </div>
          </div>

          <div className={styles.heroMedia} aria-label="Equipo PINONET">
            {/* Img grande */}
            <a
              href="https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-with-laptops-wD1LRb9OeEo"
              target="_blank" rel="noopener noreferrer"
              aria-label="Ver foto en Unsplash"
            >
              <img
                className={styles.heroImg}
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop"
                alt="Equipo colaborando en una oficina con laptops"
                loading="lazy"
              />
            </a>
            {/* Img pequeña */}
            <a
              href="https://unsplash.com/photos/turned-on-gray-laptop-computer-7okkFhxrxNw"
              target="_blank" rel="noopener noreferrer"
              aria-label="Ver foto en Unsplash"
            >
              <img
                className={styles.heroImgSm}
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                alt="Escritorio con laptop y accesorios"
                loading="lazy"
              />
            </a>
            <div className={styles.heroBadge}>Hecho en Oaxaca, MX</div>
          </div>
        </section>

        {/* HISTORIA */}
        <section className={styles.section} aria-labelledby="t-historia">
          <h2 className={styles.sectionTitle} id="t-historia">Nuestra historia</h2>
          <div className={styles.story}>
            <p>
              PINONET nació como una empresa dedicada al diseño y desarrollo de páginas web personalizadas,
              enfocadas en ayudar a pequeñas y medianas empresas a fortalecer su presencia digital
              y atraer más clientes por internet.
            </p>
            <p>
              Ofrecemos soluciones creativas, funcionales y accesibles que reflejan la identidad de cada marca
              y mejoran su posicionamiento en línea, impulsando el crecimiento de nuestros clientes en el entorno
              tecnológico actual.
            </p>
          </div>
        </section>

        {/* VISIÓN / MISIÓN / OBJETIVOS */}
        <section className={styles.section} id="identidad" aria-labelledby="t-identidad">
          <h2 className={styles.sectionTitle} id="t-identidad">Visión, Misión y Objetivos</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Visión</h3>
              <p className={styles.valueText}>
                Ser una empresa reconocida a nivel nacional por ofrecer servicios digitales confiables y modernos,
                contribuyendo al desarrollo tecnológico de las empresas mexicanas y convirtiéndonos en un referente
                en diseño web y marketing digital.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Misión</h3>
              <p className={styles.valueText}>
                Brindar soluciones web innovadoras y personalizadas que impulsen la transformación digital de nuestros clientes,
                combinando creatividad, tecnología y compromiso con la calidad.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Objetivos</h3>
              <ul className={styles.valueList}>
                <li>Diseñar y publicar al menos 10 sitios web durante el primer año.</li>
                <li>Alcanzar un nivel de satisfacción del cliente superior al 90%.</li>
                <li>Lograr una rentabilidad mínima del 25% anual.</li>
                <li>Expandir los servicios a marketing digital y posicionamiento SEO en el segundo año.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className={styles.section} aria-labelledby="t-valores">
          <h2 className={styles.sectionTitle} id="t-valores">Nuestros valores</h2>
          <div className={styles.badgeRow}>
            {[
              "Innovación",
              "Responsabilidad",
              "Trabajo en equipo",
              "Calidad",
              "Honestidad",
              "Compromiso con el cliente",
            ].map((v) => (
              <span key={v} className={styles.badge}>{v}</span>
            ))}
          </div>
        </section>

        {/* LÍNEA DE TIEMPO */}
        <section className={styles.section} aria-labelledby="t-timeline">
          <h2 className={styles.sectionTitle} id="t-timeline">Cómo llegamos aquí</h2>
          <ol className={styles.timeline}>
            <li className={styles.timeItem}>
              <div className={styles.timeDot} /> <strong>2021</strong>
              <p>Primeros proyectos para negocios locales y validación del proceso.</p>
            </li>
            <li className={styles.timeItem}>
              <div className={styles.timeDot} /> <strong>2022</strong>
              <p>Especialización en performance y SEO técnico para escalar resultados.</p>
            </li>
            <li className={styles.timeItem}>
              <div className={styles.timeDot} /> <strong>2023</strong>
              <p>Integración de analítica y funnels de conversión en todos los entregables.</p>
            </li>
            <li className={styles.timeItem}>
              <div className={styles.timeDot} /> <strong>Hoy</strong>
              <p>Proceso modular: desde landing pages hasta sitios corporativos y tiendas.</p>
            </li>
          </ol>
        </section>

        {/* EQUIPO */}
        <section className={styles.section} aria-labelledby="t-equipo">
          <h2 className={styles.sectionTitle} id="t-equipo">Equipo</h2>
          <div className={styles.team}>
            {[
              {
                name: "José María",
                role: "Director General (CEO) / Diseñador Web Principal",
                img: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Frida Stephanie",
                role: "Gerente de Operaciones",
                img: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Erick",
                role: "Subdirector Administrativo y Financiero",
                img: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Diego",
                role: "Community Manager / Marketing Digital",
                img: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Michael Alexander",
                role: "Atención al Cliente y Ventas",
                img: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Abad",
                role: "Diseñador Gráfico / Creativo Visual",
                img: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?q=80&w=800&auto=format&fit=crop",
              },
              {
                name: "Librado",
                role: "Analista de Proyectos y Soporte Técnico",
                img: "https://images.unsplash.com/photo-1573496529574-be85d6a60704?q=80&w=800&auto=format&fit=crop",
              },
            ].map((m, i) => (
              <article className={styles.member} key={i}>
                <img className={styles.avatar} src={m.img} alt={m.name} loading="lazy" />
                <div className={styles.memberInfo}>
                  <strong>{m.name}</strong>
                  <span className={styles.muted}>{m.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DATOS RÁPIDOS */}
        <section className={styles.section} aria-labelledby="t-datos">
          <h2 className={styles.sectionTitle} id="t-datos">Datos rápidos</h2>
          <div className={styles.kpis}>
            <div className={styles.kpiCard}><strong>+50</strong><span>Secciones entregadas</span></div>
            <div className={styles.kpiCard}><strong>&lt;1s</strong><span>TTFB promedio</span></div>
            <div className={styles.kpiCard}><strong>100%</strong><span>SSL & deploy</span></div>
          </div>
        </section>

        {/* FAQ DESPLEGABLE */}
        <section className={styles.section} aria-labelledby="t-faq">
          <h2 className={styles.sectionTitle} id="t-faq">Preguntas frecuentes</h2>
          <div className={styles.story}>
            <details>
              <summary><strong>¿Qué significa TTFB promedio?</strong></summary>
              <p>
                <strong>TTFB</strong> (Time To First Byte) mide el tiempo que tarda el servidor en enviar
                la primera respuesta al navegador. Un valor menor a 1 segundo indica que nuestros sitios
                son rápidos y eficientes desde el primer byte.
              </p>
            </details>

            <details>
              <summary><strong>¿Qué quiere decir “100% SSL & deploy”?</strong></summary>
              <p>
                Significa que todos nuestros proyectos se entregan <strong>seguros y completamente publicados</strong>:
                con certificado SSL (HTTPS) incluido y con el despliegue técnico hecho, listos para ser visitados en línea.
              </p>
            </details>

            <details>
              <summary><strong>¿Por qué estas métricas son importantes?</strong></summary>
              <p>
                Reflejan nuestro compromiso con la calidad técnica. Un bajo TTFB mejora la experiencia del usuario
                y el SEO, mientras que el SSL garantiza confianza y seguridad para los visitantes.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.section} id="contacto" aria-labelledby="t-contacto">
          <div className={styles.ctaBox}>
            <div>
              <h2 className={styles.noMargin} id="t-contacto">¿Trabajamos juntos?</h2>
              <p className={`${styles.noMargin} ${styles.muted}`}>
                Cuéntanos sobre tu proyecto: objetivos, plazos y referentes. Respondemos &lt; 24h.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a className={`${styles.btn} ${styles.primary}`} href="https://wa.me/529541210879" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className={styles.btn} href="mailto:contactanos@pinonet.me">Enviar correo</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
