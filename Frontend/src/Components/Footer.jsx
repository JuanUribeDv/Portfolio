import '../Styles/footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">Juan Pablo Uribe</p>
        <p className="footer__copy">
          © {year} · Desarrollado con React y Vite
        </p>
        <nav className="footer__links" aria-label="Enlaces de contacto">
          <a href="https://github.com/JuanUribeDv" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:juanuribe079@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
