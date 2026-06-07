import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tech Icon Components (inline SVG)
const TechIcons = {
  React: () => (
    <svg viewBox="-11.5 -10.23 23 20.46" className="w-5 h-5" fill="#61DAFB">
      <circle r="2.05" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  NodeJS: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="#339933">
      <path d="M16 2L2 9.5v13L16 30l14-7.5v-13L16 2zm0 2.18l11.5 6.16v12.32L16 27.82 4.5 22.66V10.34L16 4.18z"/>
      <path d="M16 8a8 8 0 100 16A8 8 0 0016 8zm0 2a6 6 0 110 12A6 6 0 0116 10z"/>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="#47A248">
      <path d="M15.9.087l.854 1.604c.192.296.4.558.645.802a18.994 18.994 0 012.032 2.33c1.01 1.453 1.888 2.943 2.365 4.675.365 1.32.459 2.64.349 3.978-.33 3.996-2.033 7.357-4.87 10.16a8.356 8.356 0 01-.8.676c-.09-.514-.178-.995-.27-1.476-.118-.618-.349-1.18-.732-1.693-.507-.697-.98-1.412-1.337-2.196a6.762 6.762 0 01-.524-2.3 8.845 8.845 0 01.107-1.904c.245-1.328.8-2.509 1.476-3.64.154-.26.316-.514.474-.77l.027-.054a.747.747 0 00-.038.04c-.277.327-.54.66-.8 1-.54.72-1.052 1.458-1.453 2.265-.453.908-.732 1.864-.81 2.872a9.054 9.054 0 00.08 1.95c.186 1.17.59 2.254 1.15 3.288.124.23.256.455.392.677a9.12 9.12 0 01-.56.542c-.67.578-1.388 1.073-2.183 1.46a7.37 7.37 0 01-1.565.545c-.147.03-.296.054-.445.074a2.88 2.88 0 01-.387.024l-.007-.056c.31-.068.614-.15.912-.255a8.428 8.428 0 001.633-.793 9.447 9.447 0 001.428-1.167c-.124-.21-.248-.42-.365-.633a10.576 10.576 0 01-.994-2.613 9.07 9.07 0 01-.213-2.18c.03-1.17.272-2.293.738-3.363.374-.852.878-1.62 1.447-2.35.3-.385.612-.76.93-1.128l.073-.084A15.953 15.953 0 0116 12.087c-.023-1.454-.38-2.84-.972-4.156A15.796 15.796 0 0013.71 5.3c-.486-.62-1.01-1.207-1.559-1.776a14.04 14.04 0 01-.755-.888L11.16.59l.054-.1A.319.319 0 0111.3.4c.01-.007.02-.01.028-.018l.006.002c.037.027.07.057.098.09a1.84 1.84 0 01.144.235l.01.02c.073.137.143.277.213.416.337.667.67 1.336 1.057 1.975.492.81 1.03 1.587 1.657 2.3.576.656 1.2 1.264 1.912 1.782.154.112.316.214.474.323L16 7.22c.054-.03.104-.065.154-.1.16-.118.316-.24.47-.365.58-.47 1.098-1.002 1.573-1.578.554-.672 1.035-1.394 1.476-2.14.31-.53.604-1.066.9-1.6a2.43 2.43 0 01.225-.368.33.33 0 01.098-.09l.006-.002c.01.007.02.01.028.018a.306.306 0 01.09.114l.03.08L16 .087z"/>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <rect width="32" height="32" rx="3" fill="#F7DF1E"/>
      <path d="M20.809 23.875a2.866 2.866 0 002.6 1.6c1.09 0 1.787-.545 1.787-1.3 0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964 0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 013.742 2.107l-2.048 1.315a1.79 1.79 0 00-1.694-1.132 1.149 1.149 0 00-1.262 1.134c0 .794.49 1.115 1.622 1.603l.658.282c2.237.959 3.501 1.938 3.501 4.136 0 2.37-1.861 3.665-4.359 3.665a5.055 5.055 0 01-4.795-2.691zm-9.295.228c.412.733.787 1.352 1.685 1.352.861 0 1.405-.337 1.405-1.644V14.988h2.573v8.869c0 2.707-1.587 3.938-3.905 3.938a4.056 4.056 0 01-3.927-2.467z"/>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <defs>
        <linearGradient id="py1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387EB8"/>
          <stop offset="100%" stopColor="#366994"/>
        </linearGradient>
        <linearGradient id="py2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE052"/>
          <stop offset="100%" stopColor="#FFC331"/>
        </linearGradient>
      </defs>
      <path fill="url(#py1)" d="M15.9 3C9.5 3 9.9 5.8 9.9 5.8V8.7H16v1H7.2S3 9.2 3 15.7s3.7 6.3 3.7 6.3H8.9V18.8s-.1-3.7 3.6-3.7h6.2s3.5.1 3.5-3.4V6.6S22.8 3 15.9 3zm-3.4 2c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z"/>
      <path fill="url(#py2)" d="M16.1 29c6.4 0 6-.8 6-.8V26.3H16v-1h8.8s4.2.5 4.2-6-3.7-6.3-3.7-6.3H23.1v3.2s.1 3.7-3.6 3.7h-6.2s-3.5-.1-3.5 3.4v5.1S9.2 29 16.1 29zm3.4-2c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z"/>
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <rect width="32" height="32" rx="3" fill="#3178C6"/>
      <path fill="white" d="M18.245 23.759v2.007c.667.285 1.44.49 2.32.614a16.3 16.3 0 002.484.186c.84 0 1.637-.088 2.39-.265a5.8 5.8 0 001.93-.87 4.146 4.146 0 001.292-1.572c.315-.642.472-1.416.472-2.32 0-.672-.1-1.258-.3-1.757a4.05 4.05 0 00-.87-1.323 6.042 6.042 0 00-1.362-.997 16.572 16.572 0 00-1.793-.823 27.63 27.63 0 01-1.267-.523 5.54 5.54 0 01-.881-.5 1.97 1.97 0 01-.523-.556 1.33 1.33 0 01-.174-.683c0-.23.054-.438.162-.625a1.46 1.46 0 01.465-.484 2.364 2.364 0 01.742-.311 4.075 4.075 0 011-.104 6.2 6.2 0 01.916.07c.316.047.63.123.94.23.314.107.617.245.908.416.29.17.56.37.807.6V15.3a9.524 9.524 0 00-1.955-.476 14.39 14.39 0 00-2.09-.15 9.2 9.2 0 00-2.27.267 5.55 5.55 0 00-1.85.835 3.97 3.97 0 00-1.244 1.46 4.55 4.55 0 00-.453 2.09c0 1.033.285 1.912.855 2.637a6.5 6.5 0 002.562 1.736l1.3.523a9.75 9.75 0 011.012.485c.278.162.5.34.661.535.16.195.24.436.24.72 0 .235-.053.45-.159.645a1.42 1.42 0 01-.47.5 2.41 2.41 0 01-.77.32 4.36 4.36 0 01-1.053.115 6.54 6.54 0 01-2.104-.367 6.33 6.33 0 01-1.905-1.06zM13.088 14.46H17.5v-2.004H6v2.004h4.4V27h2.688z"/>
    </svg>
  ),
  HTML: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path fill="#E34F26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"/>
      <path fill="#EF652A" d="M16 27.858l8.17-2.265 1.922-21.532H16z"/>
      <path fill="#fff" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16zm0 8.027l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004z"/>
      <path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.218l6.337-1.755.046-.522.726-8.133.075-.838h-.83zm0-6.256v3.091h7.466l.062-.694.141-1.567.074-.83z"/>
    </svg>
  ),
  CSS: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path fill="#1572B6" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z"/>
      <path fill="#33A9DC" d="M16 27.858l8.17-2.265 1.922-21.532H16z"/>
      <path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.83-.759 8.517H16zM16 21.218l.014.004 3.442-.929.22-2.465h3.1l-.433 4.852-6.332 1.758-.014-.004z"/>
      <path fill="#ebebeb" d="M15.989 13.191v3.091h-3.806l.358 4.009 3.448.93v3.218l-6.337-1.755-.046-.522-.726-8.133-.075-.838h.83zm0-6.256v3.091H8.523l-.062-.694-.141-1.567-.074-.83z"/>
    </svg>
  ),
  Firebase: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path fill="#FFA000" d="M19.61 4.083l-7.646 13.45L8.35 11.76z"/>
      <path fill="#F57F17" d="M11.964 17.533l7.646-13.45 4.03 7.1z"/>
      <path fill="#FFCA28" d="M3.5 22.8l8.464-14.9 3.614 6.37z"/>
      <path fill="#FFA000" d="M28.5 22.8L16 2.717 3.5 22.8l12.5 6.483z"/>
      <path fill="#F57F17" d="M16 29.283L28.5 22.8l-7.576-13.317L16 14.6z"/>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 32 32" className="w-5 h-5">
      <path fill="#38BDF8" d="M16 6.4c-4.267 0-6.933 2.133-8 6.4 1.6-2.133 3.467-2.933 5.6-2.4 1.218.304 2.088 1.186 3.047 2.158C18.186 14.115 19.64 15.6 22.4 15.6c4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-1.218-.304-2.088-1.186-3.047-2.158C20.214 7.885 18.76 6.4 16 6.4zM8 15.6c-4.267 0-6.933 2.133-8 6.4 1.6-2.133 3.467-2.933 5.6-2.4 1.218.304 2.088 1.186 3.047 2.158C10.186 23.315 11.64 24.8 14.4 24.8c4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-1.218-.304-2.088-1.186-3.047-2.158C12.214 17.085 10.76 15.6 8 15.6z"/>
    </svg>
  ),
};

