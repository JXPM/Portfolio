"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


function Header({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

 return (
     <div className="flex items-center gap-6 mb-10">
       <motion.img
        src="/profile.jpg" 
        alt="Bilé Kouamé Johan"
        className="w-40 h-40 rounded-full object-cover shadow-lg"
        whileHover={{ rotateY: 20, rotateX: 20, scale: 1.1 }}
        transition={{ duration: 0.5 }}
     /> 
      <div>
        <motion.h1 className="text-6xl font-bold">👋 Bienvenue sur mon Portfolio !</motion.h1>
        <motion.p className="text-xl mt-2 whitespace-pre-line">
          {displayedText}
        </motion.p>
      </div>
    </div>
  );
}

export default Header;
