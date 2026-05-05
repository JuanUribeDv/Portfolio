import '../Styles/VistaPrincipal.css'
import Profile from "../Assets/Profile.png"
import Github from "../Assets/Github.png"
import Linkedin from "../Assets/Linkedin.png"
import Gmail from "../Assets/Gmail.png"
import { projects } from "../Data/Proyectos_info.js";
import ProjectCard from '../Components/Proyectos_tarjeta';



function VistaPrincipal() {
    
  return (
    <div className="menu">
        <h2 className='titulo-principal'>Bienvenido a mi Portfolio</h2>
        <section className="Foto-section">
            <img src={Profile} alt="Perfil" className="perfil"></img>
        </section>
        
        <p className="titulo">Sobre mi</p>
        <div className="sobremi">
        
            <section className="bio">
                <header><h3>¿Quien soy?</h3></header>
                <p>Hola, soy Juan Pablo Uribe, estudiante de la institución universitaria de sabaneta "Unisabaneta" soy un desarrollador web junior con pasión por crear experiencias digitales atractivas y funcionales. Me estoy concentrando en el desarrollo frontend, utilizando tecnologías como HTML, CSS, JavaScript y React para construir interfaces de usuario intuitivas y responsivas. Mi objetivo es seguir aprendiendo y creciendo en el campo del desarrollo web, contribuyendo a proyectos innovadores y desafiantes.</p>
            </section>
            <section className="habilidades-seccion">

                <section className="titulo-habilidades">
                    <header><h3>Habilidades</h3></header>
                </section>
                <section className="org-habilidades">
                    <section className="front">
                        <header><h4>Frontend</h4></header>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </section>
                    <section className="back">
                        <header><h4>Backend</h4></header>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                        </ul>
                    </section>
                </section>
            </section>
            <section className="medios_sociales">
                <header><h3>Medios Sociales</h3></header>

                <section className="github-seccion">
                    <section >
                        <img src={Github} alt="GitHub" className="github-icon"></img>
                    </section>
                    <a href="https://github.com/JuanUribeDv" target="_blank" rel="noopener noreferrer">
                        <button className="btngit">Ir al Github</button>
                    </a>
                </section>

                <section className="linkedin-seccion">
                    <section>
                        <img src={Linkedin} alt="LinkedIn" className="linkedin-icon"></img>
                    </section>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <button className="btnlink">Ir al Linkedin</button>
                    </a>
                </section>
                <section className="gmail-seccion">
                    <section>
                        <img src={Gmail} alt="Gmail2" className="gmail-icon"></img>
                    </section>
                    <p className="Gmail_texto">juanuribe079@gmail.com</p>
                </section>
                <section className="Cv-seccion">
                    <a href="/Juan_Pablo_Uribe_Cordoba_CV.pdf" download>
                        <button className="btncv">Descargar mi CV</button>
                    </a>
                </section>
            </section>
        </div>
        <p className='titulo2'>Proyectos</p>
        <div className="Proyectos">
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      
      

    </div>
  );
}
export default VistaPrincipal;
                   