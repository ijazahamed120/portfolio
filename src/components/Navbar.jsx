import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech", label: "Stack" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "certs", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    // Scroll progress & background highlight toggle
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Active Section Tracking via Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleScrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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

  // Dynamically generate and download a resume PDF
  const handleDownloadResume = () => {
    // PDF Header, structure, and text details
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
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "glassmorphism shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name */}
        <div 
          onClick={() => handleScrollTo("hero")} 
          className="cursor-pointer flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
            I
          </span>
          <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
            Ijaz<span className="text-purple-500">.dev</span>
          </span>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full px-2 py-1.5 glassmorphism-light">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-purple-600/20 text-cyan-400 border border-purple-500/30"
                  : "text-gray-400 hover:text-white border border-transparent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white text-sm font-semibold tracking-wide shadow-md shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02]"
          >
            Resume
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 border-b border-purple-500/20 py-6 px-6 glassmorphism animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-purple-600/10 text-cyan-400 border-l-2 border-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleDownloadResume}
              className="mt-4 flex items-center justify-center gap-1.5 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm transition-all"
            >
              Download Resume
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Top scroll progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
