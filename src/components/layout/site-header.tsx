"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { navigation } from "@/lib/site-content";
import { buttonMotion } from "@/components/ui/motion-presets";

/** Responsive header with animated dropdowns and a motion-enabled mobile menu trigger. */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Market My Market home">
        <Image src="/images/m-logo1.png" width={510} height={60} alt="Market My Market" priority />
      </a>
      <nav className={mobileOpen ? "open" : ""} aria-label="Main navigation" onClick={() => setMobileOpen(false)}>
        {navigation.map((link) => link.children ? (
          <div className="nav-group" key={link.label} onMouseEnter={() => setActiveMenu(link.label)} onMouseLeave={() => setActiveMenu(null)}>
            <motion.button className="nav-trigger" type="button" aria-expanded={activeMenu === link.label} onClick={() => setActiveMenu((current) => current === link.label ? null : link.label)} whileTap={{ scale: 0.97 }}>
              {link.label}
              <motion.span animate={{ rotate: activeMenu === link.label ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown size={16} /></motion.span>
            </motion.button>
            <AnimatePresence>
              {activeMenu === link.label && (
                <motion.div className="nav-dropdown" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.16 }}>
                  {link.children.map((child) => <a key={child.label} href={child.href}>{child.label}</a>)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : <a key={link.label} href={link.href}>{link.label}</a>)}
      </nav>
      <motion.a className="header-cta" href="#contact" {...buttonMotion}>LET&apos;S TALK <ArrowRight size={16} /></motion.a>
      <motion.button className="menu" type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}>
        <Menu />
      </motion.button>
    </header>
  );
}
