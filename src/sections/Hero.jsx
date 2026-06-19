import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, ArrowDown, ChevronRight } from "lucide-react";

const Github = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const Linkedin = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Hero() {
  const titles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Spring Boot Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const triggerDownload = () => {
    // PDF builder matching navbar logic
    const pdfContent = `%PDF-1.4
%âãÏÓ
1 0 obj
<< /Title (Ijaz Ahamed M Resume) /Author (Ijaz Ahamed M) /Creator (Ijaz.dev) >>
endobj
2 0 obj
<< /Type /Catalog /Pages 3 0 R >>
endobj
3 0 obj
<< /Type /Pages /Kids [4 0 R] /Count 1 >>
endobj
4 0 obj
<< /Type /Page /Parent 3 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 5 0 R >> >> /Contents 6 0 R >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
6 0 obj
<< /Length 800 >>
stream
BT
/F1 24 Tf
50 780 Td
(IJAZ AHAMED M) Tj
/F1 12 Tf
0 -30 Td
(Full Stack Developer | MERN & Spring Boot Specialist) Tj
0 -20 Td
(Email: ijazahamed.m2023ece@sece.ac.in | Sri Eshwar College of Engineering) Tj
0 -40 Td
(EDUCATION:) Tj
0 -20 Td
(B.E. Electronics and Communication Engineering - CGPA: 7.6) Tj
0 -40 Td
(TECHNICAL SKILLS:) Tj
0 -20 Td
(Programming: Java, Python, C, C++) Tj
0 -15 Td
(Frontend: React, JavaScript, HTML, CSS) Tj
0 -15 Td
(Backend: Node.js, Express.js, Spring Boot, SQL, MongoDB) Tj
0 -40 Td
(PROJECTS:) Tj
0 -20 Td
(1. Online Farming System (React, Java, HTML, CSS)) Tj
0 -15 Td
(2. Habit Tracker Application (HTML, CSS, Python)) Tj
0 -15 Td
(3. Bounce Bro Game (Godot Engine, GDScript)) Tj
0 -40 Td
(ACHIEVEMENTS:) Tj
0 -20 Td
(- 200+ LeetCode problems solved (Max Rating: 1445)) Tj
0 -15 Td
(- 350+ CodeChef problems solved) Tj
ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000015 00000 n 
0000000096 00000 n 
0000000146 00000 n 
0000000213 00000 n 
0000000344 00000 n 
0000000411 00000 n 
trailer
<< /Size 7 /Root 2 0 R /Info 1 0 R >>
startxref
1262
%%EOF`;

    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Ijaz_Ahamed_M_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden z-10"
    >
      {/* Ambient Moving Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-933/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm shadow-purple-500/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            Open to Opportunities
          </motion.div>

          {/* Large Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent text-glow-purple">
              Ijaz Ahamed M
            </span>
          </motion.h1>

          {/* Cycler Title */}
          <motion.div
            variants={itemVariants}
            className="h-12 md:h-16 flex items-center justify-center mb-6"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-xl md:text-3xl font-bold font-display text-gray-300 border-r-2 border-cyan-400 pr-1.5 animate-pulse"
              >
                {titles[index]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed mb-10"
          >
            Building scalable web applications, intelligent systems, and innovative digital experiences. Specializing in complete end-to-end full-stack architectures.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >
            <button
              onClick={() => handleScrollToSection("contact")}
              className="group flex items-center gap-1.5 px-6.5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-semibold text-sm tracking-wider shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              Get in Touch
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={triggerDownload}
              className="flex items-center gap-2 px-6.5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-[1.02] glassmorphism-light"
            >
              Download Resume
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/ijazahamed120"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/40 text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 glassmorphism-light"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ijazahamed07/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/40 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 glassmorphism-light"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ijazahamed.m2023ece@sece.ac.in"
              aria-label="Email"
              className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/40 text-gray-400 hover:text-pink-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 glassmorphism-light"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Tag */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-1.5 cursor-pointer hover:text-purple-400 transition-colors duration-300" onClick={() => handleScrollToSection("about")}>
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
