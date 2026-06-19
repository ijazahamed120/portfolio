import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Github = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "Online Farming System",
      category: "Full Stack & IoT",
      tech: ["React", "Java", "HTML", "CSS"],
      description:
        "An intelligent dashboard facilitating real-time monitoring of soil states and crop vitals. Predicts irrigation triggers and provides customized fertilizer recipes based on historical crop indices.",
      features: [
        "Crop health monitoring",
        "Weather-based irrigation alerts",
        "Fertilizer recommendations",
      ],
      githubLink: "https://github.com/ijazahamed120",
      liveLink: "http://localhost:5173/",
      // Custom coded high-fidelity SVG dashboard preview
      preview: (
        <svg viewBox="0 0 400 240" className="w-full h-full rounded-t-xl bg-[#09071c] overflow-hidden select-none border-b border-white/5">
          {/* Grid lines */}
          <line x1="20" y1="0" x2="20" y2="240" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="80" y1="0" x2="80" y2="240" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="140" y1="0" x2="140" y2="240" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="240" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="260" y1="0" x2="260" y2="240" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="320" y1="0" x2="320" y2="240" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          
          {/* Header Panel */}
          <rect x="10" y="10" width="380" height="35" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(147, 51, 234, 0.15)" strokeWidth="1" />
          <circle cx="25" cy="27" r="4" fill="#ef4444" />
          <circle cx="37" cy="27" r="4" fill="#eab308" />
          <circle cx="49" cy="27" r="4" fill="#22c55e" />
          <text x="70" y="32" fontFamily="monospace" fontSize="10" fill="#a1a1aa">farm-monitor.dev/dashboard</text>
          
          {/* Card 1: Soil Moisture Progress Circle */}
          <rect x="10" y="55" width="115" height="175" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <text x="20" y="75" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#38bdf8">SOIL MOISTURE</text>
          <circle cx="67" cy="130" r="30" fill="none" stroke="rgba(56, 189, 248, 0.1)" strokeWidth="6" />
          <circle cx="67" cy="130" r="30" fill="none" stroke="#0284c7" strokeWidth="6" strokeDasharray="188" strokeDashoffset="45" strokeLinecap="round" />
          <text x="67" y="134" fontFamily="sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#fff">76%</text>
          <text x="67" y="195" fontFamily="sans-serif" fontSize="8" textAnchor="middle" fill="#a1a1aa">Optimal Status</text>

          {/* Card 2: Crop Health Chart */}
          <rect x="135" y="55" width="255" height="110" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <text x="145" y="75" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#a855f7">CROP HEALTH INDEX</text>
          <path d="M 145 140 L 180 120 L 220 130 L 260 90 L 300 110 L 340 78 L 375 82" fill="none" stroke="url(#cyanPurpleGrad)" strokeWidth="3" strokeLinecap="round" />
          {/* Chart Gradient */}
          <defs>
            <linearGradient id="cyanPurpleGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <circle cx="340" cy="78" r="4" fill="#06b6d4" />
          <text x="340" y="68" fontFamily="sans-serif" fontSize="8" fill="#fff" fontWeight="bold">92%</text>
          
          {/* Card 3: Irrigation Alert Alert Panel */}
          <rect x="135" y="175" width="255" height="55" rx="8" fill="rgba(234, 179, 8, 0.05)" stroke="rgba(234, 179, 8, 0.2)" />
          <path d="M 152 192 L 160 208 L 144 208 Z" fill="#eab308" />
          <text x="170" y="198" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#eab308">IRRIGATION WARNING</text>
          <text x="170" y="210" fontFamily="sans-serif" fontSize="8" fill="#d4d4d8">Soil dry. Sprinklers triggering in 12 min.</text>
        </svg>
      ),
    },
    {
      title: "Habit Tracker Application",
      category: "Personal Productivity",
      tech: ["HTML", "CSS", "Python"],
      description:
        "A script-fueled desktop or web habit logging board. Renders calendar grid visualizations similar to GitHub's commits graph to showcase streak tracking and trigger reward milestones.",
      features: [
        "Habit creation",
        "Progress tracking",
        "Data visualization",
      ],
      githubLink: "https://github.com/ijazahamed120",
      liveLink: "https://github.com/ijazahamed120",
      preview: (
        <svg viewBox="0 0 400 240" className="w-full h-full rounded-t-xl bg-[#050414] overflow-hidden select-none border-b border-white/5">
          {/* Top Frame Controls */}
          <rect x="0" y="0" width="400" height="24" fill="rgba(255,255,255,0.03)" />
          <circle cx="15" cy="12" r="3" fill="#ef4444" />
          <circle cx="25" cy="12" r="3" fill="#eab308" />
          <circle cx="35" cy="12" r="3" fill="#22c55e" />
          <text x="200" y="16" fontFamily="sans-serif" fontSize="8" fill="#52525b" textAnchor="middle">habit-grid.py</text>
          
          {/* Habit Titles */}
          <text x="20" y="55" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#f3f4f6">Daily Habits</text>
          
          {/* Habit Item 1 */}
          <text x="20" y="85" fontFamily="sans-serif" fontSize="9" fill="#9ca3af">LeetCode Dailies</text>
          <g transform="translate(130, 75)">
            {/* Grid blocks */}
            <rect x="0" y="0" width="12" height="12" rx="2" fill="#22c55e" />
            <rect x="16" y="0" width="12" height="12" rx="2" fill="#16a34a" />
            <rect x="32" y="0" width="12" height="12" rx="2" fill="#15803d" />
            <rect x="48" y="0" width="12" height="12" rx="2" fill="#166534" />
            <rect x="64" y="0" width="12" height="12" rx="2" fill="#14532d" />
            <rect x="80" y="0" width="12" height="12" rx="2" fill="#15803d" />
            <rect x="96" y="0" width="12" height="12" rx="2" fill="#22c55e" />
            <rect x="112" y="0" width="12" height="12" rx="2" fill="#22c55e" />
            <rect x="128" y="0" width="12" height="12" rx="2" fill="#22c55e" />
            <rect x="144" y="0" width="12" height="12" rx="2" fill="#16a34a" />
            <rect x="160" y="0" width="12" height="12" rx="2" fill="#27272a" />
            <rect x="176" y="0" width="12" height="12" rx="2" fill="#27272a" />
            <rect x="192" y="0" width="12" height="12" rx="2" fill="#22c55e" />
            <text x="215" y="10" fontFamily="sans-serif" fontSize="8" fill="#22c55e" fontWeight="bold">92%</text>
          </g>

          {/* Habit Item 2 */}
          <text x="20" y="125" fontFamily="sans-serif" fontSize="9" fill="#9ca3af">Read Technical Blogs</text>
          <g transform="translate(130, 115)">
            <rect x="0" y="0" width="12" height="12" rx="2" fill="#a855f7" />
            <rect x="16" y="0" width="12" height="12" rx="2" fill="#a855f7" />
            <rect x="32" y="0" width="12" height="12" rx="2" fill="#9333ea" />
            <rect x="48" y="0" width="12" height="12" rx="2" fill="#7e22ce" />
            <rect x="64" y="0" width="12" height="12" rx="2" fill="#27272a" />
            <rect x="80" y="0" width="12" height="12" rx="2" fill="#27272a" />
            <rect x="96" y="0" width="12" height="12" rx="2" fill="#9333ea" />
            <rect x="112" y="0" width="12" height="12" rx="2" fill="#a855f7" />
            <rect x="128" y="0" width="12" height="12" rx="2" fill="#c084fc" />
            <rect x="144" y="0" width="12" height="12" rx="2" fill="#7e22ce" />
            <rect x="160" y="0" width="12" height="12" rx="2" fill="#7e22ce" />
            <rect x="176" y="0" width="12" height="12" rx="2" fill="#27272a" />
            <rect x="192" y="0" width="12" height="12" rx="2" fill="#a855f7" />
            <text x="215" y="10" fontFamily="sans-serif" fontSize="8" fill="#a855f7" fontWeight="bold">78%</text>
          </g>

          {/* Habit Item 3 */}
          <text x="20" y="165" fontFamily="sans-serif" fontSize="9" fill="#9ca3af">Morning Workout</text>
          <g transform="translate(130, 155)">
            <rect x="0" y="0" width="12" height="12" rx="2" fill="#06b6d4" />
            <rect x="16" y="0" width="12" height="12" rx="2" fill="#0891b2" />
            <rect x="32" y="0" width="12" height="12" rx="2" fill="#27272a" />
            <rect x="48" y="0" width="12" height="12" rx="2" fill="#27272a" />
            <rect x="64" y="0" width="12" height="12" rx="2" fill="#0e7490" />
            <rect x="80" y="0" width="12" height="12" rx="2" fill="#0891b2" />
            <rect x="96" y="0" width="12" height="12" rx="2" fill="#06b6d4" />
            <rect x="112" y="0" width="12" height="12" rx="2" fill="#27272a" />
            <rect x="128" y="0" width="12" height="12" rx="2" fill="#06b6d4" />
            <rect x="144" y="0" width="12" height="12" rx="2" fill="#27272a" />
            <rect x="160" y="0" width="12" height="12" rx="2" fill="#06b6d4" />
            <rect x="176" y="0" width="12" height="12" rx="2" fill="#06b6d4" />
            <rect x="192" y="0" width="12" height="12" rx="2" fill="#0891b2" />
            <text x="215" y="10" fontFamily="sans-serif" fontSize="8" fill="#06b6d4" fontWeight="bold">69%</text>
          </g>
          
          {/* Progress Chart Footer */}
          <path d="M 20 220 L 380 220" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <text x="20" y="234" fontFamily="sans-serif" fontSize="7" fill="#52525b">STREAK: 14 DAYS</text>
          <text x="380" y="234" fontFamily="sans-serif" fontSize="7" fill="#52525b" textAnchor="end">TARGET: 30 DAYS</text>
        </svg>
      ),
    },
    {
      title: "Bounce Bro Game",
      category: "2D Game Development",
      tech: ["Godot Engine", "GDScript"],
      description:
        "A high-octane 2D retro action platformer game. Features physics calculations, jump gravity modifiers, responsive key bounds, and frame animation cycles for sprite components.",
      features: [
        "2D platform game",
        "Character animations",
        "Physics-based gameplay",
      ],
      githubLink: "https://github.com/ijazahamed120",
      liveLink: "https://drive.google.com/drive/u/2/folders/1Wmcqp_03cog39BBUNKT0FNI-eHbQW09N",
      preview: (
        <svg viewBox="0 0 400 240" className="w-full h-full rounded-t-xl bg-[#040914] overflow-hidden select-none border-b border-white/5">
          {/* Game Sky Gradient */}
          <rect x="0" y="0" width="400" height="240" fill="url(#skyGrad)" />
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#080720" />
              <stop offset="80%" stopColor="#0e0f3b" />
              <stop offset="100%" stopColor="#181347" />
            </linearGradient>
          </defs>

          {/* Stars */}
          <circle cx="50" cy="40" r="1" fill="#fff" opacity="0.8" />
          <circle cx="120" cy="70" r="1.5" fill="#fff" opacity="0.6" />
          <circle cx="280" cy="50" r="1" fill="#fff" opacity="0.9" />
          <circle cx="340" cy="80" r="0.8" fill="#fff" opacity="0.5" />

          {/* Distant Mountains */}
          <path d="M 0 200 L 80 140 L 150 180 L 220 120 L 310 170 L 400 130 L 400 240 L 0 240 Z" fill="rgba(147, 51, 234, 0.08)" />

          {/* Platforms */}
          <rect x="30" y="160" width="100" height="15" rx="3" fill="#3b0764" stroke="#a855f7" strokeWidth="1" />
          <rect x="180" y="120" width="90" height="15" rx="3" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
          <rect x="290" y="170" width="80" height="15" rx="3" fill="#042f2e" stroke="#0d9488" strokeWidth="1" />
          
          {/* Ground */}
          <rect x="0" y="210" width="400" height="30" fill="#090514" stroke="#a855f7" strokeWidth="1" />

          {/* Coins to collect */}
          <circle cx="225" cy="95" r="5" fill="#eab308" stroke="#facc15" strokeWidth="1" />
          <circle cx="245" cy="95" r="5" fill="#eab308" stroke="#facc15" strokeWidth="1" />
          
          {/* The Player character (Bounce Bro) */}
          <g transform="translate(70, 120)">
            <ellipse cx="10" cy="20" rx="10" ry="12" fill="#ec4899" />
            <circle cx="6" cy="16" r="2" fill="#fff" />
            <circle cx="14" cy="16" r="2" fill="#fff" />
            <circle cx="7" cy="16" r="0.8" fill="#000" />
            <circle cx="15" cy="16" r="0.8" fill="#000" />
            <path d="M 6 25 Q 10 29 14 25" fill="none" stroke="#fff" strokeWidth="1" />
            {/* Trail */}
            <path d="M 10 32 L 6 39 M 10 32 L 10 40 M 10 32 L 14 39" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* HUD HUD UI */}
          <rect x="10" y="10" width="80" height="20" rx="5" fill="rgba(0,0,0,0.4)" />
          <text x="20" y="24" fontFamily="monospace" fontSize="8" fill="#fff" fontWeight="bold">SCORE: 04200</text>
          
          <rect x="310" y="10" width="80" height="20" rx="5" fill="rgba(0,0,0,0.4)" />
          <text x="320" y="24" fontFamily="monospace" fontSize="8" fill="#ec4899" fontWeight="bold">LIVES: ♥ ♥ ♥</text>
        </svg>
      ),
    },
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="relative py-24 z-10">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative flex flex-col h-full rounded-2xl glassmorphism border border-white/5 hover:border-purple-500/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5"
            >
              {/* Top Custom SVG Graphic Screen */}
              <div className="relative overflow-hidden w-full aspect-video">
                {project.preview}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-30" />
              </div>

              {/* Body Content */}
              <div className="flex flex-col flex-grow p-6 text-left">
                {/* Category & Icons */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3 text-gray-500">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Features list */}
                <div className="space-y-1.5 mb-5 border-t border-white/5 pt-3.5">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((techItem, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
