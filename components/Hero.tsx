"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        Mayank Shrivastava
      </motion.h1>

      <p className="mt-4 text-xl text-gray-600">
        AI/ML Engineer | Building Intelligent Systems
      </p>

      <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 bg-darkGray text-white rounded-lg">
          View Projects
        </button>
        <button className="px-6 py-2 border border-darkGray rounded-lg">
          Contact
        </button>
      </div>
    </section>
  );
}