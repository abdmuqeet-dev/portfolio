import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const experiences = [
  {
    role: 'AI Engineer Intern – Agentic AI, RAG & LLMs',
    company: 'Actian, a division of HCLSoftware, Austin, TX (Remote)',
    period: 'Jun 2026 – Aug 2026',
    points: [
      'Designed and developed TARS, an end-to-end AI database performance advisor for HCL Informix that combines LLM reasoning, RAG, vector search, live database telemetry and deterministic diagnostics to produce grounded, cited, actionable recommendations.',
      'Built a structure-aware Python ingestion and RAG pipeline with PyMuPDF over the 374-page Informix Performance Guide and 11,000+ pages of HCL documentation, indexing 46,000+ embeddings in Informix VectorBlade for semantic and metadata-filtered retrieval.',
      'Built the agentic orchestration layer: an MCP client with an LLM-driven intent router across conversation, documentation Q&A, live-metric retrieval and full diagnostics, giving safe read-only access to server metrics while preventing execution of LLM-generated SQL.',
      'Designed a deterministic diagnostics and evaluation framework (storage/log separation, memory footprint, CPU/VP mapping) that keeps verdicts in code and uses the LLM only for explanations and cited mitigations, improving reproducibility and reliability.',
      'Delivered a Streamlit conversational app and Click-based CLI with section/page citations and explicit refusal mechanisms to mitigate hallucinations.',
      'Owned the full AI engineering lifecycle from requirements and feasibility studies to testing and documentation; benchmarked VectorBlade vs. BAAI/bge-large-en-v1.5 embeddings, supported Claude, OpenAI and Gemini through a pluggable LLM interface, and built an extensive pytest regression suite.'
    ]
  },
  {
    role: 'Software Engineer – Informix Development Team',
    company: 'HCLSoftware (A Division of HCL Tech), Pune, India',
    period: 'Aug 2023 – Aug 2025',
    points: [
      'Contributed to the development and maintenance of IBM Informix RDBMS, a high-performance relational database system, working extensively on C-based backend components across Linux, PowerLE, and Windows environments.',
      'Diagnosed and resolved 50+ defects in a large-scale C codebase, performing deep root cause analysis on 20+ high-priority issues including segmentation faults, deadlocks, race conditions, and transaction failures, reducing post-release defects by 30–35%.',
      'Designed, debugged, and optimized query execution paths, memory management, buffer pool handling, and concurrency control mechanisms, improving overall system stability and runtime reliability.',
      'Automated data retrieval, validation, regression testing, and debugging workflows using shell scripting, SQL, and infrastructure scripts, reducing manual effort by 35–40% and cutting issue investigation time by 20%.',
      'Improved cross-platform compatibility by identifying and fixing OS-specific issues, ensuring consistent behavior across distributed enterprise deployments.',
      'Collaborated with QA, DevOps, and cross-functional teams in an Agile/Scrum environment, supporting 10+ release cycles, validating builds using Git, Jenkins CI/CD pipelines, Docker, and enterprise tools such as ClearQuest, ClearCase, and TDL, improving release reliability by 10%.'
    ]
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Brainovision Solutions, Remote – Hyderabad, India',
    period: 'Jan 2022 – Jun 2022',
    points: [
      'Contributed to the design and development of MERN-based full-stack web applications supporting scalable business features in a remote Agile environment.',
      'Built and optimized RESTful APIs using Node.js and Express.js, improving API response times by 25–30% through query optimization, caching strategies, and efficient request handling.',
      'Designed MongoDB schemas with proper indexing and aggregation pipelines, reducing database query latency by 20% and supporting 10K+ records per application.',
      'Developed responsive React.js components using component-based architecture and efficient state management, improving page load performance by 20% and enhancing user experience.',
      'Integrated third-party APIs and services for authentication, data enrichment, and external workflows, increasing feature delivery speed by 15%.',
      'Collaborated with cross-functional teams using Git and Jira in an Agile/Scrum workflow, contributing to 5+ feature releases, participating in code reviews, and improving overall development velocity and application reliability.'
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