const projects = [
  {
    id: 1,
    title: "Bingo Game",
    description: "A fun multiplayer Bingo game built with JavaScript. Play real-time bingo with interactive UI and game logic.",
    tech: ["JavaScript", "HTML", "CSS"],
    color: "#1a1a2e",
    github: "https://github.com/parthip-2003/bingo-game",
    live: "https://github.com/parthip-2003/bingo-game",
    year: "2025",
  },
  {
    id: 2,
    title: "Doctor Strange Effect",
    description: "A real-time augmented reality Doctor Strange portal effect using Python, OpenCV, and MediaPipe. Draw fiery, interactive portals and magical runes with hand gestures.",
    tech: ["Python", "CSS"],
    color: "#2d1b69",
    github: "https://github.com/parthip-2003/DOCTOR_STRANGE_EFFECT",
    live: "https://github.com/parthip-2003/DOCTOR_STRANGE_EFFECT",
    year: "2025",
  },
  {
    id: 3,
    title: "TONY-S F.R.I.D.A.Y.",
    description: "F.R.I.D.A.Y. – A Fully Responsive Intelligent Digital Assistant for You. Stable voice interaction and desktop automation powered by Python.",
    tech: ["Python", "JavaScript", "Firebase"],
    color: "#0f3460",
    github: "https://github.com/parthip-2003/TONY-S_FRIDAY",
    live: "https://github.com/parthip-2003/TONY-S_FRIDAY",
    year: "2025",
  },
  {
    id: 4,
    title: "Fugeniz-12",
    description: "A modern TypeScript-based web project with a strong foundation in programming and scalable architecture.",
    tech: ["TypeScript", "React", "CSS"],
    color: "#1b4332",
    github: "https://github.com/parthip-2003/fugeniz-12",
    live: "https://github.com/parthip-2003/fugeniz-12",
    year: "2025",
  },
];

