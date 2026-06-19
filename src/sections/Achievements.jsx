import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Award, Zap, BarChart2 } from "lucide-react";

// Scroll-triggered animated counter helper component
function Counter({ value, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) return;

    const startTime = performance.now();

    const animateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad formula
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * end);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const stats = [
    {
      title: "LeetCode Solved",
      metric: "200",
      suffix: "+",
      description: "Consistent practice across multiple topics: Arrays, Trees, Sorting, & Dynamic Programming.",
      label: "LeetCode Practice",
      icon: <Award className="text-purple-400" size={24} />,
      color: "from-purple-500/10 to-indigo-500/5",
      borderGlow: "group-hover:border-purple-500/40",
      link: "https://leetcode.com/u/Ijazahamed_2005/",
    },
    {
      title: "LeetCode Max Rating",
      metric: "1445",
      suffix: "",
      description: "Achieved through active weekly virtual and live contest participations.",
      label: "Contest Standing",
      icon: <Zap className="text-cyan-400" size={24} />,
      color: "from-cyan-500/10 to-blue-500/5",
      borderGlow: "group-hover:border-cyan-500/40",
      link: "https://leetcode.com/u/Ijazahamed_2005/",
    },
    {
      title: "CodeChef Solved",
      metric: "350",
      suffix: "+",
      description: "Strengthening logic foundation, computational complexity understanding, and code speed.",
      label: "CodeChef Practice",
      icon: <BarChart2 className="text-pink-400" size={24} />,
      color: "from-pink-500/10 to-rose-500/5",
      borderGlow: "group-hover:border-pink-500/40",
      link: "https://www.skillrack.com/faces/resume.xhtml?id=484394&key=f49dbfed314c85421834cadd52aa0388d585d2c1",
    },
  ];

  return (
    <section id="achievements" className="relative py-24 z-10">
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-pink-400 uppercase bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20 mb-3">
            Milestones
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Key Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <a
              href={stat.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="block group hover:scale-[1.02] transition-transform duration-300"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative p-8 rounded-2xl glassmorphism border border-white/5 transition-all duration-300 text-left`}
              >
                {/* Radial color gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                />

                {/* Glowing header border line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent group-hover:via-cyan-400/60 transition-colors" />

                {/* Icon / Top row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                    {stat.label}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                </div>

                {/* Metric Value */}
                <div className="mb-4">
                  <span className="text-5xl font-extrabold font-display text-white tracking-tight">
                    <Counter value={stat.metric} suffix={stat.suffix} />
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-200 mb-3 group-hover:text-white transition-colors">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
