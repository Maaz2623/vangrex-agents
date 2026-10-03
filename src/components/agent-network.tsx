"use client";

import { useEffect, useRef } from "react";
import { Check, Command, Orbit, Sparkles, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export function AgentNetwork() {
  const scene = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), { stiffness: 110, damping: 20, mass: 0.7 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), { stiffness: 110, damping: 20, mass: 0.7 });

  useEffect(() => {
    if (!scene.current || reduceMotion) return;
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".agent-node", { opacity: 0, z: -90, scale: 0.76, duration: 0.86, stagger: 0.12 })
        .from(".task-chip", { opacity: 0, y: 12, z: -18, duration: 0.52, stagger: 0.13 }, "-=0.42")
        .from(".flow-line", { scaleX: 0, transformOrigin: "left center", duration: 0.62, stagger: 0.12, ease: "power2.out" }, "-=0.65");

      gsap.to(".orbit-two", {
        rotation: 12,
        ease: "none",
        scrollTrigger: {
          trigger: scene.current,
          start: "top 88%",
          end: "bottom 16%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
      gsap.to(".node-build", {
        z: 30,
        rotationY: 8,
        ease: "none",
        scrollTrigger: {
          trigger: scene.current,
          start: "top 80%",
          end: "bottom 24%",
          scrub: 1,
        },
      });
    }, scene);

    return () => context.revert();
  }, [reduceMotion]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse" || !scene.current) return;
    const bounds = scene.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      ref={scene}
      className="hero-art"
      aria-label="Illustration of a connected team of AI agents"
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1100, transformStyle: "preserve-3d" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="art-topline"><span><span className="live-dot" /> AGENT STUDIO / 01</span><span>DEPLOYMENTS <span className="art-count">03</span></span></div>
      <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-outer" />
      <div className="art-cross cross-a" /><div className="art-cross cross-b" />
      <div className="flow-line flow-one" /><div className="flow-line flow-two" /><div className="flow-line flow-three" />
      <div className="agent-core" aria-hidden="true"><div className="core-halo" /><div className="core-mark"><span /><span /><span /><span /></div><span className="core-label">VANGREX</span></div>
      <div className="agent-node node-research"><span className="node-glyph lilac"><Orbit size={16} /></span><span className="node-name">Support</span><span className="node-type">CUSTOM AGENT</span><span className="node-status"><i /> deployed</span></div>
      <div className="agent-node node-build"><span className="node-glyph orange"><Command size={16} /></span><span className="node-name">Sales</span><span className="node-type">BUSINESS AGENT</span><span className="node-status"><i /> connected</span></div>
      <div className="task-chip task-one"><span className="task-check"><Check size={11} /></span><span><b>App connected</b><small>Support agent · live</small></span><span className="chip-open"><Sparkles size={12} /></span></div>
      <div className="task-chip task-two"><span className="task-spark"><Zap size={12} fill="currentColor" /></span><span><b>Agent deployed</b><small>Ready for your customers</small></span><span className="pulse-bars"><i /><i /><i /><i /></span></div>
      <div className="art-caption"><span>01 / CUSTOM AGENTS</span><span>BUILT FOR YOUR BUSINESS</span></div>
    </motion.div>
  );
}
