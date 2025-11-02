"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type MenuItem = { label: string; href?: string; children?: { label: string; href: string }[] };

const MENU: MenuItem[] = [
  { label: "conocenos", href: "https://pinonet.me/conocenos" },
  { label: "Servicios", href: "https://pinonet.me/servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target as Node)) setOpenMenu(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container">
        <nav className="nav" aria-label="Principal">
          <Link className="brand" href="/" onClick={() => setOpenMenu(false)}>
            <span className="logo" aria-hidden="true" /> PINONET
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
            {MENU.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} onClick={() => setOpenMenu(false)}>{item.label}</a>
                ) : (
                  <a href="#servicios" onClick={() => setOpenMenu(false)}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>

          <a className="btn primary hide-sm" href="#contacto" onClick={() => setOpenMenu(false)}>
            Cotiza tu web
          </a>
        </nav>
      </div>
    </header>
  );
}
