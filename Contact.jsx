import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <p className={styles.label}>— Let's Work Together</p>
        <h2 className={styles.title}>
          Got a project?<br />
          <span>Let's talk.</span>
        </h2>
        <p className={styles.sub}>
          I'm currently open to freelance and full-time opportunities.
          Drop me a message and let's create something great.
        </p>

        <div className={styles.links}>
          <a href="mailto:your@email.com" className={styles.link}>
            <span>Email</span>
            <span className={styles.val}>your@email.com ↗</span>
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className={styles.link}>
            <span>GitHub</span>
            <span className={styles.val}>github.com/yourusername ↗</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className={styles.link}>
            <span>LinkedIn</span>
            <span className={styles.val}>linkedin.com/in/yourusername ↗</span>
          </a>
        </div>
      </div>

      <div className={styles.footer}>
        <span>© 2024 — Built with React.js</span>
        <span>Designed & Developed with ♥</span>
      </div>
    </section>
  )
}
