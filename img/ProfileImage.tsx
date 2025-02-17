import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProfileImage() {
  const [isFlipping, setIsFlipping] = useState(true);

  useEffect(() => {
    // Arrête l'animation après 1 seconde
    setTimeout(() => {
      setIsFlipping(false);
    }, 1000);
  }, []);

  return (
    <motion.img
      src="/profile.jpg" // Remplace avec le chemin de ton image
      alt="Photo de profil"
      className="w-32 h-32 rounded-full mx-auto shadow-lg"
      animate={isFlipping ? { rotateY: 360 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
    
  );
}
