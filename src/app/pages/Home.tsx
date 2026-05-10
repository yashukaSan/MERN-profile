import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Code2, Database, Server, Layers, Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { GeometricShapes } from "../components/GeometricShapes";
import { projects } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  // Initialize dark mode
  if (typeof window !== "undefined" && !document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.add("dark");
  }

  const skills = [
    { name: "React", icon: Code2, level: "Advanced" },
    { name: "Node.js", icon: Server, level: "Advanced" },
    { name: "MongoDB", icon: Database, level: "Intermediate" },
    { name: "Express", icon: Layers, level: "Advanced" },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "S.R. College of Professional Studies",
      period: "2024 - 2027",
      description: "Focused on Software Engineering, Data Structures, and Web Technologies.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "kendriya vidyalaya Datia",
      period: "2022 - 2024",
      description: "Science stream with focus on Mathematics and Computer Science.",
    },
  ];

  const extraCurriculars = [
    {
      title: "Design Coordinator - Panache 2026",
      description: "Led a team of designers for the college's flagship cultural event. Managed asset creation, branding, and visual communication across all event materials.",
      skills: ["Leadership", "Design Management", "Team Coordination"],
    },
    {
      title: "Technical Event Organizer",
      description: "Organized and coordinated multiple technical workshops and hackathons, facilitating knowledge sharing and skill development among peers.",
      skills: ["Event Management", "Public Speaking", "Technical Integration"],
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects, focusing on web development tools and libraries.",
      skills: ["Collaboration", "Code Review", "Documentation"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <GeometricShapes />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block text-foreground/90">MERN Stack</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                Software Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Building scalable web solutions with modern technologies and best practices
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 backdrop-blur-lg bg-card/50 border border-cyan-500/50 text-foreground rounded-lg hover:bg-card/70 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="backdrop-blur-lg bg-card/30 border border-border/50 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I'm a passionate MERN stack developer dedicated to building scalable and efficient web applications. 
                With a strong foundation in MongoDB, Express.js, React, and Node.js, I create full-stack solutions 
                that solve real-world problems.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Currently seeking opportunities to gain practical industry experience and contribute to innovative 
                projects. I'm eager to collaborate with teams that value clean code, modern development practices, 
                and continuous learning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 md:px-8 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative backdrop-blur-lg bg-card/40 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <skill.icon className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <p className="text-sm text-foreground/60">{skill.level}</p>
                  </div>
                  <div className="absolute inset-0 rounded-2xl shadow-lg shadow-cyan-500/0 group-hover:shadow-cyan-500/20 transition-shadow" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            {/* Desktop & Tablet - Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-teal-500" />
              
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="backdrop-blur-lg bg-card/40 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
                        <h3 className="text-xl font-bold mb-2">Design Coordinator</h3>
                        <p className="text-cyan-400 mb-3">Panache 2026 • College Event</p>
                        <p className="text-foreground/70">
                          Led design team, managed asset creation and branding for the flagship cultural event. 
                          Coordinated with multiple teams to ensure consistent visual communication.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 w-4 h-4 bg-cyan-500 rounded-full -ml-2 border-4 border-background" />
                    <div className="w-1/2 pl-8">
                      <p className="text-foreground/60">January 2026 - March 2026</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mobile - Block Design */}
            <div className="md:hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="backdrop-blur-lg bg-card/40 border border-cyan-500/20 rounded-2xl p-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Design Coordinator</h3>
                    <p className="text-cyan-400 text-sm mb-2">Panache 2026 • College Event</p>
                    <p className="text-foreground/60 text-sm mb-3">January 2026 - March 2026</p>
                  </div>
                </div>
                <p className="text-foreground/70">
                  Led design team, managed asset creation and branding for the flagship cultural event. 
                  Coordinated with multiple teams to ensure consistent visual communication.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="py-24 px-4 md:px-8 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            {/* Desktop - Horizontal Scroll */}
            <div className="hidden lg:block">
              <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                {projects.slice(0, 3).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex-shrink-0 w-96"
                  >
                    <Link to={`/projects/${project.id}`}>
                      <div className="group backdrop-blur-lg bg-card/40 border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all h-full">
                        <div className="aspect-video overflow-hidden">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* View All Projects Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex-shrink-0 w-96"
                >
                  <Link to="/projects">
                    <div className="backdrop-blur-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-2xl h-full flex items-center justify-center p-12 hover:border-cyan-500/50 transition-all group">
                      <div className="text-center">
                        <ArrowRight className="w-16 h-16 text-cyan-400 mb-4 mx-auto group-hover:translate-x-2 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2">View All Projects</h3>
                        <p className="text-foreground/70">Explore my complete portfolio</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Tablet & Mobile - 2x2 Grid */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/projects/${project.id}`}>
                    <div className="group backdrop-blur-lg bg-card/40 border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all h-full">
                      <div className="aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-foreground/70 mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
              
              {/* View All Projects Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link to="/projects">
                  <div className="backdrop-blur-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-2xl h-full flex items-center justify-center p-12 hover:border-cyan-500/50 transition-all group min-h-[300px]">
                    <div className="text-center">
                      <ArrowRight className="w-16 h-16 text-cyan-400 mb-4 mx-auto group-hover:translate-x-2 transition-transform" />
                      <h3 className="text-2xl font-bold mb-2">View All Projects</h3>
                      <p className="text-foreground/70">Explore my complete portfolio</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="backdrop-blur-lg bg-card/40 border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-xl font-bold mb-2 md:mb-0">{edu.degree}</h3>
                    <span className="text-cyan-400 text-sm">{edu.period}</span>
                  </div>
                  <p className="text-foreground/80 mb-2">{edu.institution}</p>
                  <p className="text-foreground/60">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extra-Curriculars Section */}
      <section className="py-24 px-4 md:px-8 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Extra-Curricular Activities
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extraCurriculars.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="backdrop-blur-lg bg-card/40 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
                >
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">{activity.title}</h3>
                  <p className="text-foreground/70 mb-4">{activity.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-4 md:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <a href="mailto:ysahu1590@gmail.com" className="flex items-center gap-3 text-foreground/70 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>ysahu1590@gmail.com</span>
                </a>
                <a href="https://github.com/yashukaSan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/70 hover:text-cyan-400 transition-colors">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/yogesh-s-12637232b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/70 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="space-y-2">
                <a href="#about" className="block text-foreground/70 hover:text-cyan-400 transition-colors">About</a>
                <a href="#skills" className="block text-foreground/70 hover:text-cyan-400 transition-colors">Skills</a>
                <a href="#experience" className="block text-foreground/70 hover:text-cyan-400 transition-colors">Experience</a>
                <Link to="/projects" className="block text-foreground/70 hover:text-cyan-400 transition-colors">Projects</Link>
                <a href="#education" className="block text-foreground/70 hover:text-cyan-400 transition-colors">Education</a>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                About This Portfolio
              </h3>
              <p className="text-foreground/70">
                Built with React, TypeScript, and Tailwind CSS. Featuring modern design principles, 
                glassmorphism effects, and smooth animations.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-center text-foreground/60">
            <p>© 2026 MERN Stack Developer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
