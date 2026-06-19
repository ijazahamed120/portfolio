import { motion } from "framer-motion";

export default function TechStack() {
  const categories = [
    {
      title: "Programming Languages",
      color: "from-amber-500/20 to-orange-500/10",
      borderColor: "group-hover:border-orange-500/40",
      skills: [
        {
          name: "Java",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-orange-500">
              <path d="M19.49 18.06c-1.39.46-3.83.69-5.18.7-2.61.02-5.02-.45-6.62-1.36-.57-.33-.76-.75-.36-1.12.3-.28.87-.43 1.48-.48a19.78 19.78 0 014.94.3c1.37.28 3.51.52 4.9.23.47-.09.73-.24.73-.42 0-.25-.49-.49-1.37-.68-1.5-.32-4.22-.44-6.38-.28a15.7 15.7 0 00-4.66.97c-.98.41-1.46.96-1.27 1.5.24.67 1.13 1.18 2.5 1.51 1.7.41 3.99.53 6.13.43 2.19-.11 4.39-.46 5.67-1.04.44-.21.6-.48.33-.68zM16.14 11.23c-1.57-.48-3.41-.69-5.06-.55-1.92.17-3.8.84-4.28 1.58-.2.32-.15.65.17.9.36.27 1.02.43 1.76.47a11.28 11.28 0 004.28-.53c1.47-.5 2.76-1.14 3.73-1.63a.85.85 0 00-.6-.24z" />
              <path d="M9.1 8.84c.48.27 1.1.48 1.74.55.9.1 1.83-.09 2.52-.51a1.9 1.9 0 00.75-1.15c.08-.47-.11-1.06-.87-1.83C12 4.7 10.35 3.32 10.28 1.5a.25.25 0 00-.47-.05c-.24.78-.18 2.05.8 3.55.67 1.02.77 1.47.72 1.7-.1.45-.61.64-1.22.56a5.53 5.53 0 01-2-.76c-.22-.13-.42-.04-.37.2.14.7.74 1.63 1.36 1.98zM14.6 6.37a5.57 5.57 0 01.37-2.12c.16-.48.42-.51.46-.06.13 1.45-.64 2.37-1.18 2.68a.18.18 0 01-.2-.18C14.15 6.64 14.4 6.51 14.6 6.37z" />
            </svg>
          ),
        },
        {
          name: "Python",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-cyan-400">
              <path d="M11.93 2c-2.73 0-2.56 1.18-2.56 1.18v1.75h2.61c.78 0 1.42.63 1.42 1.4v2.66h2.57s1.17-.03 1.17-2.58V3.88S17.15 2 14.49 2h-2.56zm-1.8 4.63v.97c0 .78-.64 1.42-1.42 1.42H6.14s-1.17 0-1.17 2.55v2.55s-.04 1.18 2.54 1.18h1.75v-2.61c0-.77.64-1.41 1.42-1.41h2.61V8.62c0-.78-.63-1.42-1.41-1.42h-.95zM16 11.23a.7.7 0 110 1.4.7.7 0 010-1.4zm-8 1.4a.7.7 0 110-1.4.7.7 0 010 1.4zm1.87 2.74c0 2.73 2.56 2.56 2.56 2.56h2.55s1.18.04 1.18-2.54V13.8h-2.61c-.77 0-1.41-.64-1.41-1.41V9.77H10.97s-1.17.03-1.17 2.58v2.53zm5.72-2.74v-.96c0-.78.63-1.42 1.41-1.42h2.57s1.17 0 1.17-2.56V5.24s.04-1.17-2.54-1.17h-1.75v2.61c0 .78-.64 1.42-1.42 1.42h-2.6v2.61c0 .78.63 1.42 1.41 1.42h.96z" />
            </svg>
          ),
        },
        {
          name: "C Language",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-blue-500">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.67 4.24 1.76l-2.83 2.83C13.06 10.24 12.56 10 12 10c-1.1 0-2 .9-2 2s.9 2 2 2c.56 0 1.06-.24 1.41-.59l2.83 2.83C15.14 17.33 13.66 18 12 18z" />
            </svg>
          ),
        },
        {
          name: "C++ Language",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-blue-600">
              <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 14.5c-3.04 0-5.5-2.46-5.5-5.5S7.96 5.5 11 5.5c1.52 0 2.88.62 3.89 1.62l-2.12 2.12c-.52-.45-1.07-.74-1.77-.74-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.7 0 1.25-.29 1.77-.74l2.12 2.12c-1.01 1-2.37 1.62-3.89 1.62zm10-5h-2.5V9h-2v2.5H14v2h2.5V16h2v-2.5H21v-2z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Frontend Engineering",
      color: "from-cyan-500/20 to-blue-500/10",
      borderColor: "group-hover:border-cyan-500/40",
      skills: [
        {
          name: "React.js",
          logo: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 fill-none stroke-cyan-400 stroke-[1.25]">
              <circle cx="0" cy="0" r="2.05" fill="#06b6d4" />
              <g stroke="#06b6d4">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          ),
        },
        {
          name: "JavaScript",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-yellow-400 bg-black">
              <path d="M3 3h18v18H3V3zm12.54 13.1c0-.85-.45-1.34-1.35-1.75-.9-.39-1.95-.65-2.2-.9-.1-.1-.15-.22-.15-.36 0-.25.2-.42.59-.42.36 0 .61.12.87.41l1.1-.73c-.45-.63-1.08-.94-1.95-.94-1.25 0-1.98.66-1.98 1.54 0 .74.4 1.22 1.34 1.61.99.39 1.76.67 1.96.94.12.16.16.32.16.51 0 .34-.31.54-.78.54-.51 0-.85-.24-1.12-.66l-1.07.72c.48.8 1.28 1.18 2.21 1.18 1.48 0 2.2-.74 2.2-1.98zm3.02 0c0-.85-.45-1.34-1.35-1.75-.9-.39-1.95-.65-2.2-.9-.1-.1-.15-.22-.15-.36 0-.25.2-.42.59-.42.36 0 .61.12.87.41l1.1-.73c-.45-.63-1.08-.94-1.95-.94-1.25 0-1.98 6.6-1.98 1.54 0 .74.4 1.22 1.34 1.61.99.39 1.76.67 1.96.94.12.16.16.32.16.51 0 .34-.31.54-.78.54-.51 0-.85-.24-1.12-.66l-1.07.72c.48.8 1.28 1.18 2.21 1.18 1.48 0 2.2-.74 2.2-1.98z" className="hidden" />
              {/* JS custom path */}
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 18.5c0 .8-.5 1.5-1.5 1.5-1.1 0-1.5-.7-1.5-1.5h1.2c0 .3.1.6.4.6.2 0 .4-.2.4-.6v-5.2h1.5v5.2zm5.7-1.8c-.2.8-.8 1.3-1.8 1.3-.9 0-1.5-.5-1.5-1.5 0-1.1.8-1.5 1.8-1.7.6-.1.9-.3.9-.7 0-.3-.2-.5-.6-.5-.4 0-.6.2-.6.7h-1.2c0-.9.7-1.5 1.8-1.5 1.1 0 1.8.5 1.8 1.4 0 .9-.5 1.2-1.2 1.4-.6.1-.9.3-.9.7 0 .3.2.5.6.5.4 0 .6-.2.6-.7h1.2z" fill="#facc15" />
            </svg>
          ),
        },
        {
          name: "HTML5",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-orange-600">
              <path d="M3 2l1.6 18.3L12 22.5l7.4-2.2L21 2H3zm13.7 6.1H9.8l.2 1.7h6.5l-.6 6.3-3.9 1.1-3.9-1.1-.3-2.8H11l.1 1.2 1.9.5 1.9-.5.2-2H8.3L7.7 5.7h11.2l-.2 2.4z" />
            </svg>
          ),
        },
        {
          name: "CSS3",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-blue-500">
              <path d="M3 2l1.6 18.3L12 22.5l7.4-2.2L21 2H3zm13.6 6.1H8.2l.2 2h8l-.6 6.3-3.8 1-3.8-1-.3-2.8H10l.1 1.2 1.9.5 1.9-.5.2-2.1H7.8L7.3 5.7h11.7l-.4 2.4z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Backend Frameworks",
      color: "from-purple-500/20 to-fuchsia-500/10",
      borderColor: "group-hover:border-purple-500/40",
      skills: [
        {
          name: "Spring Boot",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-emerald-500">
              <path d="M12 .5A11.5 11.5 0 00.5 12 11.5 11.5 0 0012 23.5 11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5zm5.7 15.6c-.6 1-1.6 1.8-2.7 2.3-1.6.8-3.5.7-5-.3a6 6 0 01-2.4-4c-.3-1.6.1-3.2 1.1-4.5 1-1.3 2.5-2 4.1-2.1 1.3 0 2.5.5 3.5 1.3l.3.2-1.7 1.8-.3-.2a3 3 0 00-1.8-.7c-1 0-1.8.5-2.4 1.2a3.8 3.8 0 00-.7 2.8c.2 1 .8 1.8 1.6 2.2a3.4 3.4 0 003.3-.2c.5-.3.9-.8 1.1-1.4l.1-.3H11v-2.5h6.2v4.5l-.2.4z" />
            </svg>
          ),
        },
        {
          name: "Node.js",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-green-500">
              <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm-1 14.5L6.5 14v-4L11 12.3v4.2zm1-5.7L7.5 8.5l4.5-2.5 4.5 2.5-4.5 2.3zm5.5 3.2L13 16.5v-4.2l4.5-2.3v4z" />
            </svg>
          ),
        },
        {
          name: "Express.js",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gray-400">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" className="hidden" />
              <text x="5" y="16" fontFamily="var(--font-display)" fontSize="13" fontWeight="bold" fill="#fff">ex</text>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Databases & Storage",
      color: "from-emerald-500/20 to-cyan-500/10",
      borderColor: "group-hover:border-emerald-500/40",
      skills: [
        {
          name: "MongoDB",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-green-600">
              <path d="M12 1.5c-.3 0-.6.1-.9.4A54.3 54.3 0 007.8 8c-.6 1.4-1 2.8-1.2 4.3-.3 1.9-.3 3.8.1 5.6a6.5 6.5 0 003.5 4.8c1 .5 2.1.8 3.2.6a6.5 6.5 0 004.2-4.2c.5-1.8.6-3.7.3-5.5a18.2 18.2 0 00-1.8-5.3c-.6-1.3-1.4-2.5-2.2-3.7-.3-.4-.6-.7-.9-.7zm.8 3.5c1 .9 1.8 2 2.4 3.2.7 1.4 1.2 2.9 1.4 4.5.3 1.6.2 3.3-.2 4.9a4.8 4.8 0 01-2.8 3.1l-.8.3V5z" />
            </svg>
          ),
        },
        {
          name: "MySQL",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-cyan-600">
              <path d="M12.12 1.5c-4.45 0-8.08 2.37-8.08 5.28 0 1.2.64 2.28 1.7 3.15C4.6 11.23 3 13.06 3 15.17c0 2.91 4.09 5.28 9.12 5.28 5.03 0 9.12-2.37 9.12-5.28 0-2.11-1.6-3.94-2.74-5.24 1.06-.87 1.7-1.95 1.7-3.15 0-2.91-3.63-5.28-8.08-5.28zm0 2.5c2.97 0 5.38 1.41 5.38 3.14S15.09 10.28 12.12 10.28s-5.38-1.41-5.38-3.14 2.41-3.14 5.38-3.14z" className="hidden" />
              <text x="3" y="16" fontFamily="var(--font-display)" fontSize="13" fontWeight="black" fill="#0284c7">SQL</text>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Tools & DevOps",
      color: "from-indigo-500/20 to-purple-500/10",
      borderColor: "group-hover:border-indigo-500/40",
      skills: [
        {
          name: "GitHub",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          ),
        },
        {
          name: "Postman",
          logo: (
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-orange-500">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z" className="hidden" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 3.86 2.185 7.208 5.4 8.918l2.8-5.3c-.6-.4-1.2-1-1.6-1.7l-4.9.9C3.2 13.5 3 12.8 3 12c0-4.963 4.037-9 9-9s9 4.037 9 9c0 .8-.2 1.5-.7 2.1l-4.9-.9c-.4.7-1 1.3-1.6 1.7l2.8 5.3c3.215-1.71 5.4-5.058 5.4-8.918 0-5.523-4.477-10-10-10zm.5 5.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
          ),
        },
      ],
    },
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="tech" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`group relative p-6 rounded-2xl glassmorphism border border-white/5 transition-all duration-300 overflow-hidden hover:scale-[1.01]`}
            >
              {/* Background gradient mask on card hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />

              {/* Glowing header border line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent group-hover:via-cyan-400/60 transition-colors" />

              <h3 className="font-display font-bold text-lg text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                {category.title}
              </h3>

              {/* Skills elements list inside card */}
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2.5 bg-black/40 border border-white/5 rounded-xl px-4 py-2.5 hover:border-purple-500/30 hover:bg-black/60 transition-all duration-300 hover:scale-[1.05]"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      {skill.logo}
                    </div>
                    <span className="text-sm font-semibold text-gray-300 hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
