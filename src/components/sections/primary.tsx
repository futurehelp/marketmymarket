"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { verticals, competencies } from "@/lib/site-content";
import { ArrowLink } from "@/components/ui/arrow-link";
import { cardMotion } from "@/components/ui/motion-presets";

/** Hero section with the original agency message and local source artwork. */
export function HeroSection() {
  const words = ["TRANSPARENCY", "VALUES", "RESULTS"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setWordIndex((current) => (current + 1) % words.length), 3600);
    return () => window.clearInterval(interval);
  }, [words.length]);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-side">
        <div className="hero-image-wrap">
          <Image src="/images/hero-original.webp" fill sizes="(max-width: 800px) 100vw, 62vw" alt="Market My Market campaign collage" priority />
        </div>
      </div>
      <div className="hero-content">
        <h1><span>DRIVEN BY</span><AnimatePresence mode="wait"><motion.strong key={words[wordIndex]} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: .45, ease: "easeOut" }}>{words[wordIndex]}</motion.strong></AnimatePresence></h1>
        <p>Client experience and proven results are at the core of everything we do at Market My Market.</p>
      </div>
    </section>
  );
}

/** Intro copy anchors the visual refresh in the original positioning statement. */
export function IntroSection() {
  return (
    <section className="intro" id="about">
      <div className="intro-statement">
        <h2>
          The digital landscape moves fast. Your marketing should <span>move with it</span>.
        </h2>
        <div className="intro-copy">
          <p>Too many marketing companies keep businesses guessing, making it difficult to see what is working, where momentum is building, and which opportunities deserve attention next. Without that clarity, campaigns drift, lead quality suffers, and it becomes harder to adapt to search, social, AI, and the technologies changing how customers choose.</p>
          <p>When you partner with Market My Market, specialized experts turn that complexity into a focused growth strategy built for your market. We pair transparent reporting, trusted communication, and reliable execution with the technical expertise to keep your brand visible, relevant, and ready for what is next. Your experience, your leads, and your results stay at the center of the work.</p>
        </div>
        <ArrowLink href="#verticals">See how we work</ArrowLink>
      </div>
    </section>
  );
}

/** Vertical cards use the exact local industry assets downloaded from the source site. */
export function VerticalsSection() {
  return (
    <section className="verticals" id="verticals">
      <div className="section-heading">
        <div>
          <div className="eyebrow">WHO WE WORK WITH</div>
          <h2>Specialized insight.<br /><em>Shared momentum.</em></h2>
        </div>
        <p>Different industries have different stakes. Our specialists know the difference.</p>
      </div>
      <div className="vertical-grid">
        {verticals.map((vertical) => (
          <motion.a className="vertical" href={vertical.href} key={vertical.title} {...cardMotion}>
            <div className="vertical-media" aria-hidden="true">
              <Image className="vertical-bg" src={vertical.backgroundImage} fill sizes="(max-width: 800px) 86vw, 28vw" alt="" />
              <div className="vertical-scrim" />
            </div>
            <div className="vertical-image">
              <Image src={vertical.image} fill sizes="(max-width: 800px) 86vw, 28vw" alt={`${vertical.title} marketing`} />
            </div>
            <div className="vertical-body">
              <h3>{vertical.title}</h3>
              <p>{vertical.description}</p>
              <span className="vertical-link">LEARN MORE <ArrowRight size={14} /></span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/** Competency cards map the agency's core services to the original icon set. */
export function CompetenciesSection() {
  return (
    <section className="competencies" id="results">
      <div className="eyebrow">CORE COMPETENCIES</div>
      <h2>Everything you need to<br /><em>move forward.</em></h2>
      <div className="competency-grid">
        {competencies.map((competency) => (
          <motion.div className="competency" key={competency.number} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
            <Image src={competency.image} width={145} height={121} alt="" />
            <strong>{competency.number}</strong>
            <h3>{competency.title}</h3>
            <p>{competency.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
