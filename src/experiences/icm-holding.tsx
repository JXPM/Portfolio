"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 max-w-4xl mx-auto">
      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Expériences Professionnelles
      </motion.h1>

      {/* Expérience 1 - ICM Holding */}
      <div className="mb-10">
        <motion.h2 
          className="text-3xl font-semibold mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Stage en Data Analysis - ICM Holding
        </motion.h2>

        <motion.img 
          src="/experience1.jpeg" 
          alt="ICM Holding"
          className="w-full rounded-lg shadow-lg mb-4"
          whileHover={{ scale: 1.05 }}
        />

        <motion.p 
          className="text-lg text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Analyse des données et création de dashboards avec Excel. Expérience enrichissante dans la manipulation et la visualisation des données.
        </motion.p>

        <motion.a
          href="/files/icm_report.pdf"
          download="icm_report.pdf"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          📄 Télécharger le rapport
        </motion.a>
      </div>

      {/* Ajoute ici d'autres expériences similaires si nécessaire */}
    </div>
  );
}
