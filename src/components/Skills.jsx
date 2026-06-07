import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Inline SVG Tech Icons ─── */
const icons = {
  JavaScript: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><rect width="32" height="32" rx="4" fill="#F7DF1E"/><path d="M20.809 23.875a2.866 2.866 0 002.6 1.6c1.09 0 1.787-.545 1.787-1.3 0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964 0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 013.742 2.107l-2.048 1.315a1.79 1.79 0 00-1.694-1.132 1.149 1.149 0 00-1.262 1.134c0 .794.49 1.115 1.622 1.603l.658.282c2.237.959 3.501 1.938 3.501 4.136 0 2.37-1.861 3.665-4.359 3.665a5.055 5.055 0 01-4.795-2.691zm-9.295.228c.412.733.787 1.352 1.685 1.352.861 0 1.405-.337 1.405-1.644V14.988h2.573v8.869c0 2.707-1.587 3.938-3.905 3.938a4.056 4.056 0 01-3.927-2.467z" fill="#000"/></svg>
  ),
  Python: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><defs><linearGradient id="pyg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#387EB8"/><stop offset="100%" stopColor="#366994"/></linearGradient><linearGradient id="pyg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FFE052"/><stop offset="100%" stopColor="#FFC331"/></linearGradient></defs><path fill="url(#pyg1)" d="M16 3C9.9 3 10.3 5.6 10.3 5.6V8.4H16v.9H7.5S3.5 8.8 3.5 15s3.5 5.9 3.5 5.9H9V18s-.1-3.5 3.4-3.5h5.9s3.3.1 3.3-3.2V6.6S22.4 3 16 3zm-3.2 1.9c.6 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z"/><path fill="url(#pyg2)" d="M16.1 29c6.1 0 5.7-.7 5.7-.7V26.5H16v-.9h8.5s4-.5 4-6.6-3.5-5.9-3.5-5.9H23v2.9s.1 3.5-3.4 3.5h-5.9s-3.3-.1-3.3 3.2v5s-.5 2.8 5.7 2.8zm3.2-1.9c-.6 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z"/></svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><rect width="32" height="32" rx="4" fill="#3178C6"/><path fill="white" d="M18.245 23.759v2.007c.667.285 1.44.49 2.32.614a16.3 16.3 0 002.484.186c.84 0 1.637-.088 2.39-.265a5.8 5.8 0 001.93-.87 4.146 4.146 0 001.292-1.572c.315-.642.472-1.416.472-2.32 0-.672-.1-1.258-.3-1.757a4.05 4.05 0 00-.87-1.323 6.042 6.042 0 00-1.362-.997 16.572 16.572 0 00-1.793-.823 27.63 27.63 0 01-1.267-.523 5.54 5.54 0 01-.881-.5 1.97 1.97 0 01-.523-.556 1.33 1.33 0 01-.174-.683c0-.23.054-.438.162-.625a1.46 1.46 0 01.465-.484 2.364 2.364 0 01.742-.311 4.075 4.075 0 011-.104 6.2 6.2 0 01.916.07c.316.047.63.123.94.23.314.107.617.245.908.416.29.17.56.37.807.6V15.3a9.524 9.524 0 00-1.955-.476 14.39 14.39 0 00-2.09-.15 9.2 9.2 0 00-2.27.267 5.55 5.55 0 00-1.85.835 3.97 3.97 0 00-1.244 1.46 4.55 4.55 0 00-.453 2.09c0 1.033.285 1.912.855 2.637a6.5 6.5 0 002.562 1.736l1.3.523a9.75 9.75 0 011.012.485c.278.162.5.34.661.535.16.195.24.436.24.72 0 .235-.053.45-.159.645a1.42 1.42 0 01-.47.5 2.41 2.41 0 01-.77.32 4.36 4.36 0 01-1.053.115 6.54 6.54 0 01-2.104-.367 6.33 6.33 0 01-1.905-1.06zM13.088 14.46H17.5v-2.004H6v2.004h4.4V27h2.688z"/></svg>
  ),
  React: (
    <svg viewBox="-11.5 -10.23 23 20.46" className="w-8 h-8" fill="#61DAFB"><circle r="2.05"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
  ),
  HTML: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><path fill="#E34F26" d="M5.9 27.2L3.65 2h24.7l-2.25 25.2L16 30z"/><path fill="#EF652A" d="M16 27.9l8.2-2.3 1.9-21.5H16z"/><path fill="#fff" d="M16 13.4h-4.1l-.3-3.2H16V7.2H8.25l.07.83.76 8.52H16zm0 8l-.01.01-3.44-.93-.22-2.47H9.22l.43 4.85 6.33 1.76.01-.01z"/><path fill="#ebebeb" d="M15.99 13.4v3.1h3.8l-.36 4-3.45.93v3.22l6.34-1.76.05-.52.73-8.13.07-.84h-.83zm0-6.26v3.1h7.47l.06-.7.14-1.57.07-.83z"/></svg>
  ),
  CSS: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><path fill="#1572B6" d="M5.9 27.2L3.65 2h24.7l-2.25 25.2L16 30z"/><path fill="#33A9DC" d="M16 27.9l8.2-2.3 1.9-21.5H16z"/><path fill="#fff" d="M16 13.2h4.1l.28-3.17H16V6.93h7.75l-.07.83-.76 8.52H16zM16 21.2l.01.004 3.44-.93.22-2.47h3.1l-.43 4.85-6.33 1.76-.01-.004z"/><path fill="#ebebeb" d="M15.99 13.2v3.1H12.2l.36 4 3.45.93v3.22L9.65 22.7l-.05-.52-.73-8.13-.07-.84h.83zm0-6.26v3.1H8.52l-.06-.7-.14-1.57-.07-.83z"/></svg>
  ),
  NodeJS: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><path fill="#339933" d="M16 3L3 10.5v13L16 31l13-7.5v-13L16 3zm0 2.36L27 11.5v11L16 28.6 5 22.5v-11L16 5.36z"/><path fill="#339933" d="M16 9a7 7 0 100 14A7 7 0 0016 9zm0 2a5 5 0 110 10A5 5 0 0116 11z"/></svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><path fill="#47A248" d="M16 2c-1.8 4-4.3 5.4-5.5 8.2C9.1 13.4 9.5 17 11 19.7c1 1.8 2.5 3.3 4.3 4.3l.4.2.3-.1c3.8-2 6-6 5.6-10.3C21.2 9.2 18.5 5.3 16 2zm-.2 22.2l-.1.1c-2.3-1.4-4-3.7-4.4-6.4-.5-2.7.4-5.5 2.4-7.5.6 3 1.7 5.8 2.1 8.8zm.5.1v.2c.1 1.5.1 3-.1 4.5-.1.7-.3 1.4-.5 2-.1.2-.1.5-.2.7l-.4-.9c-.4-1.3-.5-2.7-.4-4.1l.1-2.2.4-.1c.4-.1.8-.1 1.1-.1z"/></svg>
  ),
  Firebase: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><path fill="#FFA000" d="M19.6 4L12 17.4 8.4 11.7z"/><path fill="#F57F17" d="M12 17.4L19.6 4l4 7.1z"/><path fill="#FFCA28" d="M3.5 22.8L11.96 7.9l3.6 6.37z"/><path fill="#FFA000" d="M28.5 22.8L16 2.72 3.5 22.8l12.5 6.48z"/><path fill="#F57F17" d="M16 29.28L28.5 22.8l-7.58-13.32L16 14.6z"/></svg>
  ),
  Java: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><path fill="#E76F00" d="M12.1 21.5S10.5 22.4 13.2 22.7c3.3.4 5-.4 8.6-1.1 0 0 1 .6 2.3 1.1-8.1 3.5-18.3-.2-12-1.2zM11.2 18.7s-1.8 1.3 1 1.6c3.6.5 6.4.5 11.3-.7 0 0 .7.7 1.7 1.1-9.9 2.9-21 .3-14-2z"/><path fill="#E76F00" d="M17.6 13.2c2 2.3-.5 4.4-.5 4.4s5.1-2.6 2.7-5.9c-2.2-3-3.9-4.5 5.3-9.7 0 0-14.4 3.6-7.5 11.2z"/><path fill="#E76F00" d="M25.8 24.4S27.1 25.5 24.4 26.3c-5 1.5-20.8 2-25.2.1-1.6-.7 1.4-1.7 2.3-1.9.9-.2 1.5-.2 1.5-.2-1.7-1.2-11.2 2.4-4.8 3.4 17.4 2.8 31.7-1.3 27.6-3.3zM12.8 15.7s-7.8 1.8-2.7 2.5c2.1.3 6.3.2 10.2-.1 3.2-.3 6.4-.9 6.4-.9s-1.1.5-1.9.9c-7.8 2.1-22.9 1.1-18.5-.9 3.7-1.7 6.5-1.5 6.5-1.5zM22.3 20.5c7.9-4.1 4.3-8.1 1.7-7.6-.6.1-.9.2-.9.2s.2-.4.7-.5c5.2-1.8 9.2 5.4-1.6 8.3 0-.1.1-.2.1-.4z"/><path fill="#E76F00" d="M19.2 1S23.4 5.2 15.1 10.9c-6.7 4.5-1.5 7.1 0 10-3.3-3-5.7-5.6-4.1-8.1 2.4-3.6 9-5.3 8.2-11.8z"/><path fill="#E76F00" d="M13.4 28.7c7.6.5 19.2-.3 19.5-3.8 0 0-.5 1.4-6.3 2.5-6.5 1.2-14.5 1.1-19.3.3 0 0 1 .8 6.1 1z"/></svg>
  ),
  PHP: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><ellipse cx="16" cy="16" rx="14" ry="9" fill="#8892BF"/><path fill="white" d="M9 13h2.5c1.4 0 2 .6 2 1.7s-.7 1.7-2 1.7H10v2.6H9zm1 1v1.4h1.3c.6 0 1-.2 1-.7s-.4-.7-1-.7zm5 -1h2.5c1.4 0 2 .5 2 1.5 0 .7-.3 1.2-.9 1.5l1 2.3h-1.1l-.9-2.1H16v2.1h-1zm1 1v1.2h1.3c.6 0 .9-.2.9-.6s-.3-.6-.9-.6zm4-1h3c1.3 0 1.7.4 1.7 1.5v2c0 1.1-.4 1.5-1.7 1.5h-2v-1h1.9c.5 0 .8-.1.8-.7v-1.6c0-.6-.3-.7-.8-.7H21z"/></svg>
  ),
  C: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><path fill="#00599C" d="M16 2a14 14 0 100 28A14 14 0 0016 2zm0 2a12 12 0 110 24A12 12 0 0116 4z"/><path fill="#00599C" d="M20.5 11.5a6.5 6.5 0 00-9.2 9.2 6.5 6.5 0 009.2-9.2zM16 11a5 5 0 110 10A5 5 0 0116 11z"/><text x="11.5" y="21" fontSize="11" fill="white" fontWeight="bold" fontFamily="Arial">C</text></svg>
  ),
  OpenCV: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><circle cx="10" cy="10" r="7" fill="#5C3EE8"/><circle cx="22" cy="10" r="7" fill="#00A6D6"/><circle cx="16" cy="21" r="7" fill="#E8433A"/><circle cx="10" cy="10" r="3" fill="white"/><circle cx="22" cy="10" r="3" fill="white"/><circle cx="16" cy="21" r="3" fill="white"/></svg>
  ),
  Git: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><path fill="#F05032" d="M29.47 14.53L17.47 2.53a1.8 1.8 0 00-2.54 0l-2.54 2.54 3.22 3.22a2.14 2.14 0 012.71 2.72l3.1 3.1a2.14 2.14 0 11-1.28 1.28l-2.9-2.9v7.6a2.14 2.14 0 11-1.76-.06v-7.67a2.14 2.14 0 01-1.16-2.81L11.1 6.32l-8.57 8.57a1.8 1.8 0 000 2.54l12 12a1.8 1.8 0 002.54 0l12.4-12.4a1.8 1.8 0 000-2.5z"/></svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 32 32" className="w-8 h-8"><path fill="#38BDF8" d="M16 6.4c-4.27 0-6.93 2.13-8 6.4 1.6-2.13 3.47-2.93 5.6-2.4 1.22.3 2.09 1.19 3.05 2.16C18.19 14.11 19.64 15.6 22.4 15.6c4.27 0 6.93-2.13 8-6.4-1.6 2.13-3.47 2.93-5.6 2.4-1.22-.3-2.09-1.19-3.05-2.16C20.21 7.88 18.76 6.4 16 6.4zM8 15.6c-4.27 0-6.93 2.13-8 6.4 1.6-2.13 3.47-2.93 5.6-2.4 1.22.3 2.09 1.19 3.05 2.16C10.19 23.32 11.64 24.8 14.4 24.8c4.27 0 6.93-2.13 8-6.4-1.6 2.13-3.47 2.93-5.6 2.4-1.22-.3-2.09-1.19-3.05-2.16C12.21 17.08 10.76 15.6 8 15.6z"/></svg>
  ),
};

