"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link"; // ✅ agregado

type Leaf = { label: string; href: string };
type Child = { label: string; href?: string; children?: Leaf[] };
type MenuItem = { label: string; href?: string; children?: Child[] };

// -------- Menú editable --------
const MENU: MenuItem[] = [
  {
    label: "Programas",
    children: [
      {
        label: "Inglés",
        children: [
          { label: "Infantil", href: "/cursos/ingles/infantil" },
          { label: "Jóvenes", href: "/cursos/ingles/jovenes" },
          { label: "Adulto", href: "/cursos/ingles/adulto" },
        ],
      },
      { label: "Francés", href: "/cursos/frances" },
      { label: "Innovación digital", href: "/cursos/innovacion-digital" },
    ],
  },
  {
    label: "Conócenos",
    children: [
      { label: "Misión y visión", href: "/conocenos#mision-vision" },
      { label: "Valores", href: "/conocenos#valores" },
      { label: "Historia", href: "/conocenos#historia" },
    ],
  },
  {
    label: "Metodología",
    children: [
      { label: "Diagnóstico", href: "/metodologia#diagnostico" },
      { label: "Clase comunicativa", href: "/metodologia#clase" },
      { label: "Evaluaciones", href: "/metodologia#evaluaciones" },
      { label: "Certificación", href: "/metodologia#certificacion" },
    ],
  },
  {
    label: "Certificaciones",
    children: [
      { label: "RVOE SEP", href: "/certificaciones#rvoe" },
      { label: "CeNNi", href: "/certificaciones#cenni" },
    ],
  },
  {
    label: "Sedes",
    children: [
      { label: "Tlaxiaco", href: "/sedes#tlaxiaco" },
      { label: "Pinotepa Nacional", href: "/sedes#pinotepa" },
    ],
  },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);             // menú móvil
  const [openIdx, setOpenIdx] = useState<number | null>(null); // dropdown abierto (móvil)
  const [openFly, setOpenFly] = useState<number | null>(null); // flyout 2º nivel (móvil)
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
        setOpenIdx(null);
        setOpenFly(null);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const closeAll = () => { setOpenMenu(false); setOpenIdx(null); setOpenFly(null); };

  // Helper mínimo para decidir si usar Link o <a>
  const isInternal = (href?: string) =>
    !!href && !href.startsWith("http") && !href.startsWith("mailto:") && !href.startsWith("tel:");

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container">
        <nav className="nav" aria-label="Principal">
          {/* ✅ Enlace interno con Link */}
          <Link className="brand" href="/" onClick={closeAll}>
            <span className="logo" aria-hidden="true" /> ISIAMA
          </Link>

          <button
            className="menu-toggle"
            aria-controls="menu"
            aria-expanded={openMenu}
            aria-label={openMenu ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpenMenu(v => !v)}
          >
            ☰ Menú
          </button>

          <ul id="menu" className={`menu ${openMenu ? "is-open" : ""}`}>
            {MENU.map((item, i) => {
              const hasChildren = !!item.children?.length;

              if (!hasChildren) {
                return (
                  <li key={item.label}>
                    {isInternal(item.href) ? (
                      <Link href={item.href!} onClick={closeAll}>{item.label}</Link>
                    ) : (
                      <a href={item.href} onClick={closeAll}>{item.label}</a>
                    )}
                  </li>
                );
              }

              const isOpen = openIdx === i;
              return (
                <li key={item.label} className={`has-dropdown ${isOpen ? "open" : ""}`}>
                  <button
                    className="dropdown-trigger"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                  >
                    {item.label} <span aria-hidden="true">▾</span>
                  </button>

                  <ul className="dropdown-menu" role="menu" aria-label={item.label}>
                    {item.children!.map((ch, j) => {
                      const hasFly = !!ch.children?.length;
                      if (!hasFly) {
                        return (
                          <li key={ch.label}>
                            {isInternal(ch.href) ? (
                              <Link href={ch.href!} onClick={closeAll}>{ch.label}</Link>
                            ) : (
                              <a href={ch.href} onClick={closeAll}>{ch.label}</a>
                            )}
                          </li>
                        );
                      }
                      const flyOpen = openFly === j;
                      return (
                        <li key={ch.label} className={`has-fly ${flyOpen ? "open" : ""}`}>
                          <button
                            className="fly-trigger"
                            aria-haspopup="true"
                            aria-expanded={flyOpen}
                            onClick={() => setOpenFly(flyOpen ? null : j)}
                          >
                            {ch.label} <span aria-hidden="true">›</span>
                          </button>

                          <ul className="flyout" role="menu" aria-label={ch.label}>
                            {ch.children!.map((leaf) => (
                              <li key={leaf.href}>
                                {isInternal(leaf.href) ? (
                                  <Link href={leaf.href} onClick={closeAll}>{leaf.label}</Link>
                                ) : (
                                  <a href={leaf.href} onClick={closeAll}>{leaf.label}</a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>

          {/* Enlace interno al ancla: puede ser <a> o Link; uso Link por consistencia */}
          <Link className="btn primary hide-sm" href="#inscripciones" onClick={closeAll}>
            Aula virtuañ
          </Link>
        </nav>
      </div>
    </header>
  );
}
