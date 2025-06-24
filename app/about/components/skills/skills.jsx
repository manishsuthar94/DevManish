"use client";
import { motion } from "framer-motion";
import { CodepenIcon } from "./icons";

const selectedSkill = {
  title: "Web Development",
  icon: CodepenIcon,
  description: "Building modern, responsive web applications",
  languages: [
    "HTML",
    "CSS",
    "JavaScript",
    "C",
    "Python (Basic)",
    "React",
    "TailwindCSS (Basic)",
    "Bootstrap (Basic)",
  ],
  tools: ["Visual Studio Code", "Git", "Github"],
};

export default function Skills() {
  return (
    <div className="relative">
      <div className="mx-auto container px-6 py-20">
        {/* Languages & Frameworks */}
        <motion.div
          className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Languages & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {selectedSkill.languages.map((lang, index) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 
									border border-gray-400/40 rounded-full text-black font-medium
									backdrop-blur-sm hover:scale-105 transition-transform cursor-default
									hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {selectedSkill.tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-300/60 to-gray-100/40 
									border border-gray-500/40 rounded-full text-black font-medium
									backdrop-blur-sm hover:scale-105 transition-transform cursor-default
									hover:bg-gradient-to-r hover:from-gray-400/60 hover:to-gray-200/50"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
