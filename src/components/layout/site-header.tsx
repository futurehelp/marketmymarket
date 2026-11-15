"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { navigation } from "@/lib/site-content";
import { buttonMotion } from "@/components/ui/motion-presets";

/** Responsive header with a motion-enabled mobile menu trigger. */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Market My Market home">
        <Image src="/images/site-logo.png" width={281} height={144} alt="Market My Market" />
      </a>
      <nav className={mobileOpen ? "open" : ""} aria-label="Main navigation" onClick={() => setMobileOpen(false)}>
        {navigation.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
      </nav>
      <motion.a className="header-cta" href="#contact" {...buttonMotion}>LET&apos;S TALK <ArrowRight size={15} /></motion.a>
      <motion.button className="menu" type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
        <Menu />
      </motion.button>
    </header>
  );
}
