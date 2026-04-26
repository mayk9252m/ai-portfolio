"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 85 },
  { name: "Deep Learning", level: 80 },
];

export default function Skills() {
  return (
    <section className="py-20 bg-lightGray px-10">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      {skills.map((skill, i) => (
        <div key={i} className="mb-4">
          <p>{skill.name}</p>
          <div className="w-full bg-gray-300 h-2 rounded">
            <motion.div
              className="bg-darkGray h-2 rounded"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}