import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / Flexbox / Grid', 'Responsive Design'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git & GitHub', 'VS Code', 'Vite', 'npm / yarn', 'Chrome DevTools'],
  },
  {
    category: 'Concepts',
    skills: ['Component Architecture', 'State Management', 'REST APIs', 'Performance Optimization', 'UI/UX Principles'],
  },
]

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>— What I Know</p>
          <h2 className={styles.title}>Skills &<br />Technologies</h2>
          <p className={styles.bio}>
            I specialize in building modern, responsive web interfaces
            with React.js. I care deeply about clean code, performance,
            and great user experiences.
          </p>
        </div>

        <div className={styles.right}>
          {skillGroups.map((g) => (
            <div key={g.category} className={styles.group}>
              <h3 className={styles.catName}>{g.category}</h3>
              <ul className={styles.list}>
                {g.skills.map((s) => (
                  <li key={s} className={styles.item}>
                    <span className={styles.check}>✦</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
