'use client'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <h2 className="gradient-text" style={{ fontSize: '42px', marginBottom: '20px' }}>
          Ready to Start a Project?
        </h2>
        <p className={styles.description}>
          I'm always open to discussing new projects and exciting collaboration opportunities!
        </p>
        <a href="mailto:hello@example.com" className="btn btn-primary">
          Email Me
        </a>
        <p className={styles.copyright}>©Ahmad Dhavi</p>
      </div>
    </footer>
  )
}
