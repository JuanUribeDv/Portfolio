import '../Styles/skills.css'
import {Settings,Palette, Wrench } from 'lucide-react'
const groups = [
  {
    title: 'Frontend',
    icon: <Palette />,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend',
    icon: <Settings />,
    skills: ['Node.js', 'Express'],
  },
  {
    title: 'Herramientas',
    icon: <Wrench />,
    skills: ['Git', 'GitHub', 'Vite'],
  },
]

function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Habilidades</p>
          <h2 className="section-title">Tecnologías con las que trabajo</h2>
        </div>

        <div className="skills__grid">
          {groups.map((group) => (
            <article key={group.title} className="card skill-group">
              <header className="skill-group__head">
                <span className="skill-group__icon" aria-hidden="true">
                  {group.icon}
                </span>
                <h3>{group.title}</h3>
              </header>
              <ul className="skill-group__list">
                {group.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
