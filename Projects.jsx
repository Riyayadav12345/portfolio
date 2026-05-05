import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    title: 'Portfolio Website',
    desc: 'A responsive personal portfolio built with React.js featuring reusable components, modern UI design, and smooth animations.',
    tech: ['React.js', 'CSS Modules', 'Vite'],
    color: '#c8f542',
    link: '#',
  },
  {
    num: '02',
    title: 'E-Commerce UI',
    desc: 'Full-featured product listing and cart interface with dynamic filtering, responsive grid, and localStorage persistence.',
    tech: ['React.js', 'Context API', 'CSS'],
    color: '#ff6b35',
    link: '#',
  },
  {
    num: '03',
    title: 'Weather Dashboard',
    desc: 'Real-time weather app consuming REST APIs, displaying forecast cards with animated icons and geolocation support.',
    tech: ['React.js', 'OpenWeather API', 'Axios'],
    color: '#a78bfa',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <p className={styles.label}>— Selected Work</p>
        <h2 className={styles.title}>Projects</h2>
      </div>

      <div className={styles.list}>
        {projects.map((p) => (
          <a key={p.num} href={p.link} className={styles.card}>
            <span className={styles.num} style={{ color: p.color }}>{p.num}</span>
            <div className={styles.body}>
              <h3 className={styles.name}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tech.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
