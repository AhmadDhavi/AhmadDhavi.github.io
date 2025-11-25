'use client'

import styles from './Projects.module.css'
import ProjectCard from './ProjectsCard'

const projectsData = [
  {
    number: "01",
    title: "Digital Library Management System", 
    description: "A robust full-stack library platform serving 50+ active students. Featuring Role-Based Access Control (RBAC) for secure data handling and streamlined admin workflows.",
    techStack: ["Laravel", "PHP", "Tailwind CSS", "MySQL"] 
  },
  {
    number: "02",
    title: "Warmindo Papa Oy Website",
    description: "A responsive marketing website built with Next.js to enhance digital presence. Features a dynamic digital menu, interactive maps, and social integration, delivering a seamless user experience across all devices.",
    techStack: ["Next.js", "React", "JavaScript"]
  },
  {
    number: "03",
    title: "Donat KPK Brand Website",
    description: "High-performance website built with Laravel Blade. Features a fully optimized site structure and menu layout, ensuring a consistent and engaging user experience across desktop and mobile platforms.",
    techStack: ["Laravel", "PHP", "BLADE", "MySQL"]
  }
]

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="gradient-text">Featured Projects</h2>
          <p>Some of the best works I've completed</p>
        </div>
        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
