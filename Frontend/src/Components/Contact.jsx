import Github from '../Assets/Github.png'
import Linkedin from '../Assets/Linkedin.png'
import Gmail from '../Assets/Gmail.png'
import '../Styles/contact.css'

const channels = [
  {
    name: 'GitHub',
    description: 'Mira mi código y mis repositorios.',
    href: 'https://github.com/JuanUribeDv',
    icon: Github,
    alt: 'GitHub',
  },
  {
    name: 'LinkedIn',
    description: 'Conectemos profesionalmente.',
    href: 'https://www.linkedin.com',
    icon: Linkedin,
    alt: 'LinkedIn',
  },
  {
    name: 'Email',
    description: 'juandev079@gmail.com',
    href: 'mailto:juandev079@gmail.com',
    icon: Gmail,
    alt: 'Correo',
  },
]

function Contact() {
  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Contacto</p>
          <h2 className="section-title">Hablemos</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto o una oportunidad? Estaré encantado de escucharte.
          </p>
        </div>

        <div className="contact__grid">
          {channels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card contact-card"
            >
              <span className="contact-card__icon">
                <img src={channel.icon} alt={channel.alt} />
              </span>
              <span className="contact-card__body">
                <span className="contact-card__name">{channel.name}</span>
                <span className="contact-card__desc">{channel.description}</span>
              </span>
              <span className="contact-card__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <div className="contact__cta">
          <a
            href="/Hoja_de_vida_JuanUribe.docx.pdf"
            download
            className="btn btn-primary"
          >
            Descargar mi CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
