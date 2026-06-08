import type { Config } from "tailwindcss";

// Flowboard tokens (extracted verbatim from the product app). Colors are RGB
// channel triplets in CSS vars so Tailwind can inject alpha; wrapping in
// rgb(var(--x) / <alpha-value>) keeps opacity modifiers + theme-awareness.
const v = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: v("--bg"),
        surface: { DEFAULT: v("--surface"), soft: v("--surface-soft") },
        sidebar: v("--sidebar"),
        ink: v("--ink"),
        muted: v("--muted"),
        faint: v("--faint"),
        line: { DEFAULT: v("--line"), subtle: v("--line-subtle") },
        accent: {
          DEFAULT: v("--accent"),
          hover: v("--accent-hover"),
          soft: v("--accent-soft"),
          ring: v("--accent-ring"),
          on: v("--on-accent"),
        },
        success: { DEFAULT: v("--success"), soft: v("--success-soft") },
        warning: { DEFAULT: v("--warning"), soft: v("--warning-soft") },
        danger: { DEFAULT: v("--danger"), soft: v("--danger-soft") },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "10px",
        md: "12px",
        lg: "14px",
        xl: "18px",
        "2xl": "26px",
      },
      maxWidth: { content: "1120px" },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(26px, -20px) scale(1.06)" },
          "66%": { transform: "translate(-18px, 14px) scale(0.97)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 14s ease infinite",
        float: "float 6s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite",
        "drift-slow": "drift 32s ease-in-out infinite",
        "glow-pulse": "glow-pulse 8s ease-in-out infinite",
        "spin-slow": "spin 40s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
