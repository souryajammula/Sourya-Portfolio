import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";

export const HERO_CONTENT = `Hello and Namaste! I'm Sourya, a dedicated and innovative Software Engineer with over three years of experience in both frontend and backend development. I hold a Master of Science in Computer Software Engineering from San Jose State University, and a Bachelor of Technology in Computer Science from Amrita Vishwa Vidyapeetham. My expertise lies in developing and deploying scalable, high-performance applications.`;

export const ABOUT_TEXT = `With a strong foundation in technologies like Java, Python, React.js, and Spring Boot, I excel at building responsive, efficient, and user-friendly applications. Below are the skills I have honed over the years through industry experience and academic projects:

- Frontend Technologies: React.js, HTML, CSS, Tailwind CSS, Material-UI
- Backend and Middleware: Node.js, Express.js, Java-based microservices, Spring Boot, Apache Camel
- Data Management and Performance Optimization: Redis, Kafka, MySQL, PostgreSQL
- Cloud and DevOps: AWS, Docker, Kubernetes, Jenkins, Terraform
- Automation and Testing: Selenium, JUnit, Jest

Throughout my career, I've worked on impactful projects like developing a web app for Nordea Bank to manage employee data, creating "Credit Insights" for Deutsche Bank, and leading a web scraping project for Amazon that significantly enhanced customer satisfaction.`;

export const EXPERIENCES = [
  {
    year: "May 2021 - July 2022",
    role: "Software Engineer, Full Stack",
    company: "Tata Consultancy Services (TCS)",
    description: `Developed a web app for Nordea Bank to manage employee data using React (frontend), Node.js, Express.js, Microservices and
integrated IBM's Information Governance Catalog for enhanced data governance.
Reduced response time by 50% for a data governance app using Redis, and designed a Kafka-based pipeline to ingest and distribute
employee data in real-time, enhancing data retrieval speed and system responsiveness.
Implemented Java-based microservices to convert employee CSV data and lineage data between assets into POJOs and XML using
Apache Camel, automating metadata updates in IBM's IGC Tool via REST APIs, reducing manual workload by 90%.
Deployed microservices to AWS (AKS) using Docker for containerization and Kubernetes for orchestration, resulting in a 40% reduction
in operational costs and annual savings.
Automated the build, test, and deployment process with Jenkins CI/CD pipelines, leveraging AKS auto-scaling and right-sizing VM
instances to enhance resource efficiency and reliability.
Implemented comprehensive test automation frameworks using Selenium and JUnit, achieving full coverage for unit, integration, and
end-to-end tests.`,
    technologies: ["ReactJs", "NodeJS", "Microservices", "Redis", "Apache Kafka", "Apache Camel", "XML", "Amazon EKS", "Jenkins", "Selenium", "JUnit"],
  },
  {
    year: "Feb 2021 - May 2021",
    role: "Software Engineer Intern",
    company: "Tata Consultancy Services (TCS)",
    description: `Created "Credit Insights," a CRUD application, using React, HTML/CSS, Spring Boot, Microservice architecture, Spring Data JPA,
and Docker for deployment, aiding the Deutsche Bank team.Implemented caching in a Spring Boot application using Redis to enhance performance by reducing database load by 50%.Deployed the application using AWS EC2 instances for scalable compute resources, AWS RDS for reliable and managed database
services, and VPC networks for secure and isolated networking. This included configuring security groups, subnets, and routing
tables to ensure secure and efficient network communication.
    `,
    technologies: ["React.js", "Microservice", "SpringBoot", "HTML5", "CSS", "Spring Data JPA", "Redis", "Amazon RDS", "Amazon EC2", "Amazon VPC"],
  },
  {
    year: "June 2019 - Jan 2020",
    role: "Student Intern",
    company: "Acceleron Labs",
    description: `Led a Python and Selenium, Beautiful Soup web scraping project for Amazon, which included the integration of SOAP APIs. This project
boosted timely notifications by 15% for price drops, resulting in a 25% rise in customer satisfaction and repeat purchases.
Utilized advanced Bash scripting and Linux commands to automate tasks such as scheduling scraping jobs with cron and processing data
files, significantly enhancing operational efficiency and system performance.
Utilized web-scraped data to analyze data stored in multiple MySQL database tables using AWS RDS. Utilized AWS Glue to extract,
transform, and load data, and Amazon QuickSight to visualize trends and insights. This analysis helped increase sales coverage by 7%
    `,
    technologies: ["Web Scraping", "Selenium", "Soap UI", "Bash", "Linux", "MySQL","Amazon QuickSight", "Amazon Glue"],
  },
];

export const PROJECTS = [
  {
    title: "CanvasCatalyst - a plugin for open-source Canvas LMS",
    image: project6,
    description:
      "Collaborated with a team of 3 to develop a microservice to compare metrics of students using Spark, PostgreSQL, Canvas API and provided campus resource recommendations to students to improve grades by 20%.Engineered mastery-grading system to automate letter-grade generation of 5+ grading schemes using Java, React.Integrated OAuth and JWT authentication to ensure security and safe handling of sensitive data.",
    technologies: ["SpringBoot", "Spark", "Canvas API", "Multi-threading", "Redis", "JWT Authentication", "AWS"],
  },
  {
    title: "Traffic Violation Repository - a Distributed System",
    image: project7,
    description:
      "Designed a distributed system to handle 40GB of traffic data using gRPC and a mesh topology, achieving enhanced system scalability and interoperability.Implemented a data replication mechanism with a factor of 2 using ZooKeeper and Raft, achieving high consistency.Developed a query processing module with custom time attribute indexing using distributed query execution, achieving a 40% improvement in search response times.",
    technologies: ["Distributed Systems", "ETL", "Raft Consensus", "Java", "SpringBoot"],
  },
  {
    title: "Whiteboard Sharing App",
    image: project1,
    description:
      "A fully functional whiteboard app with features like create room, join room, text chat, and shared canvas.",
    technologies: ["Node.js", "React.js", "CSS", "Socket.io", "Express"],
  },
  {
    title: "Kanban Board",
    image: project2,
    description:
      "An application for managing active projects and finished projects, with features such as project creation, drag and drop, and progress tracking.",
    technologies: ["HTML", "CSS", "TypeScript", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "GitHub Pages", "React.js", "TailwindCSS"],
  },
  {
    title: "Chat App",
    image: project4,
    description:
      "A platform for sending messages simultaneously, with features like sending emohjis, reacting on messages, instant message receiving, and user login.",
    technologies: ["HTML", "CSS", "React.js", "Node.js", "GraphQL"],
  },
  {
    title: "Sudoku App",
    image: project5,
    description:
      "A website for playing single player sudoku online",
    technologies: ["Redux", "Typescript", "React.js", "CSS"],
  }
];

export const CONTACT = {
  address: "190 Ryland St, San Jose, 95110",
  phoneNo: "+1 925-733-9904",
  email: "souryaprateek2000@gmail.com",
};
