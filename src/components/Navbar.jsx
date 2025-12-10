import { motion } from 'framer-motion';

const Navbar = ({ isDark, onToggleTheme }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 250, damping: 16 }}
      >
        Abdul Muqeet Ahmed
      </motion.div>

      <nav>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('experience')}>Experience</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>

        <button className="theme-toggle" onClick={onToggleTheme}>
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>
    </motion.header>
  );
};

export default Navbar;

