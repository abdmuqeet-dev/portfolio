export const projects = [
  {
    title: 'TARS – AI Database Performance Advisor for HCL Informix',
    description:
      'Enterprise AI advisor combining RAG, LLM orchestration, vector search, live telemetry (via MCP) and a deterministic diagnostics engine to give grounded, cited tuning recommendations. Indexed 46,314 chunks from 11,000+ pages of Informix docs in VectorBlade, with an LLM intent router, a pluggable OpenAI/Claude/Gemini layer, Streamlit UI + CLI, Dockerized MCP servers and 90+ passing pytest tests.',
    tech: ['Python', 'RAG', 'LLMs', 'MCP', 'FastMCP', 'Informix VectorBlade', 'Streamlit', 'PyMuPDF', 'Docker', 'pytest'],
    github: '',
    link: ''
  },
  {
    title: 'AsthmaCare',
    description:
      'Patient-centric asthma management platform using multimodal AI: a Gemini Live voice SOS companion with barge-in (<300 ms latency) guiding the 4x4x4 inhaler protocol, Lyria-generated breathing soundscapes synced with 4-7-8 animations, and an AQI/pollen 3D city visualizer. Go Fiber + PostgreSQL backend with real-time streaming.',
    tech: ['Go (Fiber)', 'PostgreSQL', 'Vanilla JS', 'Gemini Live', 'Lyria', 'Nano Banana'],
    github: '',
    link: ''
  },
  {
    title: 'CSUF 3D NFT Marketplace',
    description:
      'Decentralized app pairing a 3D digital twin of the CSUF campus with an Ethereum marketplace. OpenZeppelin ERC-721 contracts deployed with Hardhat support minting, peer-to-peer listings and escrowed timed auctions, with procedural on-chain SVG art. React Three Fiber client holds 60 FPS across 10+ landmarks.',
    tech: ['Solidity', 'React', 'Three.js', 'React Three Fiber', 'Hardhat', 'Ethers.js', 'Zustand', 'Vite'],
    github: '',
    link: ''
  },
  {
    title: 'Study Buddy – Hybrid AI Academic Assistant',
    description:
      'Academic assistant with a hybrid retrieval engine that separates deterministic structured data (schedules, grades) from unstructured notes to avoid hallucinations. Query routing, ChromaDB with Gemini embeddings, Llama 3.3 70B on Groq, strict source attribution and a live CRUD sidebar.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'Google Gemini', 'Groq (Llama 3.3)', 'Streamlit'],
    github: '',
    link: ''
  },
  {
    title: 'DoodleMagic AI',
    description:
      'Sketch-to-art web app that turns freehand doodles into 512×512 artwork using ControlNet Scribble and Stable Diffusion behind an Express reverse proxy. Includes an HTML5 Canvas drawing engine with undo history and an async polling service with cold-start recovery.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'HTML5 Canvas', 'ControlNet', 'Stable Diffusion'],
    github: '',
    link: ''
  },
  {
    title: 'CryptoZombie DApp – Ethereum NFT Game',
    description:
      'Full-stack Ethereum NFT game where users create, rename, transfer, burn and level up zombies (0.001 ETH per upgrade). ERC-721 contracts deployed with Truffle, Web3.js frontend, DNA-based procedural generation for unique assets and <2s confirmations on a Ganache/MetaMask setup.',
    tech: ['Solidity', 'Truffle', 'Web3.js', 'HTML/CSS/JS', 'Ganache', 'MetaMask'],
    github: '',
    link: ''
  },
  {
    title: 'One-Button Chaos Game',
    description:
      'Browser arcade game mapping every action to a single input, with a finite state machine hot-swapping five mechanics (Jump, Flappy, Shoot, Gravity Flip, Dash) every 10 seconds. Custom 2D physics, AABB collisions, procedural difficulty and a zero-asset Web Audio sound engine at 60 FPS.',
    tech: ['JavaScript (ES6+)', 'HTML5 Canvas', 'Web Audio API', 'Vite', 'CSS3'],
    github: '',
    link: ''
  },
  {
    title: 'Deep Dive – 2.5D Arcade Survival Game',
    description:
      'Pseudo-3D ocean survival game built with vanilla JavaScript and Canvas: perspective projection that scales velocity, geometry and fog by depth, a Painter\'s Algorithm render loop, a zero-dependency particle engine and delta-time updates for a locked 60 FPS.',
    tech: ['JavaScript (ES6+)', 'HTML5 Canvas', 'CSS3', 'Vector Math'],
    github: '',
    link: ''
  },
  {
    title: 'Stock News Sentiment Analysis System',
    description:
      'Sentiment classifier using Multinomial Naïve Bayes and TF-IDF bigrams trained on 65K+ financial news articles, served through a FastAPI REST API with a web UI and Chrome extension for real-time headline analysis. 80%+ accuracy, <300 ms inference, 1K+ headlines/min.',
    tech: ['Python', 'FastAPI', 'Naïve Bayes', 'TF-IDF', 'NLP', 'Chrome Extension', 'HTML/CSS/JS'],
    github: '',
    link: ''
  },
  {
    title: 'Advanced Chatbot: Beebot',
    description:
      'Conversational AI with ML-based intent classification, NLP keyword extraction and speech-to-text / text-to-speech, plus context management and user preference modeling. 92% intent accuracy and <500 ms latency. Presented at the 9th ICCM 2023.',
    tech: ['Python', 'NLTK', 'speech_recognition', 'Pyttsx3', 'RAKE', 'Naïve Bayes'],
    github: '',
    link: ''
  },
  {
    title: 'Study Material Organizer',
    description:
      'Role-based Android app (Xamarin) with a Node.js REST API and MongoDB, featuring secure auth, access control and CRUD for students and lecturers. Indexed queries cut search time by 75% across 1,000+ uploads and 200+ users.',
    tech: ['C#', 'Xamarin', 'Node.js', 'MongoDB'],
    github: '',
    link: ''
  },
  {
    title: 'Hospital Management & Recommendation System',
    description:
      'Healthcare app that validates patient demographics, symptoms and location data in normalized SQLite tables and recommends facilities using rule-based logic and distance matching. Cut lookup time by 70% with 85% recommendation accuracy over 500+ records.',
    tech: ['Python', 'Tkinter', 'SQLite'],
    github: '',
    link: ''
  },
  {
    title: 'Spell Checker',
    description:
      'Tkinter spell checker with live word suggestions and batch document scanning, combining TextBlob, PySpellChecker and JamSpell. 90%+ correction accuracy at 1,000+ words/sec, reducing manual proofreading effort by 60%.',
    tech: ['Python', 'Tkinter', 'TextBlob', 'PySpellChecker', 'JamSpell'],
    github: '',
    link: ''
  }
];
