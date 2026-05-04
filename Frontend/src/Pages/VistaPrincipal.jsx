import {useState, useEffect} from "react"
import '../Styles/VistaPrincipal.css'
import Profile from "../Assets/Profile.png"
import Github from "../Assets/Github.png"
import Linkedin from "../Assets/Linkedin.png"
import Gmail from "../Assets/Gmail.png"

function VistaPrincipal() {

    
    
  return (
    <div className="menu">
        <h2>Bienvenido a mi Portfolio</h2>
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
                    <section className="github-seccion-foto">
                        <img src={Github} alt="GitHub" className="github-icon"></img>
                    </section>
                    <button>Ir al Github</button>
                </section>

                <section className="linkedin-seccion">
                    <section className="linkedin-seccion-foto">
                        <img src={Linkedin} alt="LinkedIn" className="linkedin-icon"></img>
                    </section>
                    <button>Ir al Linkedin</button>
                </section>
                <section className="gmail-seccion">
                    <section className="gmail-seccion-foto">
                        <img src={Gmail} alt="Gmail" className="gmail-icon"></img>
                    </section>
                    <button>Ir al Gmail</button>
                </section>
            </section>
        </div>
        <header><h3>Proyectos</h3></header>
        <div className="Proyectos">
            
            <section className="proyecto1">
                <header><h4>Proyecto 1:Personal-Finances-Tracker</h4></header>
            </section>
            <section className="proyecto2">
                <header><h4>Proyecto 2:Goal-Handler</h4></header>
            </section>
            <section className="proyecto3">
                <header><h4>Proyecto 3:Proyect-cotizations</h4></header>
            </section>
        </div>
      
      

    </div>
  );
}
export default VistaPrincipal;