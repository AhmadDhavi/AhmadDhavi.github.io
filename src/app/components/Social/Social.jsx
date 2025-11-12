'use client'

import styles from './Social.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const socialLinks = [
  {
    icon: <FaInstagram />,
    name: "Instagram",
    handle: "@ahmaddhavii",
    description: "Behind the scenes & daily updates",
    url: "https://instagram.com/ahmaddhavii",
    className: styles.instagram
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
    handle: "Ahmad Dhavi Fauzan Yudistira",
    description: "Professional network & career",
    url: "https://linkedin.com/in/ahmaddhavi",
    className: styles.linkedin
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    handle: "@foerzaaaaa",
    description: "Open source projects & code",
    url: "https://github.com/Foerzaaaaa",
    className: styles.github
  }
]

export default function Social() {
  return (
    <section className={styles.socialSection} id="social">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="gradient-text">Let's Connect!</h2>
          <p>Follow my journey and let's collaborate</p>
        </div>
        <div className={styles.socialGrid}>
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.socialCard} ${social.className}`}
            >
              <div className={styles.socialIcon}>{social.icon}</div>
              <h3>{social.name}</h3>
              <p className={styles.handle}>{social.handle}</p>
              <p>{social.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
