// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import GradientBackground from "./GradientBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <GradientBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Engineering <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">products</span>,
          <br /> not just code
        </h1>

        <p className="mt-6 text-neutral-400 text-lg">
          Hey there - I’m Sunath Khadikar — I help build software, ship it and scale it.<br></br>
          Feel free to explore my portfolio and get in touch!
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
