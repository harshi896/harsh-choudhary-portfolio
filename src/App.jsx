import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Resume Data (Parsed from your provided resume)
const resumeData = {
  name: "Harsh Choudhary",
  contact: {
    phone: "+91 8875386315",
    email: "harshthi890@gmail.com",
    linkedin: "https://www.linkedin.com/in/harsh-choudhary-8569371a0/",
    github: "https://github.com/harshi896",
  },
  profileSummary: "B.Tech graduate from Arya College of Engineering and Research Center with expertise in Java, Python, Django, HTML, CSS, React.js, MongoDB, and Linux. Practical experience as a Linux intern, developing fullstack projects. Proven skills in data analysis, web development, and project management, with a strong commitment to delivering high-quality work.",
  education: [
    { degree: "B.Tech", institution: "Arya College Of Engineering And Research Center", years: "2019-2023" },
    { degree: "Intermediate (Science)", institution: "C.C.A School", years: "2018-2019" },
  ],
  technicalSkills: ["Java (OOPS, DSA)", "DBMS (SQL)", "Python", "Django", "HTML", "CSS", "React.Js", "MongoDB", "Linux"],
  softSkills: ["Communication", "Time-management", "Project Development"],
  experience: [
    {
      title: "Intern",
      company: "Keen and Able Computers Private Limited",
      duration: "March 2024 - September 2024",
      location: "Noida, UP",
      description: [
        "Started as a Linux intern, gaining hands-on experience with Linux server management and administration.",
        "Enhanced and maintained web applications, adhering to best practices in coding and development.",
        "Worked on fullstack development projects, collaborating with cross-functional teams.",
        "Key Achievement: Developed a fullstack blogging website using React.js, Django, and MongoDB, showcasing proficiency in frontend and backend technologies.",
      ],
    },
  ],
  projects: [
    {
      name: "Uber Data Analysis Using Python",
      description: "Analyzed Uber rides data from various cities to identify patterns and trends, utilizing Python libraries such as NumPy, Pandas, and Matplotlib. Responsibilities included collecting, cleaning, and preprocessing data, followed by conducting data analysis and creating visualizations. This project demonstrated proficiency in data analysis and visualization techniques.",
      link: "#", // Keep this as # or replace with GitHub repo if applicable
    },
    {
      name: "Spotit - Spotify Music Player App Clone",
      description: "Created and implemented a fully functional clone website of the Spotify Music Player App utilizing HTML, CSS, and JavaScript. Developed a visually appealing and user-friendly platform that closely resembles the Spotify Music Player interface. Showcased proficiency in web development by successfully designing and developing a clone website that showcases the passion for creating interactive and engaging digital experiences.",
      link: "#", // Keep this as # or replace with live demo link if you deploy it
    },
    {
      name: "Personal Portfolio Website",
      description: "Designed and developed this personal portfolio website using React, Vite, Tailwind CSS, and Framer Motion. This project showcases my ability to create visually appealing, responsive, and interactive web interfaces. It also highlights problem-solving skills through the integration and debugging process of modern front-end tools.",
      link: "https://harsh-choudhary-portfolio.vercel.app/", // <--- REPLACE THIS LINE with your actual live Vercel URL
    },
  ],
  certificates: [
    "Advanced Software Engineering Job Simulation for Walmart Global Tech by Forage",
    "FullStack Web Development Course by UDEMY",
    "My SQL Basics by Great Learning",
    "Java Programming by Great Learning",
  ],
  // IMPORTANT: For deployment, replace this with a publicly accessible URL to your PDF resume.
  // Example: "https://yourdomain.com/path/to/Harsh_Choudhary_Resume.pdf"
  // Or if hosted on GitHub: "https://github.com/your-username/your-repo/raw/main/path/to/Harsh_Choudhary_Resume.pdf"
  resumePath: "#", // Placeholder: You MUST update this with a public URL to your resume PDF.
};

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-purple-600 text-white rounded-full shadow-lg cursor-pointer hover:bg-purple-700 transition-colors duration-300 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
        >
          {/* SVG for arrow up icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};


// --- Main App Component ---
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Variants for Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-inter animate-gradient-xy"> {/* Added animate-gradient-xy class */}
      {/* Navbar */}
      <motion.nav
        className="fixed w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm p-4 shadow-lg rounded-b-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold text-purple-400">
            {resumeData.name.split(' ')[0]}<span className="text-white">.dev</span>
          </div>
          <ul className="flex space-x-6">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`relative text-lg font-medium transition-all duration-300 ease-in-out
                    ${activeSection === section ? 'text-purple-400' : 'text-gray-300 hover:text-purple-300'}
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-300
                    ${activeSection === section ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                  `}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
            {/* Resume Link: For deployment, replace 'resumeData.resumePath' with a publicly accessible URL to your PDF resume. */}
            <li>
              <a
                href={resumeData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Harsh_Choudhary_Resume.pdf" // Suggests a download filename
                className="relative text-lg font-medium transition-all duration-300 ease-in-out text-gray-300 hover:text-purple-300
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-300 after:w-0 hover:after:w-full"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-purple-800 to-indigo-900" // Static gradient background
      >
        <motion.div
          className="relative z-10 text-center bg-gray-800 bg-opacity-70 p-8 rounded-2xl shadow-2xl max-w-3xl border border-purple-600"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            variants={itemVariants}
          >
            Hi, I'm {resumeData.name}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-6"
            variants={itemVariants}
          >
            A passionate Fullstack Developer and Data Analyst.
          </motion.p>
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            variants={itemVariants}
          >
            View My Work
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-purple-400"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-purple-700"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="text-lg text-gray-300 leading-relaxed mb-6" variants={itemVariants}>
              {resumeData.profileSummary}
            </motion.p>
            <motion.h3 className="text-2xl font-semibold mb-4 text-purple-300" variants={itemVariants}>
              Education
            </motion.h3>
            <ul className="list-disc list-inside text-gray-300">
              {resumeData.education.map((edu, index) => (
                <motion.li key={index} className="mb-2" variants={itemVariants}>
                  <span className="font-medium">{edu.degree}</span> from {edu.institution} ({edu.years})
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-purple-400"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-purple-700"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 className="text-2xl font-semibold mb-6 text-purple-300" variants={itemVariants}>
                Technical Skills
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {resumeData.technicalSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
                    variants={itemVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-purple-700"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 className="text-2xl font-semibold mb-6 text-purple-300" variants={itemVariants}>
                Soft Skills
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {resumeData.softSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
                    variants={itemVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-purple-400"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>
          <div className="space-y-10">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-purple-700"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3 className="text-3xl font-bold text-purple-300 mb-2" variants={itemVariants}>
                  {exp.title}
                </motion.h3>
                <motion.p className="text-xl text-gray-200 mb-2" variants={itemVariants}>
                  {exp.company}
                </motion.p>
                <motion.p className="text-md text-gray-400 mb-4" variants={itemVariants}>
                  {exp.duration} | {exp.location}
                </motion.p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.description.map((point, i) => (
                    <motion.li key={i} variants={itemVariants}>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-purple-400"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeData.projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-purple-700 flex flex-col justify-between"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-3">{project.name}</h3>
                  <p className="text-gray-300 mb-4 text-base leading-relaxed">{project.description}</p>
                </div>
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
                  >
                    View Project
                  </a>
                )}
                {project.link === '#' && (
                  <span className="mt-4 inline-block bg-gray-600 text-gray-300 px-5 py-2 rounded-full text-sm font-semibold text-center cursor-not-allowed">
                    Link Not Available
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section (Optional, can be integrated into About or a separate section) */}
      <section id="certificates" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-purple-400"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Certificates
          </motion.h2>
          <motion.div
            className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-purple-700"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              {resumeData.certificates.map((cert, index) => (
                <motion.li key={index} className="text-lg" variants={itemVariants}>
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-4xl font-bold mb-12 text-purple-400"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-purple-700"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="text-lg text-gray-300 mb-6" variants={itemVariants}>
              Feel free to reach out to me for collaborations, questions, or just to say hello!
            </motion.p>
            <div className="space-y-4 mb-8">
              <motion.p className="text-xl text-gray-200" variants={itemVariants}>
                Email: <a href={`mailto:${resumeData.contact.email}`} className="text-purple-400 hover:underline">{resumeData.contact.email}</a>
              </motion.p>
              <motion.p className="text-xl text-gray-200" variants={itemVariants}>
                Phone: {resumeData.contact.phone}
              </motion.p>
            </div>
            <div className="flex justify-center space-x-6">
              <motion.a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors duration-300"
                variants={itemVariants}
              >
                {/* LinkedIn Icon (Placeholder - use actual SVG or Font Awesome if available) */}
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                href={resumeData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors duration-300"
                variants={itemVariants}
              >
                {/* GitHub Icon (Placeholder - use actual SVG or Font Awesome if available) */}
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.207 11.387.6.11.82-.26.82-.577v-2.234c-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.49.998.108-.775.418-1.305.762-1.605-2.665-.3-5.464-1.332-5.464-5.93 0-1.31.465-2.38 1.235-3.22-.12-.3-.535-1.52.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.4 3.003-.404 1.02.004 2.046.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.656.238 2.876.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.8 5.62-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.217.69.825.577C20.565 21.797 24 17.302 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm border-t border-gray-700">
          <div className="container mx-auto">
            &copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.
          </div>
        </footer>
        <ScrollToTopButton /> {/* Add the ScrollToTopButton component */}
      </div>
    );
    }
    