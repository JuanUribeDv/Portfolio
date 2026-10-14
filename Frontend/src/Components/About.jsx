import '../Styles/about.css'

function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Sobre mí</p>
          <h2 className="section-title">¿Quién soy?</h2>
        </div>

        <div className="about__grid">
          <div className="card about__bio">
            <p>
              Hola, soy Juan Pablo Uribe, estudiante de la Institución
              Universitaria de Sabaneta «Unisabaneta». Soy un desarrollador web
              junior con pasión por crear experiencias digitales atractivas y
              funcionales.
            </p>
            <p>
              Me estoy concentrando en el desarrollo frontend, utilizando
              tecnologías como HTML, CSS, JavaScript y React para construir
              interfaces de usuario intuitivas y responsivas.
            </p>
            <p>
              Mi objetivo es seguir aprendiendo y creciendo en el campo del
              desarrollo web, contribuyendo a proyectos innovadores y
              desafiantes.
            </p>
          </div>

          <aside className="about__facts">
            <div className="fact">
              <span className="fact__label">Ubicación</span>
              <span className="fact__value">Sabaneta, Colombia</span>
            </div>
            <div className="fact">
              <span className="fact__label">Enfoque</span>
              <span className="fact__value">Desarrollo Frontend</span>
            </div>
            <div className="fact">
              <span className="fact__label">Formación</span>
              <span className="fact__value">Unisabaneta</span>
            </div>
            <div className="fact">
              <span className="fact__label">Estado</span>
              <span className="fact__value fact__value--available">
                <span className="fact__dot" /> Disponible para aprender
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
