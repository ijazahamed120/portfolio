import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-black/60 py-12 z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side Attribution */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-semibold text-gray-200">
            Designed and Developed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">Ijaz Ahamed M</span>
          </p>
          <p className="text-xs text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} Ijaz.dev. All rights reserved.
          </p>
        </div>

        {/* Right Side Scroll Trigger */}
        <button
          onClick={handleScrollToTop}
          aria-label="Back to top"
          className="group flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
