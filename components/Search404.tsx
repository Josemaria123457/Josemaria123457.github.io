"use client";
import { useRouter } from "next/navigation";
import styles from "../app/not-found.module.css";

export default function Search404() {
  const router = useRouter();
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = new FormData(form).get("q")?.toString().trim() ?? "";
    router.push(q ? `/buscar?q=${encodeURIComponent(q)}` : "/buscar");
  }
  return (
    <form className={styles.search} role="search" onSubmit={onSubmit}>
      <input className={styles.input} name="q" placeholder="Buscar: servicios, planes, portafolio…" aria-label="Buscar" />
      <button className={`btn ${styles.searchBtn}`} type="submit">Buscar</button>
    </form>
  );
}