const skillData = [
  {
    category: "Frontend",
    color: "#ff2a2a",
    glow: "rgba(255,42,42,0.4)",
    skills: [
      { name: "JavaScript", level: 90, icon: "JavaScript" },
      { name: "React", level: 85, icon: "React" },
      { name: "TypeScript", level: 75, icon: "TypeScript" },
      { name: "HTML", level: 95, icon: "HTML" },
      { name: "CSS", level: 90, icon: "CSS" },
      { name: "Tailwind", level: 80, icon: "Tailwind" },
    ],
  },
  {
    category: "Backend & Languages",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.4)",
    skills: [
      { name: "Python", level: 85, icon: "Python" },
      { name: "Node.js", level: 78, icon: "NodeJS" },
      { name: "Java", level: 70, icon: "Java" },
      { name: "PHP", level: 65, icon: "PHP" },
      { name: "C", level: 60, icon: "C" },
    ],
  },
  {
    category: "Tools & Databases",
    color: "#059669",
    glow: "rgba(5,150,105,0.4)",
    skills: [
      { name: "MongoDB", level: 80, icon: "MongoDB" },
      { name: "Firebase", level: 75, icon: "Firebase" },
      { name: "OpenCV", level: 70, icon: "OpenCV" },
      { name: "Git", level: 88, icon: "Git" },
    ],
  },
];

