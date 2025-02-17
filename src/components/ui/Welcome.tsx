import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomePageProps {
  onFinish?: () => void;
}

export default function WelcomePage({ onFinish }: WelcomePageProps) {
  const [visible, setVisible] = useState(true);
  const particlesRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setVisible(false);
    onFinish?.();
  };

  useEffect(() => {
    const moveParticles = (e: MouseEvent) => {
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i] as HTMLElement;
          const x = e.clientX + (Math.random() - 0.5) * 80;
          const y = e.clientY + (Math.random() - 0.5) * 80;
          particle.style.transform = `translate(${x}px, ${y}px) scale(${Math.random() * 1.2})`;
        }
      }
    };
    document.addEventListener("mousemove", moveParticles);
    return () => document.removeEventListener("mousemove", moveParticles);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1, filter: "blur(0px)" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2, filter: "blur(30px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="fixed top-0 left-0 w-screen h-screen bg-black flex justify-center items-center z-50 cursor-pointer overflow-hidden"
          onClick={handleClick}
        >
          {/* Contenu principal */}
          <div className="text-center text-white z-10">
            <motion.h1
              className="text-6xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Bienvenue dans mon Univers
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Cliquez pour entrer 🚀
            </motion.p>
          </div>

          {/* Particules interactives */}
          <div ref={particlesRef} className="absolute w-full h-full pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-50"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 1,
                }}
                animate={{
                  opacity: [0.3, 0.9, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
