import type { MotionProps } from "framer-motion";

/** Shared motion for primary conversion controls. */
export const buttonMotion: Pick<MotionProps, "whileHover" | "whileTap" | "transition"> = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.18 },
};

/** Shared motion for image and content cards. */
export const cardMotion: Pick<MotionProps, "whileHover" | "whileTap" | "transition"> = {
  whileHover: { y: -8, scale: 1.015 },
  whileTap: { scale: 0.985 },
  transition: { type: "spring", stiffness: 300, damping: 22 },
};

/** Safe attributes for links that intentionally open a new tab. */
export const externalLinkProps = {
  target: "_blank" as const,
  rel: "noreferrer",
};