/* ── 3D Tilt Card ── */
const TiltCard = ({ children, color, glow }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -12;
    const rotateY = ((x - cx) / cx) * 12;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`);
    setShine({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
    setShine(s => ({ ...s, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform.includes('0deg') ? 'transform 0.6s cubic-bezier(0.23,1,0.32,1)' : 'transform 0.1s ease',
        boxShadow: `0 20px 60px ${glow}, 0 0 0 1px rgba(255,255,255,0.05)`,
        willChange: 'transform',
      }}
      className="relative bg-[#111] rounded-2xl overflow-hidden p-6 md:p-8"
    >
      {/* Shine overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,${shine.opacity}), transparent 60%)`,
        }}
      />
      {/* Top color bar */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: color }} />
      {children}
    </div>
  );
};

/* ── Animated Skill Bar ── */
const SkillBar = ({ name, level, icon, color, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center gap-3 mb-2">
        {/* Icon */}
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icons[icon]}
        </div>
        <span className="text-white/90 text-sm font-bold flex-1">{name}</span>
        <span className="text-white/40 text-xs font-mono">{level}%</span>
      </div>
      {/* Bar track */}
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden ml-11">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: index * 0.08 + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] w-full py-24 px-6 md:px-12 relative overflow-hidden font-sans">

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ff2a2a] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#7c3aed] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[#ff2a2a] font-bold tracking-[0.3em] text-xs uppercase mb-4">What I Know</p>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
            Skills<span className="text-[#ff2a2a]">.</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base md:text-lg max-w-xl font-medium">
            Technologies I work with — from frontend magic to backend power.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {skillData.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: ci * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard color={cat.color} glow={cat.glow}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full" style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                  <h3 className="text-white font-black text-lg tracking-tight">{cat.category}</h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-col gap-5">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                      color={cat.color}
                      index={si}
                    />
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Floating tech icons strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {Object.entries(icons).map(([name, icon], i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, type: 'spring' }}
              whileHover={{ scale: 1.3, y: -5 }}
              title={name}
              className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-default border border-white/5 hover:border-white/20"
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
