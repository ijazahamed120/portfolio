import { useEffect, useState, useRef } from "react";

export default function CursorGlow() {
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Enable on desktop pointer devices
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    if (mediaQuery.matches) return;

    setIsVisible(true);
    document.documentElement.classList.add("custom-cursor-active");

    const updatePosition = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId;

    const animateTrail = () => {
      const targetX = posRef.current.x;
      const targetY = posRef.current.y;
      
      const currentX = trailRef.current.x;
      const currentY = trailRef.current.y;

      const dx = targetX - currentX;
      const dy = targetY - currentY;

      // Smooth lag interpolation for the background light
      const nextX = currentX + dx * 0.1;
      const nextY = currentY + dy * 0.1;

      trailRef.current = { x: nextX, y: nextY };
      setTrail({ x: nextX, y: nextY });

      animationFrameId = requestAnimationFrame(animateTrail);
    };

    animateTrail();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(500px circle at ${trail.x}px ${trail.y}px, rgba(168, 85, 247, 0.08), rgba(6, 182, 212, 0.04), transparent 80%)`,
      }}
    />
  );
}
