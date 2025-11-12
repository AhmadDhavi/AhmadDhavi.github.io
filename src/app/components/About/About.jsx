'use client'

import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutImage}>
            <div className={styles.imageContainer}>
              <div className={styles.imagePlaceholder}>👨‍💻</div>
              <div className={styles.floatingShape}></div>
            </div>
          </div>
          
          <div className={styles.aboutContent}>
            <div className={styles.sectionHeader}>
              <h2 className="gradient-text">About Me</h2>
              <div className={styles.underline}></div>
            </div>
            
            <p className={styles.description}>
              Hi! I'm <strong>Ahmad Dhavi Fauzan Yudistira</strong>, a passionate Front-End Developer 
              specializing in creating beautiful, responsive, and user-friendly web applications.
            </p>
            
            <p className={styles.description}>
              With a strong foundation in modern web technologies, I transform ideas into 
              engaging digital experiences. I love working with React, Next.js, and creating 
              pixel-perfect designs that users love.
            </p>
            
            <p className={styles.description}>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing my knowledge with the developer community.
            </p>
            
            {/* <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className={styles.statItem}>
                <h3>5+</h3>
                <p>Happy Clients</p>
              </div>
              <div className={styles.statItem}>
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
