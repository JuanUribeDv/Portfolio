import Profile from '../Assets/profile2.jpg'
import '../Styles/hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Desarrollador Web Frontend</p>
          <h1 className="hero__title">
            Hola, soy <span className="hero__name">Juan Pablo Uribe</span>
          </h1>
          <p className="hero__lead">
            Desarrollador web junior apasionado por crear experiencias digitales
            atractivas, intuitivas y responsivas con HTML, CSS, JavaScript y React.
          </p>

          <div className="hero__actions">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a
              href="/Juan_Pablo_Uribe_Cordoba_CV.pdf"
              download
              className="btn btn-ghost"
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-ring">
            <img src={Profile} alt="Foto de perfil de Juan Pablo Uribe" className="hero__avatar" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
