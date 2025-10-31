export default function Footer() {
  return (
    <footer className="footer-isiama">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo" aria-hidden="true" />
            <h3>PINONET</h3>
            <p>Diseño y desarrollo de sitios web rápidos, seguros y listos para vender.</p>
          </div>

          <div className="footer-contact">
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:hola@pinonet.me">hola@pinonet.me</a></li>
              <li><a href="https://wa.me/529532295158" target="_blank" rel="noopener">WhatsApp (953) 229 5158</a></li>
              <li>Oaxaca, México</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#planes">Planes</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <strong>PINONET</strong> • Hecho con ♥</p>
        </div>
      </div>
    </footer>
  );
}
