import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.noise} />
      <div className={styles.grid} />
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for work
        </div>

        <h1 className={styles.heading}>
          <span className={styles.line1}>Hi, I'm Riya</span>
          <span className={styles.line2}>Web Developer</span>
          <span className={styles.line3}>& React Expert</span>
        </h1>

        <p className={styles.sub}>
          I build fast, beautiful web experiences with React.js and modern
          technologies. Focused on clean code and pixel-perfect UI.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnSecondary}>Get in touch →</a>
        </div>
      </div>

      <div className={styles.marquee}>
        <div className={styles.marqueeInner}>
          {['React.js', 'JavaScript', 'CSS3', 'HTML5', 'Node.js', 'Git', 'Responsive Design', 'UI/UX'].map((t, i) => (
            <span key={i}>{t} <span className={styles.dot2}>✦</span> </span>
          ))}
          {['React.js', 'JavaScript', 'CSS3', 'HTML5', 'Node.js', 'Git', 'Responsive Design', 'UI/UX'].map((t, i) => (
            <span key={`b${i}`}>{t} <span className={styles.dot2}>✦</span> </span>
          ))}
        </div>
      </div>
    </section>
  )
}
