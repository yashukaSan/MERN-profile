import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function GeometricShapes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Sphere 1 */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          rotate: 360,
        }}
        transition={{
          x: { duration: 2, ease: "easeOut" },
          y: { duration: 2, ease: "easeOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
        className="absolute top-20 right-20 w-64 h-64 opacity-20"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 blur-3xl" />
      </motion.div>

      {/* Floating Sphere 2 */}
      <motion.div
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
          rotate: -360,
        }}
        transition={{
          x: { duration: 2.5, ease: "easeOut" },
          y: { duration: 2.5, ease: "easeOut" },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
        }}
        className="absolute bottom-32 left-20 w-96 h-96 opacity-15"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 blur-3xl" />
      </motion.div>

      {/* Cube wireframe */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/4 w-32 h-32 opacity-10"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative w-full h-full">
          {/* Wireframe cube using borders */}
          <div className="absolute inset-0 border-2 border-cyan-400/50" />
          <div className="absolute inset-0 border-2 border-cyan-400/50 transform translate-z-16" style={{ transform: "translateZ(64px)" }} />
        </div>
      </motion.div>

      {/* Geometric grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Additional floating elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 blur-3xl"
      />
    </div>
  );
}
