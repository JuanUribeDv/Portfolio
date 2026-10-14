import { useState } from 'react'
import '../Styles/navbar.css'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Navegación principal">
        <a href="#inicio" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-mark">JU</span>
          <span className="navbar__brand-text">Juan Uribe</span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="navbar-links"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`navbar__toggle-icon ${open ? 'is-open' : ''}`} />
        </button>

        <ul
          id="navbar-links"
          className={`navbar__links ${open ? 'is-open' : ''}`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta">
            <a
              href="/Hoja_de_vida_JuanUribe.docx.pdf"
              download
              className="btn btn-primary"
              onClick={closeMenu}
            >
              Descargar CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
