import type { Transition, Variants } from "framer-motion"

export const easeOut = [0.22, 1, 0.36, 1] as const

export const springSoft: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 0.8,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
}

export const revealTransition = (delay = 0): Transition => ({
  duration: 0.55,
  delay,
  ease: easeOut,
})

export const viewportOnce = {
  once: true,
  margin: "-12% 0px -8% 0px",
  amount: 0.2,
} as const
