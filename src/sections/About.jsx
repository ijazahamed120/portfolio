import { motion } from "framer-motion";
import { User, Code2, GraduationCap, Heart } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const codeString = `{
  "developer": {
    "name": "Ijaz Ahamed M",
    "status": "Engineering Student & Developer",
    "location": "Coimbatore, India",
    "education": "Sri Eshwar College of Engineering",
    "major": "Electronics & Communication Engineering",
    "interests": [
      "Full-Stack Web Architectures",
      "Software Engineering Patterns",
      "Emerging Tech & Smart Systems"
    ],
    "philosophy": "Turning complex problems into clean, scalable code."
  }
}`;

  return (
    <section id="about" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 mb-3">
            Discovery
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Code Terminal Block */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 w-full glassmorphism-card rounded-2xl overflow-hidden shadow-2xl border border-purple-500/10"
          >
            {/* Terminal Window Header */}
            <div className="bg-[#0b0821] px-5 py-3.5 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-[11px] font-mono text-gray-500 font-semibold tracking-wider">
                developer.json
              </span>
              <div className="w-10" />
            </div>

            {/* Terminal Content */}
            <div className="p-6 bg-black/60 font-mono text-xs md:text-sm text-gray-300 leading-relaxed overflow-x-auto">
              <pre className="text-left">
                <code>
                  {codeString.split("\n").map((line, idx) => {
                    // Primitive highlighting for preview output
                    let colorized = line;
                    if (line.includes('"')) {
                      // Highlight keys & strings
                      colorized = line.replace(
                        /(".*?")(?=\s*:)/g,
                        '<span class="text-purple-400">$1</span>'
                      ).replace(
                        /:\s*(".*?")/g,
                        ': <span class="text-cyan-300">$1</span>'
                      );
                    }
                    return (
                      <div key={idx} className="flex gap-4">
                        <span className="text-gray-600 text-right select-none w-4">
                          {idx + 1}
                        </span>
                        <span
                          dangerouslySetInnerHTML={{ __html: colorized }}
                        />
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Right Column: Text Details */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Bridging Electronics Engineering & Software Innovation
            </h3>

            <p className="text-gray-400 leading-relaxed text-base">
              I am an **Electronics and Communication Engineering (ECE)** student with a deep-seated passion for software architecture and full-stack system implementation. I thrive on translating hardware concepts and digital logic principles into performant web applications.
            </p>

            <p className="text-gray-400 leading-relaxed text-base">
              My engineering background strengthens my analytical capacity and **problem-solving skills**, equipping me to build scalable structures, design efficient databases, and optimize backend integrations. I enjoy tackling challenging algorithmic hurdles and engineering smooth user flows.
            </p>

            {/* Summary Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">ECE Background</h4>
                  <p className="text-xs text-gray-500">Logical & structured thinking</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Code2 size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Full Stack Dev</h4>
                  <p className="text-xs text-gray-500">Node, Express, React, Spring Boot</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Emerging Tech</h4>
                  <p className="text-xs text-gray-500">Intelligent alerts & algorithms</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Quick Learner</h4>
                  <p className="text-xs text-gray-500">Self-driven & agile approach</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
