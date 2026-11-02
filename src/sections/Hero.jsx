import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-orb"
        initial={{ opacity: 0.6 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-intro" variants={item}>
          Hi, I'm
        </motion.p>
        <motion.h1 className="hero-title" variants={item}>
          Abdul Muqeet Ahmed
        </motion.h1>
        <motion.h2 className="hero-subtitle" variants={item}>
          MS CS Student @ CSU Fullerton · AI & Software Engineer
        </motion.h2>
        <motion.p className="hero-text" variants={item}>
          I build agentic AI systems, RAG pipelines, and scalable backend and full-stack applications using Python, Go, React, and cloud technologies.
        </motion.p>
        <motion.div className="hero-buttons" variants={item}>
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Download Résumé
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

