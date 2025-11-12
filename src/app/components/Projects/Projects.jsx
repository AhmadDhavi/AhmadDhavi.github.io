'use client'

import styles from './Projects.module.css'
import ProjectCard from './ProjectsCard'

const projectsData = [
  {
    number: "01",
    title: "AI-Powered SaaS Platform",
    description: "AI-powered SaaS platform that helps businesses automate their workflows with machine learning and natural language processing.",
    techStack: ["Next.js", "Python", "TensorFlow", "PostgreSQL"]
  },
  {
    number: "02",
    title: "Real-Time Collaboration Tool",
    description: "Real-time collaboration application with interactive whiteboard features, video conferencing, and integrated project management.",
    techStack: ["React", "WebRTC", "Socket.io", "Node.js"]
  },
  {
    number: "03",
    title: "E-Commerce Marketplace",
    description: "Large-scale e-commerce marketplace with payment gateway features, inventory management, and comprehensive analytics dashboard.",
    techStack: ["Vue.js", "Laravel", "Redis", "AWS"]
  },
  {
    number: "04",
    title: "Mobile Fitness App",
    description: "Mobile fitness application with AI personal trainer, nutrition tracking, and active user community.",
    techStack: ["React Native", "Firebase", "GraphQL", "Stripe"]
  },
  {
    number: "05",
    title: "Blockchain DApp",
    description: "Decentralized application for NFT marketplace with smart contract and wallet integration.",
    techStack: ["Solidity", "Web3.js", "React", "IPFS"]
  },
  {
    number: "06",
    title: "Data Visualization Dashboard",
    description: "Analytics dashboard with interactive data visualization and real-time monitoring for business intelligence.",
    techStack: ["D3.js", "TypeScript", "MongoDB", "Docker"]
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
