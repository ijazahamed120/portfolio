import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export default function Education() {
  const courses = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java/C++)",
    "Database Management Systems",
    "Digital Electronics & Logic Design",
    "Microcontrollers & Embedded Systems",
  ];

  return (
    <section id="education" className="relative py-24 z-10">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
            Academic Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Timeline Path Layout */}
        <div className="relative border-l-2 border-purple-500/20 pl-8 md:pl-12 ml-4 md:ml-8 space-y-12 text-left">
          
          {/* Vertical Drawing Line Glow */}
          <div className="absolute top-0 left-[-2px] bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent pointer-events-none" />

          {/* Timeline Node item 1 */}
          <div className="relative">
            {/* Timeline bullet dot */}
            <span className="absolute left-[-41px] md:left-[-57px] top-1.5 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-black border-2 border-purple-500 shadow-[0_0_10px_#a855f7] z-10">
              <GraduationCap className="text-purple-400 w-3 h-3 md:w-4.5 md:h-4.5" />
            </span>

            {/* Content card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 md:p-8 rounded-2xl glassmorphism border border-white/5 hover:border-purple-500/20 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300"
            >
              {/* Top border line glow */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent group-hover:via-cyan-400/40 transition-colors" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    Sri Eshwar College of Engineering
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 mt-1">
                    B.E Electronics and Communication Engineering
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono bg-white/5 border border-white/5 px-3 py-1.5 rounded-xl self-start md:self-center">
                  <Calendar size={13} />
                  <span>2022 - 2026 (Expected)</span>
                </div>
              </div>

              {/* Stats highlights */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-xl px-4 py-2">
                  <Award size={16} className="text-purple-400" />
                  <span className="text-sm font-bold text-purple-300">CGPA: 7.6 / 10</span>
                </div>
                <span className="text-xs text-gray-500">First Class standing</span>
              </div>

              {/* Coursework block */}
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 mb-3.5">
                  <BookOpen size={13} className="text-cyan-400" />
                  <span>Key Coursework & Competencies</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs bg-black/40 border border-white/5 text-gray-400 hover:text-white hover:border-cyan-500/20 transition-all duration-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
