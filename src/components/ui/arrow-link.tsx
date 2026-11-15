import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ArrowLinkProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

/** Reusable animated link treatment for secondary actions. */
export function ArrowLink({ children, href = "#contact", className = "text-link" }: ArrowLinkProps) {
  return (
    <motion.a className={className} href={href} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
      {children} <ArrowRight size={15} />
    </motion.a>
  );
}
