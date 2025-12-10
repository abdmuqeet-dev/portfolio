import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const experiences = [
  {
    role: 'Software Engineer – Informix Development Team',
    company: 'HCLSoftware (A Division of HCL Tech), Pune, India',
    period: 'Aug 2023 – Aug 2025',
    points: [
      'Performed root cause analysis and implemented long-term fixes for defects reported by QA and end-users, improving system stability and reliability.',
      'Identified and resolved defects across Linux, PowerLE, and Windows platforms during QA testing to maintain product quality and on-time delivery.',
      'Automated data retrieval processes and addressed infrastructure issues, streamlining development workflows and improving team productivity.'
    ]
  },
  {
    role: 'MERN Stack Developer Intern',
    company: 'Quadrilite Technologies, Remote – Hyderabad, India',
    period: 'Jan 2022 – Jun 2022',
    points: [
      'Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN).',
      'Built and optimized REST APIs, integrated third-party services, and improved application performance.',
      'Collaborated with a team of developers using Git and Agile methodologies.'
    ]
  }
];

const Experience = () => {
  return (
    <AnimatedSection id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <motion.article
            key={exp.role}
            className="experience-card"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 200, damping: 16 }}
          >
            <h3>{exp.role}</h3>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-period">{exp.period}</p>
            <ul>
              {exp.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;

