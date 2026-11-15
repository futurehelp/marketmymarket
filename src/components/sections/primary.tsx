"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { verticals, competencies } from "@/lib/site-content";
import { ArrowLink } from "@/components/ui/arrow-link";
import { buttonMotion, cardMotion } from "@/components/ui/motion-presets";

/** Hero section with the original agency message and local source artwork. */
export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="eyebrow">THE DIGITAL LANDSCAPE NEVER STOPS MOVING</div>
        <h1>Driven by<br /><em>what matters.</em></h1>
        <p>Transparency. Values. People. Results. Client experience and proven growth are at the core of everything we do.</p>
        <motion.a className="button" href="#contact" {...buttonMotion}>Start a conversation <ArrowRight size={16} /></motion.a>
      </div>
      <div className="hero-side">
        <div className="hero-image-wrap">
          <Image src="/images/hero-original.webp" fill sizes="(max-width: 800px) 86vw, 42vw" alt="Market My Market team collaborating" priority />
        </div>
        <span>Strategy built for the next move ↗</span>
      </div>
    </section>
  );
}

/** Intro copy anchors the visual refresh in the original positioning statement. */
export function IntroSection() {
  return (
    <section className="intro" id="about">
      <div className="eyebrow">AN AGENCY THAT CONSTANTLY CHANGES</div>
      <div>
        <h2>Marketing that keeps pace with <em>your market.</em></h2>
        <p>The digital world is always changing. Your strategy should too. We guide hundreds of businesses through every stage of growth with tailored solutions, trusted communication, and a clear view of what is working.</p>
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
        {verticals.map((vertical, index) => (
          <motion.a className="vertical" href={vertical.href} key={vertical.title} {...cardMotion}>
            <div className="vertical-image">
              <Image src={vertical.image} fill sizes="(max-width: 800px) 86vw, 28vw" alt={`${vertical.title} marketing`} />
            </div>
            <div className="vertical-body">
              <span>0{index + 1} / 03</span>
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
