"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { buttonMotion } from "@/components/ui/motion-presets";

/** Compact utility bar that introduces the agency's category and CTA. */
export function TopLine() {
  return (
    <div className="topbar">
      <span>SEO &amp; CONTENT MARKETING FOR GROWTH-MINDED BUSINESSES</span>
      <motion.a href="#contact" {...buttonMotion}>LET&apos;S TALK <ArrowRight size={14} /></motion.a>
    </div>
  );
}