const techColors = {
  React: "#61DAFB",
  NodeJS: "#339933",
  MongoDB: "#47A248",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  TypeScript: "#3178C6",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Firebase: "#FFA000",
  Tailwind: "#38BDF8",
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="bg-[#0d0d0d] w-full min-h-screen py-24 px-6 md:px-12 font-sans relative overflow-hidden">
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,42,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,42,42,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#ff2a2a] opacity-5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#ff2a2a] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[#ff2a2a] font-bold tracking-[0.3em] text-xs uppercase mb-4">My Work</p>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
            Projects<span className="text-[#ff2a2a]">.</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base md:text-lg max-w-xl font-medium">
            A collection of things I've built — from web apps to AI tools.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              onHoverStart={() => setHovered(project.id)}
              onHoverEnd={() => setHovered(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ background: project.color }}
            >
              {/* Card inner */}
              <div className="relative z-10 p-7 flex flex-col h-full min-h-[280px]">
                
                {/* Top row: year + links */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white/40 text-xs font-bold tracking-widest">{project.year}</span>
                  <div className="flex gap-3">
                    {/* GitHub icon */}
                    <a href={project.github} className="text-white/50 hover:text-white transition-colors" onClick={e => e.stopPropagation()}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                    {/* External link icon */}
                    <a href={project.live} className="text-white/50 hover:text-white transition-colors" onClick={e => e.stopPropagation()}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-black tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed font-medium flex-1 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const Icon = TechIcons[tech];
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 hover:bg-white/20 transition-colors"
                        title={tech}
                      >
                        {Icon && <Icon />}
                        <span className="text-white text-xs font-semibold">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hover glow overlay */}
              <motion.div
                animate={{ opacity: hovered === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white/5 pointer-events-none"
              />

              {/* Bottom shine line */}
              <motion.div
                animate={{ scaleX: hovered === project.id ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute bottom-0 left-0 h-0.5 w-full bg-white/40 origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/parthip-2003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 text-sm font-bold tracking-wider"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            View All on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
