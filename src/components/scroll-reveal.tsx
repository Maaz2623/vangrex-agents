"use client";

import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = PropsWithChildren<{
  as?: "div" | "section" | "article";
  className?: string;
  id?: string;
  delay?: number;
  once?: boolean;
  animateOnLoad?: boolean;
}>;

export function ScrollReveal({ as = "div", children, className, id, delay = 0, once = true, animateOnLoad = false }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Element = as === "section" ? motion.section : as === "article" ? motion.article : motion.div;

  return (
    <Element
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(5px)" }}
      whileInView={animateOnLoad ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      animate={animateOnLoad ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      viewport={{ once, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.72, delay, ease: [0.2, 0.75, 0.25, 1] }}
    >
      {children}
    </Element>
  );
}

export function StaggerReveal({ children, className, delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: PropsWithChildren<{ className?: string }>) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      className={className}
      variants={reduceMotion ? {} : { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: reduceMotion ? 0 : 0.68, ease: [0.2, 0.75, 0.25, 1] }}
    >
      {children}
    </motion.article>
  );
}
