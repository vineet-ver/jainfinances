// Unified animation configuration library

// Stagger configurations
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.6,
    },
  },
};

// Entrance animations
export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Glitch effect keyframes (CSS-in-JS)
export const glitchKeyframes = `
  @keyframes glitchText {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      text-shadow: 
        -2px 0 #ff006e,
        2px 2px #00d4ff,
        -2px -2px #ffbe0b;
      transform: translate(0);
    }
    20%, 24%, 55% {
      text-shadow: 
        2px 2px #ff006e,
        -2px -2px #00d4ff,
        2px -2px #ffbe0b;
      transform: translate(-2px, 2px);
    }
    26%, 30% {
      text-shadow: 
        -2px -2px #ff006e,
        2px 2px #00d4ff,
        -2px 2px #ffbe0b;
      transform: translate(2px, -2px);
    }
    31%, 50% {
      text-shadow: 
        2px -2px #ff006e,
        -2px 2px #00d4ff,
        2px 2px #ffbe0b;
      transform: translate(-1px, -2px);
    }
    51%, 53% {
      text-shadow: 
        -1px -2px #ff006e,
        1px 2px #00d4ff,
        -1px -1px #ffbe0b;
      transform: translate(0);
    }
  }
`;

// Color palettes
export const colorPalettes = {
  success: {
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    border: "border-emerald-200 dark:border-emerald-800",
    text: "text-emerald-900 dark:text-emerald-100",
    icon: "text-emerald-600 dark:text-emerald-400",
  },
  error: {
    bg: "bg-red-50 dark:bg-red-950/20",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-900 dark:text-red-100",
    icon: "text-red-600 dark:text-red-400",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-950/20",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-900 dark:text-amber-100",
    icon: "text-amber-600 dark:text-amber-400",
  },
  info: {
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-900 dark:text-blue-100",
    icon: "text-blue-600 dark:text-blue-400",
  },
};

// Spring physics presets
export const springPresets = {
  gentle: { damping: 30, stiffness: 200, mass: 1 },
  tense: { damping: 20, stiffness: 300, mass: 1 },
  bouncy: { damping: 12, stiffness: 200, mass: 1 },
  smooth: { damping: 35, stiffness: 150, mass: 1 },
};

// Easing curves
export const easingCurves = {
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  sharp: "cubic-bezier(0.2, 0.7, 0.2, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  custom: "cubic-bezier(0.215, 0.61, 0.355, 1)",
};

// Transition durations (in seconds)
export const durations = {
  quick: 0.2,
  standard: 0.3,
  slow: 0.5,
  verySlow: 0.8,
};
