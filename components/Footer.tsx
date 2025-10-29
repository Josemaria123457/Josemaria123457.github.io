// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="footer-isiama">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo" aria-hidden="true" />
            <h3>ISIAMA</h3>
            <p>
              Instituto Superior de Idiomas e Innovación Tecnológica.<br />
              Educación de calidad con certificación oficial SEP y CeNNi.
            </p>
          </div>

          <div className="footer-contact">
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:isiama.20361ctlaxiaco@gmail.com">isiama.20361ctlaxiaco@gmail.com</a></li>
              <li><a href="mailto:isiama.pinotepa.20361@gmail.com">isiama.pinotepa.20361@gmail.com</a></li>
              <li><a href="https://wa.me/529532295158" target="_blank" rel="noopener noreferrer">WhatsApp (953) 229 5158</a></li>
              <li><a href="tel:+529532397626">Tlaxiaco: (953) 239 7626</a></li>
              <li><a href="tel:+529542061910">Pinotepa: (954) 206 1910</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Enlaces útiles</h4>
            <ul>
              <li><a href="#programas">Programas</a></li>
              <li><a href="#conocenos">Conócenos</a></li>
              <li><a href="#cert">Certificaciones</a></li>
              <li><a href="#">Aviso de privacidad</a></li>
              <li><a href="#">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <strong>ISIAMA</strong> • Tlaxiaco &amp; Pinotepa Nacional, Oaxaca</p>
          <p className="small">
            Hecho a mano con <span style={{ color: "#fb923c" }}>❤</span> por ISIAMA •{" "}
            <a href="https://wa.me/529532295158" target="_blank" rel="noopener noreferrer">Contáctanos</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
