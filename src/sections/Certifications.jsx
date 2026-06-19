import { motion } from "framer-motion";
import { CheckCircle2, Shield, Flame, Database, FileCode, Layers } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      name: "React Certification",
      issuer: "Meta / Frontend Specialization",
      date: "2025",
      badge: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-cyan-400 fill-none stroke-2">
          <ellipse rx="9" ry="3.5" cx="12" cy="12" transform="rotate(30 12 12)" />
          <ellipse rx="9" ry="3.5" cx="12" cy="12" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#06b6d4" />
        </svg>
      ),
      color: "rgba(6, 182, 212, 0.15)",
      border: "hover:border-cyan-500/30",
      link: "https://drive.google.com/file/d/1Ng9MWS1JdLEeiErQ7W8Xuymjx1_doahc/view",
    },
    {
      name: "Infosys MongoDB",
      issuer: "Infosys / NoSQL Architect",
      date: "2025",
      badge: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-green-500">
          <path d="M12 2c-.2 0-.3.1-.4.2C10.2 3.8 6 8.5 6 12.5c0 3.6 2.7 6.5 6 6.5s6-2.9 6-6.5C18 8.5 13.8 3.8 12.1 2.2c-.1-.1-.2-.2-.1-.2zm.5 3.5v11.6c1.6-.4 2.8-1.8 2.8-3.6 0-2.3-1.8-5.3-2.8-8z" />
        </svg>
      ),
      color: "rgba(34, 197, 94, 0.15)",
      border: "hover:border-green-500/30",
      link: "https://drive.google.com/file/d/1JwetL2VSEbJx_f0FcP0Y1qrRunitxjWm/view",
    },
    {
      name: "Unity Associate Developer",
      issuer: "Unity Technologies / Game Dev",
      date: "2024",
      badge: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-gray-300">
          <path d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2zm1 3.4l6.5 3.8-3 1.7L13 9.1V5.4zm-2 0v3.7L6.5 10.9l-3-1.7L11 5.4zm-8 4.6l6.5 3.8-6.5 3.8V10zm8 8.6L4.5 14.8l3-1.7 3.5 2v3.5zm2 0v-3.5l3.5-2 3 1.7-6.5 3.8zm8-4.8l-6.5-3.8 6.5-3.8v7.6z" />
        </svg>
      ),
      color: "rgba(209, 213, 219, 0.15)",
      border: "hover:border-gray-500/30",
      link: "https://drive.google.com/file/d/1EczzRDP6EFvhIQWDmTvTda-JoZnsklx2/view",
    },
    {
      name: "Ethical Hacking Essentials",
      issuer: "Cybersecurity Training / EC-Council",
      date: "2024",
      badge: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-rose-500">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-4-10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
        </svg>
      ),
      color: "rgba(244, 63, 94, 0.15)",
      border: "hover:border-rose-500/30",
      link: "https://drive.google.com/file/d/1EczzRDP6EFvhIQWDmTvTda-JoZnsklx2/view",
    },
    {
      name: "C and C++ Programming",
      issuer: "Software Logic & Algorithms",
      date: "2023",
      badge: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-purple-500">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 15a5 5 0 01-5-5 5 5 0 015-5 5 5 0 013.9 1.9l-2.4 2.4A1.8 1.8 0 0012 10.2a1.8 1.8 0 000 3.6c.6 0 1.1-.3 1.5-.8l2.4 2.4A5 5 0 0112 17zm7-5h-2V9.5h-2.5v-2H15V5h2.5v2.5H20v2h-1V12z" />
        </svg>
      ),
      color: "rgba(168, 85, 247, 0.15)",
      border: "hover:border-purple-500/30",
      link: "https://drive.google.com/file/d/1JwetL2VSEbJx_f0FcP0Y1qrRunitxjWm/view",
    },
    {
      name: "Stellar Minds Certificate",
      issuer: "Stellar Minds / Problem Solving",
      date: "2024",
      badge: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-amber-500">
          <path d="M12 2C6.5 2 2 4.2 2 7v10c0 2.8 4.5 5 10 5s10-2.2 10-5V7c0-2.8-4.5-5-10-5zm0 3c4.4 0 8 1.3 8 2s-3.6 2-8 2-8-1.3-8-2 3.6-2 8-2zm8 12c0 .7-3.6 2-8 2-8-1.3-8-2v-2.8c1.8 1.1 4.7 1.8 8 1.8s6.2-.7 8-1.8V17zm0-4.8c-1.8 1.1-4.7 1.8-8 1.8s-6.2-.7-8-1.8V9.4c1.8 1.1 4.7 1.8 8 1.8s6.2-.7 8-1.8v2.8z" />
        </svg>
      ),
      color: "rgba(245, 158, 11, 0.15)",
      border: "hover:border-amber-500/30",
      link: "https://drive.google.com/file/d/1tTcggVYHC0W428tclX2T5AnEI3_P2b4n/view",
    },
    {
      name: "Red Hat Certification",
      issuer: "Red Hat Linux Enterprise / System Admin",
      date: "2024",
      badge: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-orange-500">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M12 6v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      color: "rgba(249, 115, 22, 0.15)",
      border: "hover:border-orange-500/30",
      link: "https://drive.google.com/file/d/1tTcggVYHC0W428tclX2T5AnEI3_P2b4n/view",
    },
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="certs" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 mb-3">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          {certifications.map((cert, idx) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="block group hover:scale-[1.03] transition-transform duration-300"
            >
              <motion.div
                variants={itemVariants}
                className={`relative p-6 rounded-2xl glassmorphism border border-white/5 ${cert.border} transition-all duration-300 flex flex-col justify-between min-h-[180px] hover:shadow-lg h-full`}
              >
                {/* Soft radial glow backplate */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `radial-gradient(120px circle at 50% 50%, ${cert.color}, transparent)`,
                  }}
                />

                {/* Glowing header border line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent group-hover:via-cyan-400/40 transition-colors" />

                {/* Top Row: Badge & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-105 transition-transform duration-300">
                    {cert.badge}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 font-mono">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    {cert.issuer}
                  </p>
                </div>

                {/* Verify Badge Tag */}
                <div className="mt-4 flex items-center gap-1 text-[10px] font-semibold text-gray-400 group-hover:text-purple-400 transition-colors">
                  <CheckCircle2 size={12} className="text-emerald-400 group-hover:text-purple-400" />
                  <span>View Certificate</span>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
