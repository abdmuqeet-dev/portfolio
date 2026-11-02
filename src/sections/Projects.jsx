import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <AnimatedSection id="projects">
      <h2>Projects</h2>
      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="project-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Projects;

