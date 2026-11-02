import { motion } from 'framer-motion';

const AnimatedSection = ({ id, children }) => {
  return (
    <section id={id} className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.05 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection;

