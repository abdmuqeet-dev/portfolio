import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = {
    'Programming Languages': [
      'C',
      'C++',
      'C#',
      'Java',
      'Python',
      'PHP',
      'Ruby',
      'Perl',
      'SQL',
      'JavaScript',
      'TypeScript'
    ],
    'Web Development': ['React.js', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'REST APIs', 'JSON'],
    Databases: ['Informix', 'MongoDB', 'SQLite', 'MySQL', 'PostgreSQL'],
    'Tools & Platforms': [
      'Unity',
      'Xamarin',
      'Jenkins',
      'Git',
      'ClearCase',
      'Rational ClearQuest',
      'Jira',
      'Docker',
      'Kubernetes'
    ],
    'Cloud & DevOps': [
      'Oracle Cloud Infrastructure',
      'AWS (EC2, S3 basics)',
      'CI/CD pipelines',
      'Version Control'
    ],
    'Other': [
      'Data Structures & Algorithms',
      'OOP',
      'Software Testing & QA',
      'Debugging',
      'Agile/Scrum'
    ]
  };

  return (
    <AnimatedSection id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(categories).map(([category, items]) => (
          <motion.div
            key={category}
            className="skills-card"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <h3>{category}</h3>
            <ul>
              {items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;

