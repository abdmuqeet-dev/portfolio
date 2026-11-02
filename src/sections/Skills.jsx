import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = {
    'Programming Languages': [
      'Python', 'C', 'C++', 'C#', 'Java', 'Go', 'SQL', 'TypeScript', 'JavaScript',
      'Bash / Shell', 'HTML/CSS', 'PowerShell', 'Solidity'
    ],
    'Generative & Agentic AI': [
      'Agentic AI', 'LLM Orchestration', 'RAG', 'Model Context Protocol (MCP)',
      'LLM Intent Routing', 'LLM Function Calling', 'Prompt Engineering',
      'Human-in-the-Loop Workflows', 'AI Guardrails & Safety', 'Structured LLM Outputs'
    ],
    'LLM Evaluation & Quality': [
      'LLM Evaluation', 'Evaluation Harnesses', 'Deterministic Verdict Engines',
      'AI Regression Testing', 'Retrieval Quality Evaluation', 'Hallucination Mitigation',
      'Multi-Provider LLM Benchmarking', 'LLM Observability & Tracing'
    ],
    'AI Frameworks & Tools': [
      'LangChain', 'LlamaIndex', 'Claude Code', 'Codex', 'Streamlit', 'FastMCP',
      'Gemini Live API', 'Anthropic API', 'Google Lyria API'
    ],
    'Machine Learning & NLP': [
      'Machine Learning', 'NLP', 'scikit-learn', 'NLTK', 'TF-IDF', 'Naïve Bayes',
      'Embeddings', 'Semantic Search', 'Feature Engineering'
    ],
    'Vector Search & Retrieval': [
      'Vector Databases', 'HCL Informix VectorBlade', 'FAISS', 'ChromaDB',
      'Metadata-Filtered Retrieval', 'Hybrid Retrieval', 'Document Chunking & Ingestion'
    ],
    'Backend Engineering': [
      'REST APIs', 'FastAPI', 'Microservices', 'Event-Driven Systems',
      'Distributed Systems', 'Asynchronous Programming', 'RBAC', 'Low-Latency Systems',
      'Third-Party API Integration'
    ],
    'Systems & Database Internals': [
      'Data Structures & Algorithms', 'System Design', 'Operating Systems', 'Concurrency',
      'Memory Management', 'Core Dump Analysis', 'Root Cause Analysis',
      'Query Processing & Optimization', 'Transaction Logging & Recovery', 'Buffer Pool / I/O'
    ],
    Databases: ['IBM/HCL Informix', 'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
    'Full-Stack & Web': [
      'React', 'Node.js', 'Express.js', 'Angular', 'Spring', 'Hibernate', '.NET 8',
      'EF Core', 'Three.js', 'Responsive UI'
    ],
    'Cloud & DevOps': [
      'AWS', 'Azure', 'GCP', 'Oracle Cloud (OCI)', 'Docker', 'Kubernetes', 'Databricks',
      'Git', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Linux/Unix'
    ],
    'Data Engineering & Big Data': [
      'ETL', 'JSON & XML Processing', 'Data Cleaning & Transformation', 'Hadoop',
      'Apache Spark', 'HBase'
    ],
    'Testing & QA': [
      'pytest', 'Unit & Integration Testing', 'Regression Testing', 'API Testing',
      'Test Automation', 'Defect Triage', 'Performance Testing'
    ],
    Blockchain: ['Solidity', 'Hardhat', 'Truffle', 'Ethers.js', 'Web3.js', 'ERC-721'],
    'Certifications & Achievements': [
      'Anthropic Certification: MCP & Claude Skills',
      'OCI Foundations & OCI AI Foundations Associate',
      'AWS Foundations of Prompt Engineering',
      'CCNA: Introduction to Networks',
      'PCAP: Python Programming Essentials',
      'Paper presented at 9th ICCM 2023 (Beebot)',
      'Google DeepMind Hackathon, UCLA',
      'FullyHacks 2026, CSUF'
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

