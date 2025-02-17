"use client";

import React, { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaCode, FaChartLine, FaFileExcel, FaDownload,
  FaDatabase, FaChartBar, FaGraduationCap, FaCertificate, FaPython, FaJs, FaHtml5, FaCss3, FaReact, FaNodeJs 
} from "react-icons/fa";
import { 
  SiOdoo,
  SiTableau
} from "react-icons/si";
import { 
  DiPostgresql, DiMysql} from "react-icons/di";
// import Link from "next/link";
import Header from "@/components/ui/Header";
// import Welcome from "@/components/ui/Welcome";
// import ProfileImage from "../../img/ProfileImage";

export default function Portfolio() {
  const text = `
Je suis Bilé Kouamé Johan Paul-Marie, passionné par la Data, le Développement Web et l'Intelligence Artificielle. 🎯
Actuellement à la recherche d'une alternance en Data, je souhaite mettre mes compétences au service d'une entreprise innovante.

🔹 Data Analyst & Développeur, j'explore les données pour en extraire des insights stratégiques et créer des solutions optimisées.
🔹 Mon objectif ? Allier technologie et stratégie pour apporter un impact réel.
📌 Curieux de découvrir mes réalisations ? Naviguez à travers mon portfolio et explorons ensemble de nouvelles opportunités ! 🚀
`;
  const experiences = [
  {
    title: "Stage en Data Analysis",
    company: "ICM Holding",
    img: "/experience1.jpeg",
    description: "Analyse des données et création de dashboards avec Excel. ",
    file: "/files/icm_report.pdf",
  },
  {
    title: "Exploration de Données",
    company: "Projet scolaire",
    img: "/experience2.png",
    description: "Développement d'une application web pour la gestion des stocks.",
    file: "/files/freelance_project.pdf",
  },
  {
    title: "Chatbot IT",
    company: "Projet scolaire",
    img: "/chatbot.png",
    description: "Développement et intégration d’un chatbot IT avec Flask et OpenAI API.",
    file: "/files/chatbot_project.pdf",
  },
  {
    title: "Projet Gema",
    company: "J&M Écodigital",
    img: "/gema.jpg",
    description: "Chef de projet et assistant concepteur de bases de données.",
    file: "/files/gema_report.pdf",
  },
];

  const formations = [
    { title: "Bachelor en Data / Development manager", institution: "IA School Lille (France)", year: "2023 - Présent" },
    { title: "Formation Anglaise | Prise de parole en public", institution: "Madina, East lagon (Ghana)", year: "2022" },
    { title: "Formation Informatique | Html, Css, Js", institution: "Université de Cocody (Côte d'Ivoire)", year: "2021" },
    
  ];

  const certifications = [
    {
      title: "Certification en Computer Hardware Basics ",
      issuer: "Cisco",
      year: "2024",
      file: "/Computer_Hardware_Basics_Badge.pdf",
    },
    {
      title: "Certification Python",
      issuer: "Skilleos",
      year: "2024",
      file: "/certification_python.pdf",
    },
    {
      title: "Certification Outlook",
      issuer: "Skilleos",
      year: "2024",
      file: "/Certificat-Outlook.pdf",
    },
    {
      title: "Certification HTML & CSS",
      issuer: "Skilleos",
      year: "2024",
      file: "/Certificat-ApprendreleslangagesHTMLetCSS.pdf",
    },
  ];
  

  const skills = [
    { category: "Développement Web", icon: <FaCode />, color: "text-blue-400", details: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
      ]
    },
    { category: "Base de Données", icon: <FaDatabase />, color: "text-green-400", details: [
        { name: "SQL", icon: <DiMysql /> },
        { name: "PostgreSQL", icon: <DiPostgresql /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Odoo", icon: <SiOdoo /> },
      ]
    },
    { category: "Data Visualisation", icon: <FaChartBar />, color: "text-yellow-400", details: [
      { name: "Tableau Software", icon : <SiTableau /> },
      {name : "Power BI",icon : <FaChartLine /> },
      {name :"Excel", icon : <FaFileExcel /> },  
      ] 
  },
  ];


  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const toggleSkill = (category: string) => {
    setSelectedSkill(selectedSkill === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 flex flex-col max-w-7xl mx-auto">
      {/* {welcome} */}
      {/* <Welcome /> */}
      {/* Header */}
      {/* <ProfileImage /> */}
      <Header text={text} />
      {/* Formations */}
      <motion.section 
  className="mt-12"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
    <FaGraduationCap /> Formations
  </h2>
  <ul className="bg-gray-800 p-6 rounded-xl shadow-lg">
    {formations.map((formation, index) => (
      <li key={index} className="mb-4">
        <h3 className="text-xl font-bold">{formation.title}</h3>
        <p className="text-gray-400">{formation.institution} - {formation.year}</p>
      </li>
    ))}
  </ul>
</motion.section>
            {/* Expériences */}
            <motion.section 
  className="mt-12"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Expériences Professionnelles
      </motion.h1>

      {experiences.map((exp, index) => (
        <div key={index} className="mb-10 flex flex-col md:flex-row-reverse items-center">
          <motion.img 
            src={exp.img} 
            alt={exp.company}
            className="md:w-1/4 rounded-lg shadow-lg mr-6 mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
          />
          
          <div className="md:w-2/3">
            <motion.h2 
              className="text-3xl font-semibold mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {exp.title} - {exp.company}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {exp.description}
            </motion.p>
            
            <motion.a
              href={exp.file}
              download
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              📄 Télécharger le rapport
            </motion.a>
          </div>
        </div>
      ))}
    </motion.section>

        {/* Compétences */}
        <motion.section 
  className="mt-12"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
          <FaCode /> Compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className={`cursor-pointer p-4 bg-gray-800 rounded-xl shadow-lg ${skill.color}`} onClick={() => toggleSkill(skill.category)}>
              <h3 className="text-lg font-bold flex items-center gap-2">
                {skill.icon} {skill.category}
              </h3>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedSkill && (
            <motion.div key={selectedSkill} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-4 p-4 bg-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold">{selectedSkill}</h3>
              <ul className="mt-2">
                {skills.find((s) => s.category === selectedSkill)?.details.map((detail, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    {detail.icon} {detail.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

          
     {/* Certifications */}
     <motion.section 
  className="mt-12"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
    <FaCertificate /> Certifications
  </h2>
  <ul className="bg-gray-800 p-6 rounded-xl shadow-lg">
    {certifications.map((cert, index) => (
      <li key={index} className="mb-4 cursor-pointer hover:text-blue-400" onClick={() => window.open(cert.file, "_blank")}>
        <h3 className="text-xl font-bold">{cert.title}</h3>
        <p className="text-gray-400">{cert.issuer} - {cert.year}</p>
      </li>
    ))}
  </ul>
</motion.section>

       {/* Section de téléchargement du CV */}
       <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 flex justify-center items-center gap-2">
          <FaDownload /> Télécharger mon CV
        </h2>
        <motion.a
          href="/CV_Bile_Kouame.pdf"
          download="CV_Bile_Kouame.pdf"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaDownload className="inline-block mr-2" /> Télécharger
        </motion.a>
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-gray-800 text-white py-6 text-center flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold">Me contacter</h2>
        <div className="flex gap-6 text-xl">
          <a href="mailto:bilekouame04@gmail.com" className="hover:text-blue-400"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/kouam%C3%A9-bile-8682b8296/" target="_blank" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="https://github.com/JXPM" target="_blank" className="hover:text-blue-400"><FaGithub /></a>
        </div>
        <p className="text-sm">&copy; 2025 Bilé Kouamé Johan - Tous droits réservés.</p>
      </footer>
    </div>
  );
}
