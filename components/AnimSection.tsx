"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function AnimSection({ children, delay = 0, className = "" }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}