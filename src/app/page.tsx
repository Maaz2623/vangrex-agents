import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Check, ChevronDown, CirclePlay, GitBranch, Layers3, Menu, MoveUpRight, Orbit, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { AgentNetwork } from "@/components/agent-network";
import { RevealItem, ScrollReveal, StaggerReveal } from "@/components/scroll-reveal";

const capabilities = [
  { icon: Bot, title: "Agents made for your business", copy: "Shape each agent around a role, a use case, and the way your business actually works." },
  { icon: Layers3, title: "Your apps. Your context.", copy: "Give agents the instructions, knowledge, and tools they need to be useful in your product or team." },
  { icon: Workflow, title: "From setup to deployment", copy: "Configure a custom agent, put it where it can help, and refine it as your needs change." },
];

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement"><span className="announcement-dot" /> Vangrex Agent Studio <span className="announcement-divider">/</span> Build custom agents. Deploy them where you work. <ArrowRight size={13} /></div>
      <header className="site-header shell">
        <Link className="brand" href="#top" aria-label="Vangrex home"><BrandMark /><span>vangrex<span className="brand-light">/agents</span></span></Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="#platform">Platform <ChevronDown size={13} /></Link>
          <Link href="#how-it-works">How it works</Link>
          <Link href="#principles">Principles</Link>
          <Link href="#footer">Resources <ArrowUpRight size={12} /></Link>
        </nav>
        <div className="header-actions"><ThemeToggle /><Button className="button-dark header-cta" asChild><Link href="#get-started">Talk to our team <ArrowUpRight size={15} /></Link></Button><button className="mobile-menu" aria-label="Open menu"><Menu size={21} /></button></div>
      </header>

      <section className="hero shell" id="top">
        <ScrollReveal className="hero-copy" animateOnLoad delay={0.1}>
          <div className="eyebrow"><span className="eyebrow-mark"><Sparkles size={12} /></span> YOUR CUSTOM AI AGENT STUDIO</div>
          <h1><span className="sketch-word sketch-build">Build<svg viewBox="0 0 150 20" aria-hidden="true"><path pathLength="1" d="M4 13.5C34 7.5 86 7 144 10.5" /><path pathLength="1" d="M22 17C54 12.5 104 12 132 13" /></svg></span> <span className="sketch-word sketch-agents">agents<svg viewBox="0 0 180 20" aria-hidden="true"><path pathLength="1" d="M3 13C42 8 111 7.5 174 10" /><path pathLength="1" d="M20 17C63 13 115 12.5 156 13" /></svg></span><br />for your <span className="hero-emphasis">business.</span></h1>
          <p className="hero-deck">Create custom AI agents for your app, business, or a specific job to be done. Give each one the right context and tools, then deploy it where it can make a difference.</p>
          <div className="hero-actions"><Button className="button-coral" asChild><Link href="#get-started">Create your agent <ArrowUpRight size={16} /></Link></Button><Link className="watch-link" href="#platform"><span className="play-button"><CirclePlay size={17} /></span> Explore the platform</Link></div>
          <div className="hero-note"><span className="note-line" /> One platform for app agents, business agents, and everything custom.</div>
        </ScrollReveal>
        <AgentNetwork />
      </section>

      <section className="signal-band" aria-label="Platform highlights"><div className="shell signal-inner"><span>BUILD YOUR AGENT</span><i /><span>CONNECT YOUR CONTEXT</span><i /><span>DEPLOY TO YOUR APP</span><i /><span>GROW AS YOU GO</span><div className="signal-mark"><BrandMark /></div></div></section>

      <section className="platform-section shell" id="platform">
        <ScrollReveal className="section-heading"><div><div className="eyebrow"><span className="eyebrow-mark"><Orbit size={12} /></span> YOUR AGENT. YOUR RULES.</div><h2>Made for your app.<br /><em>Built around you.</em></h2></div><p>Start with what you need an agent to do. Customize its role, instructions, and tools, then deploy it for your customers or your team.</p></ScrollReveal>
        <StaggerReveal className="capability-grid">{capabilities.map(({ icon: Icon, title, copy }, index) => <RevealItem className="capability" key={title}><div className="capability-top"><span className="cap-index">0{index + 1}</span><span className="cap-icon"><Icon size={19} strokeWidth={1.6} /></span></div><h3>{title}</h3><p>{copy}</p><Link href="#how-it-works" aria-label={`Explore ${title}`}><ArrowUpRight size={16} /></Link></RevealItem>)}</StaggerReveal>
      </section>

      <section className="workflow-section" id="how-it-works"><div className="shell workflow-layout"><ScrollReveal className="workflow-copy"><div className="eyebrow"><span className="eyebrow-mark"><GitBranch size={12} /></span> FROM IDEA TO DEPLOYMENT</div><h2>Define the role.<br /><em>Put it to work.</em></h2><p>Describe the job, shape how your agent responds, and provide the context and tools it needs. Then deploy it into your app or business workflow.</p><Link className="text-link" href="#get-started">Build a custom agent <ArrowRight size={15} /></Link></ScrollReveal><ScrollReveal className="workflow-visual" delay={0.14}><div className="workflow-window"><div className="window-head"><div className="window-dots"><i /><i /><i /></div><span>AGENT BUILDER</span><span className="window-save">DRAFT <Check size={11} /></span></div><div className="workflow-body"><div className="workflow-prompt"><span className="prompt-icon"><Sparkles size={15} /></span><div><small>DESCRIBE YOUR AGENT</small><p>Create a support agent for my app that answers product questions and knows when to escalate.</p></div></div><div className="workflow-branch"><div className="branch-label">YOUR AGENT SETUP <span>3 STEPS</span></div><div className="workflow-step"><span className="step-num">01</span><span className="step-icon lilac"><Bot size={14} /></span><div><b>Set its role and behavior</b><small>Instructions · tone · boundaries</small></div><span className="step-state">READY <Check size={11} /></span></div><div className="workflow-step"><span className="step-num">02</span><span className="step-icon orange"><Layers3 size={14} /></span><div><b>Connect useful context</b><small>Knowledge · tools · app data</small></div><span className="step-state working">CONFIGURE <i /></span></div><div className="workflow-step"><span className="step-num">03</span><span className="step-icon mint"><ArrowUpRight size={14} /></span><div><b>Deploy where it belongs</b><small>Your app · your business</small></div><span className="step-lock"><ShieldCheck size={13} /></span></div></div><div className="human-note"><span><ShieldCheck size={14} /></span> You stay in control after launch <ArrowUpRight size={13} /></div></div></div><div className="workflow-orbit"><span /><span /><span /></div></ScrollReveal></div></section>

      <ScrollReveal as="section" className="principles-section shell" id="principles"><div className="principle-stamp"><BrandMark /><span>BUILT AROUND<br />PEOPLE</span></div><div className="principles-copy"><div className="eyebrow"><span className="eyebrow-mark"><ShieldCheck size={12} /></span> YOUR AGENT, UNDER YOUR CONTROL</div><h2>Make it yours.<br /><em>Set the boundaries.</em></h2><p>Every business is different. Customize what your agent can do, the context it can use, and when it should hand a decision back to a person.</p><div className="principle-points"><span><Check size={14} /> Define its role and instructions</span><span><Check size={14} /> Choose the context and tools it can use</span><span><Check size={14} /> Keep a person in the loop when it matters</span></div></div></ScrollReveal>

      <section className="closing-section" id="get-started"><div className="closing-shape shape-left" /><div className="closing-shape shape-right" /><div className="closing-content"><div className="closing-mark"><BrandMark /></div><div className="eyebrow"><span className="eyebrow-mark"><Sparkles size={12} /></span> YOUR IDEA, READY TO DEPLOY</div><h2>Your app.<br /><em>Your agent.</em></h2><p>Start with the work you want an agent to do. We’ll help you shape it and bring it to life.</p><Button className="button-coral" asChild><a href="mailto:hello@vangrex.com?subject=Let%27s%20build%20a%20Vangrex%20agent">Let’s build your agent <MoveUpRight size={16} /></a></Button><span className="closing-footnote">Custom agents for products, teams, and businesses.</span></div><div className="closing-coordinate">V / 001 · 2026</div><div className="closing-coordinate coordinate-right">BUILD · CUSTOMIZE · DEPLOY</div></section>

      <footer className="site-footer shell" id="footer"><Link className="brand" href="#top"><BrandMark /><span>vangrex<span className="brand-light">/agents</span></span></Link><span className="footer-copy">Custom agents, built for your world.</span><div className="footer-links"><Link href="#platform">Build</Link><Link href="#principles">Control</Link><Link href="mailto:hello@vangrex.com">Contact <ArrowUpRight size={12} /></Link></div><span className="copyright">© 2026 Vangrex</span></footer>
    </main>
  );
}
