"use client";

import { motion } from "framer-motion";
import { socialLinks, type SocialLink } from "@/lib/site-content";

/** Social follow section keeps verified platform destinations visible near the footer. */
export function SocialSection() {
  return (
    <section className="socials" id="social" aria-labelledby="social-heading">
      <div className="socials-inner">
        <div className="eyebrow">STAY IN THE LOOP</div>
        <h2 id="social-heading">Follow us on social media<br /><em>for more high-value content.</em></h2>
        <div className="social-list">
          {socialLinks.map((link) => (
            <motion.a className="social-link" href={link.href} key={link.platform} target="_blank" rel="noreferrer" whileHover={{ x: 8 }} whileTap={{ scale: 0.99 }}>
              <span className="social-icon" aria-hidden="true"><SocialIcon platform={link.platform} /></span>
              <span>{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ platform }: { platform: SocialLink["platform"] }) {
  if (platform === "facebook") {
    return <svg viewBox="0 0 24 24" focusable="false"><path d="M14 21v-8h3l1-4h-4V7c0-1.2.4-2 2-2h2V1.4c-.7-.1-1.7-.2-2.8-.2-3.3 0-5.2 2-5.2 5.4V9H7v4h3v8h4Z" /></svg>;
  }

  if (platform === "instagram") {
    return <svg viewBox="0 0 24 24" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="social-dot" /></svg>;
  }

  if (platform === "youtube") {
    return <svg viewBox="0 0 24 24" focusable="false"><path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.9 2.9 0 0 0-2 2A30 30 0 0 0 1.9 12a30 30 0 0 0 .5 4.8 2.9 2.9 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.9 2.9 0 0 0 2-2 30 30 0 0 0 .5-4.8 30 30 0 0 0-.5-4.8Z" /><path className="social-fill" d="m10 15.5 5-3.5-5-3.5v7Z" /></svg>;
  }

  return <svg viewBox="0 0 24 24" focusable="false"><path d="M5 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 5 3.5ZM3 9.5h4V21H3V9.5ZM9 9.5h3.8v1.6h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9V9.5Z" /></svg>;
}
