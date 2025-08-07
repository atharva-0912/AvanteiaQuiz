import { Question } from '../types/quiz';

export const questions: Question[] = [
  // Web Development Questions
  {
    id: 1,
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correct: 0,
    level: 'beginner',
    course: 'web-development'
  },
  {
    id: 2,
    question: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "foreground-color"],
    correct: 2,
    level: 'beginner',
    course: 'web-development'
  },
  {
    id: 3,
    question: "What is the correct way to create a function in JavaScript?",
    options: ["function myFunction() {}", "create myFunction() {}", "function = myFunction() {}", "def myFunction() {}"],
    correct: 0,
    level: 'beginner',
    course: 'web-development'
  },
  {
    id: 4,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1,
    level: 'beginner',
    course: 'web-development'
  },
  {
    id: 5,
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correct: 2,
    level: 'beginner',
    course: 'web-development'
  },
  {
    id: 6,
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "add()", "append()", "insert()"],
    correct: 0,
    level: 'beginner',
    course: 'web-development'
  },
  {
    id: 7,
    question: "What is the correct HTML tag for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<header>"],
    correct: 2,
    level: 'beginner',
    course: 'web-development'
  },
  {
    id: 8,
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "text-style", "font-style", "text-weight"],
    correct: 0,
    level: 'beginner',
    course: 'web-development'
  },
  {
    id: 9,
    question: "What is the correct way to comment in HTML?",
    options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "# This is a comment"],
    correct: 2,
    level: 'beginner',
    course: 'web-development'
  },
  {
    id: 10,
    question: "Which JavaScript method is used to select an element by its ID?",
    options: ["getElementById()", "selectById()", "getElement()", "findById()"],
    correct: 0,
    level: 'beginner',
    course: 'web-development'
  },
  {
    id: 11,
    question: "What is React?",
    options: ["A database", "A JavaScript library for building user interfaces", "A CSS framework", "A web server"],
    correct: 1,
    level: 'level1',
    course: 'web-development'
  },
  {
    id: 12,
    question: "What is the purpose of the 'useState' hook in React?",
    options: ["To manage component state", "To handle HTTP requests", "To style components", "To create routes"],
    correct: 0,
    level: 'level1',
    course: 'web-development'
  },
  {
    id: 13,
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Automated Programming Interface"],
    correct: 0,
    level: 'level1',
    course: 'web-development'
  },
  {
    id: 14,
    question: "Which HTTP method is used to retrieve data?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correct: 2,
    level: 'level1',
    course: 'web-development'
  },
  {
    id: 15,
    question: "What is Bootstrap?",
    options: ["A JavaScript framework", "A CSS framework", "A database", "A web server"],
    correct: 1,
    level: 'level1',
    course: 'web-development'
  },
  {
    id: 16,
    question: "What is the purpose of webpack?",
    options: ["To style web pages", "To bundle JavaScript modules", "To create databases", "To host websites"],
    correct: 1,
    level: 'level1',
    course: 'web-development'
  },
  {
    id: 17,
    question: "What is Node.js?",
    options: ["A web browser", "A JavaScript runtime for server-side development", "A CSS preprocessor", "A database"],
    correct: 1,
    level: 'level1',
    course: 'web-development'
  },
  {
    id: 18,
    question: "What is the purpose of npm?",
    options: ["To style web pages", "To manage JavaScript packages", "To create databases", "To host websites"],
    correct: 1,
    level: 'level1',
    course: 'web-development'
  },
  {
    id: 19,
    question: "What is SASS?",
    options: ["A JavaScript framework", "A CSS preprocessor", "A database", "A web server"],
    correct: 1,
    level: 'level1',
    course: 'web-development'
  },
  {
    id: 20,
    question: "What is the purpose of Git?",
    options: ["To style web pages", "To manage code versions", "To create databases", "To host websites"],
    correct: 1,
    level: 'level1',
    course: 'web-development'
  },
  {
    id: 21,
    question: "What is GraphQL?",
    options: ["A database", "A query language for APIs", "A CSS framework", "A web server"],
    correct: 1,
    level: 'level2',
    course: 'web-development'
  },
  {
    id: 22,
    question: "What is the purpose of Docker in web development?",
    options: ["To style web pages", "To containerize applications", "To create databases", "To manage versions"],
    correct: 1,
    level: 'level2',
    course: 'web-development'
  },
  {
    id: 23,
    question: "What is microservices architecture?",
    options: ["A single large application", "Multiple small, independent services", "A database design pattern", "A CSS methodology"],
    correct: 1,
    level: 'level2',
    course: 'web-development'
  },
  {
    id: 24,
    question: "What is Progressive Web App (PWA)?",
    options: ["A mobile app", "A web app with native app features", "A desktop application", "A database"],
    correct: 1,
    level: 'level2',
    course: 'web-development'
  },
  {
    id: 25,
    question: "What is Server-Side Rendering (SSR)?",
    options: ["Rendering on the client", "Rendering on the server before sending to client", "Rendering in the database", "Rendering in the browser cache"],
    correct: 1,
    level: 'level2',
    course: 'web-development'
  },
  {
    id: 26,
    question: "What is WebAssembly?",
    options: ["A JavaScript framework", "A binary instruction format for web browsers", "A CSS preprocessor", "A database"],
    correct: 1,
    level: 'level2',
    course: 'web-development'
  },
  {
    id: 27,
    question: "What is the purpose of a Content Delivery Network (CDN)?",
    options: ["To store user data", "To deliver content faster globally", "To manage databases", "To create web pages"],
    correct: 1,
    level: 'level2',
    course: 'web-development'
  },
  {
    id: 28,
    question: "What is OAuth?",
    options: ["A database", "An authorization framework", "A CSS framework", "A web server"],
    correct: 1,
    level: 'level2',
    course: 'web-development'
  },
  {
    id: 29,
    question: "What is the purpose of load balancing?",
    options: ["To style web pages", "To distribute incoming requests across multiple servers", "To create databases", "To manage versions"],
    correct: 1,
    level: 'level2',
    course: 'web-development'
  },
  {
    id: 30,
    question: "What is Kubernetes?",
    options: ["A database", "A container orchestration platform", "A CSS framework", "A web browser"],
    correct: 1,
    level: 'level2',
    course: 'web-development'
  },

  // Blockchain Questions
  {
    id: 31,
    question: "What is a blockchain?",
    options: ["A type of database", "A distributed ledger technology", "A programming language", "A web framework"],
    correct: 1,
    level: 'beginner',
    course: 'blockchain'
  },
  {
    id: 32,
    question: "What is Bitcoin?",
    options: ["A company", "A cryptocurrency", "A programming language", "A database"],
    correct: 1,
    level: 'beginner',
    course: 'blockchain'
  },
  {
    id: 33,
    question: "What is a hash function in blockchain?",
    options: ["A type of loop", "A mathematical function that converts input to fixed-size string", "A database query", "A web API"],
    correct: 1,
    level: 'beginner',
    course: 'blockchain'
  },
  {
    id: 34,
    question: "What is mining in blockchain?",
    options: ["Extracting gold", "Process of validating transactions and adding them to blockchain", "Creating websites", "Managing databases"],
    correct: 1,
    level: 'beginner',
    course: 'blockchain'
  },
  {
    id: 35,
    question: "What is a cryptocurrency wallet?",
    options: ["A physical wallet", "A digital tool to store and manage cryptocurrencies", "A bank account", "A credit card"],
    correct: 1,
    level: 'beginner',
    course: 'blockchain'
  },
  {
    id: 36,
    question: "What does 'decentralized' mean in blockchain?",
    options: ["Controlled by one entity", "Not controlled by a single central authority", "Located in one place", "Managed by banks"],
    correct: 1,
    level: 'beginner',
    course: 'blockchain'
  },
  {
    id: 37,
    question: "What is a block in blockchain?",
    options: ["A physical object", "A collection of transactions", "A type of code", "A database table"],
    correct: 1,
    level: 'beginner',
    course: 'blockchain'
  },
  {
    id: 38,
    question: "What is Ethereum?",
    options: ["A type of Bitcoin", "A blockchain platform for smart contracts", "A mining tool", "A wallet"],
    correct: 1,
    level: 'beginner',
    course: 'blockchain'
  },
  {
    id: 39,
    question: "What is a private key?",
    options: ["A password for email", "A secret key used to access cryptocurrency", "A type of blockchain", "A mining algorithm"],
    correct: 1,
    level: 'beginner',
    course: 'blockchain'
  },
  {
    id: 40,
    question: "What is a public key?",
    options: ["A password everyone knows", "A cryptographic key that can be shared publicly", "A type of blockchain", "A mining tool"],
    correct: 1,
    level: 'beginner',
    course: 'blockchain'
  },

  // Add more questions for other courses and levels...
  // Cybersecurity Questions
  {
    id: 41,
    question: "What does cybersecurity protect against?",
    options: ["Physical theft", "Digital attacks and threats", "Natural disasters", "Power outages"],
    correct: 1,
    level: 'beginner',
    course: 'cybersecurity'
  },
  {
    id: 42,
    question: "What is a firewall?",
    options: ["A physical wall", "A network security system", "A type of virus", "A password manager"],
    correct: 1,
    level: 'beginner',
    course: 'cybersecurity'
  },
  {
    id: 43,
    question: "What is malware?",
    options: ["Good software", "Malicious software", "Hardware component", "Network protocol"],
    correct: 1,
    level: 'beginner',
    course: 'cybersecurity'
  },
  {
    id: 44,
    question: "What is phishing?",
    options: ["Catching fish", "Fraudulent attempt to obtain sensitive information", "Network monitoring", "Data backup"],
    correct: 1,
    level: 'beginner',
    course: 'cybersecurity'
  },
  {
    id: 45,
    question: "What is a strong password?",
    options: ["123456", "password", "A complex combination of letters, numbers, and symbols", "Your name"],
    correct: 2,
    level: 'beginner',
    course: 'cybersecurity'
  },
  {
    id: 46,
    question: "What is two-factor authentication?",
    options: ["Using two passwords", "Additional security layer beyond password", "Two different browsers", "Two computers"],
    correct: 1,
    level: 'beginner',
    course: 'cybersecurity'
  },
  {
    id: 47,
    question: "What is encryption?",
    options: ["Deleting data", "Converting data into coded form", "Copying data", "Storing data"],
    correct: 1,
    level: 'beginner',
    course: 'cybersecurity'
  },
  {
    id: 48,
    question: "What is a VPN?",
    options: ["Very Private Network", "Virtual Private Network", "Verified Public Network", "Visual Programming Network"],
    correct: 1,
    level: 'beginner',
    course: 'cybersecurity'
  },
  {
    id: 49,
    question: "What is social engineering?",
    options: ["Building bridges", "Manipulating people to divulge information", "Software engineering", "Network engineering"],
    correct: 1,
    level: 'beginner',
    course: 'cybersecurity'
  },
  {
    id: 50,
    question: "What should you do if you suspect a security breach?",
    options: ["Ignore it", "Report it immediately", "Try to fix it yourself", "Wait and see"],
    correct: 1,
    level: 'beginner',
    course: 'cybersecurity'
  },

  // Digital Marketing Questions
  {
    id: 51,
    question: "What is digital marketing?",
    options: ["Traditional advertising", "Marketing using digital channels", "Selling digital products", "Computer programming"],
    correct: 1,
    level: 'beginner',
    course: 'digital-marketing'
  },
  {
    id: 52,
    question: "What does SEO stand for?",
    options: ["Search Engine Optimization", "Social Engine Optimization", "Search Engine Operation", "Social Engine Operation"],
    correct: 0,
    level: 'beginner',
    course: 'digital-marketing'
  },
  {
    id: 53,
    question: "What is social media marketing?",
    options: ["Selling social media platforms", "Marketing through social media platforms", "Creating social networks", "Programming social apps"],
    correct: 1,
    level: 'beginner',
    course: 'digital-marketing'
  },
  {
    id: 54,
    question: "What is email marketing?",
    options: ["Creating email software", "Sending promotional emails to customers", "Managing email servers", "Designing email interfaces"],
    correct: 1,
    level: 'beginner',
    course: 'digital-marketing'
  },
  {
    id: 55,
    question: "What is content marketing?",
    options: ["Selling content", "Creating valuable content to attract customers", "Managing website content", "Programming content systems"],
    correct: 1,
    level: 'beginner',
    course: 'digital-marketing'
  },
  {
    id: 56,
    question: "What is PPC advertising?",
    options: ["Pay Per Click", "Pay Per Customer", "Pay Per Content", "Pay Per Campaign"],
    correct: 0,
    level: 'beginner',
    course: 'digital-marketing'
  },
  {
    id: 57,
    question: "What is a conversion rate?",
    options: ["Currency exchange rate", "Percentage of visitors who take desired action", "Website loading speed", "Social media followers"],
    correct: 1,
    level: 'beginner',
    course: 'digital-marketing'
  },
  {
    id: 58,
    question: "What is Google Analytics?",
    options: ["A search engine", "A web analytics service", "A social media platform", "An email service"],
    correct: 1,
    level: 'beginner',
    course: 'digital-marketing'
  },
  {
    id: 59,
    question: "What is a landing page?",
    options: ["Homepage of a website", "Specific page designed for marketing campaign", "Contact page", "About page"],
    correct: 1,
    level: 'beginner',
    course: 'digital-marketing'
  },
  {
    id: 60,
    question: "What is influencer marketing?",
    options: ["Marketing to influential people", "Using influential people to promote products", "Creating influence", "Managing influences"],
    correct: 1,
    level: 'beginner',
    course: 'digital-marketing'
  },
  // AI Questions
  {
    id: 101,
    question: "What does AI stand for?",
    options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Applied Intelligence"],
    correct: 1,
    level: 'beginner',
    course: 'ai'
  },
  {
    id: 102,
    question: "What is machine learning?",
    options: ["A type of computer", "A subset of AI that learns from data", "A programming language", "A database"],
    correct: 1,
    level: 'beginner',
    course: 'ai'
  },
  {
    id: 103,
    question: "What is a neural network?",
    options: ["A computer network", "A computing system inspired by biological neural networks", "A type of database", "A web framework"],
    correct: 1,
    level: 'beginner',
    course: 'ai'
  },
  {
    id: 104,
    question: "What is supervised learning?",
    options: ["Learning with a teacher present", "Learning from labeled training data", "Learning without any data", "Learning from books"],
    correct: 1,
    level: 'beginner',
    course: 'ai'
  },
  {
    id: 105,
    question: "What is unsupervised learning?",
    options: ["Learning without supervision", "Learning from unlabeled data to find patterns", "Learning from textbooks", "Learning with errors"],
    correct: 1,
    level: 'beginner',
    course: 'ai'
  },
  {
    id: 106,
    question: "What is deep learning?",
    options: ["Learning deeply about a subject", "A subset of ML using neural networks with multiple layers", "Learning underwater", "Learning for a long time"],
    correct: 1,
    level: 'beginner',
    course: 'ai'
  },
  {
    id: 107,
    question: "What is natural language processing (NLP)?",
    options: ["Processing natural resources", "AI field focused on interaction between computers and human language", "A type of programming", "A database technology"],
    correct: 1,
    level: 'beginner',
    course: 'ai'
  },
  {
    id: 108,
    question: "What is computer vision?",
    options: ["A computer's eyesight", "AI field that enables computers to interpret visual information", "A type of monitor", "A graphics card"],
    correct: 1,
    level: 'beginner',
    course: 'ai'
  },
  {
    id: 109,
    question: "What is an algorithm?",
    options: ["A type of computer", "A set of rules or instructions for solving problems", "A programming language", "A database"],
    correct: 1,
    level: 'beginner',
    course: 'ai'
  },
  {
    id: 110,
    question: "What is training data?",
    options: ["Data for physical training", "Data used to teach machine learning models", "Data about trains", "Data storage"],
    correct: 1,
    level: 'beginner',
    course: 'ai'
  }
];