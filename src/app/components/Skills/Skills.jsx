'use client'

import { useState } from 'react'
import styles from './Skills.module.css'
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaFigma,
  FaPython,
  FaPhp,
  FaNpm,
  FaBootstrap
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb,
  SiPostman,
  SiWebpack,
  SiVercel,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiSupabase,
  SiVuedotjs,
  SiExpress
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc' // VS Code dari package VSC

const skillsData = {
  languages: [
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" }
  ],
  frameworks: [
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Vue.js", icon: <SiVuedotjs />, color: "#4FC08D" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "Express.js", icon: <SiExpress />, color: "#000000" }
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
    { name: "VS Code", icon: <VscCode />, color: "#007ACC" }, 
    { name: "Vercel", icon: <SiVercel />, color: "#000000" },
    { name: "NPM", icon: <FaNpm />, color: "#CB3837" },
    { name: "Unity", icon: <FaUnity/>, color: : "#181717"}
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
    { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" }
  ]
}

      export default function Skills() {
        const [activeTab, setActiveTab] = useState('languages')

        return (
          <section className={styles.skillsSection} id="skills">
            <div className="container">
              <div className={styles.sectionHeader}>
                <h2 className="gradient-text">Skills & Expertise</h2>
                <p>Technologies and tools I work with</p>
              </div>
              
              <div className={styles.tabButtons}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'languages' ? styles.active : ''}`}
          onClick={() => setActiveTab('languages')}
        >
          Languages
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'frameworks' ? styles.active : ''}`}
          onClick={() => setActiveTab('frameworks')}
        >
          Frameworks
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'tools' ? styles.active : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          Tools
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'database' ? styles.active : ''}`}
          onClick={() => setActiveTab('database')}
        >
          Database
        </button>
      </div>

        
        <div className={styles.skillsGrid}>
          {skillsData[activeTab].map((skill, index) => (
            <div 
              key={index} 
              className={styles.skillCard}
              style={{ '--skill-color': skill.color }}
            >
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h3 className={styles.skillName}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
