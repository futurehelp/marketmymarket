"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ArrowLink } from "@/components/ui/arrow-link";
import { buttonMotion } from "@/components/ui/motion-presets";

/** Final contact section for the primary agency conversion. */
export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div>
        <div className="eyebrow">READY TO START THE CONVERSATION?</div>
        <h2>Let&apos;s make<br /><em>something happen.</em></h2>
        <p>Tell us what you&apos;re working toward. We&apos;ll bring the strategy, transparency, and follow-through to help you get there.</p>
      </div>
      <motion.a className="contact-arrow" href="mailto:info@marketmymarket.com" aria-label="Email Market My Market" {...buttonMotion}>
        <ArrowRight size={40} />
      </motion.a>
    </section>
  );
}

/** A small reusable CTA band for any future page extensions. */
export function ContactLink() {
  return <ArrowLink href="mailto:info@marketmymarket.com">LET&apos;S TALK</ArrowLink>;
}
