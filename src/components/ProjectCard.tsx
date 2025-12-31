"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-blue-500/30"
    >
      <div className="relative rounded-2xl bg-neutral-950 p-6 h-full overflow-hidden">
        {/* glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl" />

        <div className="relative z-10">
          <h3 className="text-xl font-semibold">{title}</h3>

          <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {link && (
            <Link
              href={link}
              className="inline-block mt-6 text-sm text-purple-400 hover:text-purple-300"
            >
              View details →
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
