import type { Config } from "tailwindcss";

// Theme colours point at the CSS variables in globals.css (so light/dark switch automatically);
// color-mix keeps opacity modifiers such as bg-lamp/20 working.
const c = (v: string) => `color-mix(in srgb, var(${v}) calc(<alpha-value> * 100%), transparent)`;

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: c("--bg"),
        bg2: c("--bg-2"),
        fg: c("--fg"),
        muted: c("--muted"),
        card: c("--card"),
        solid: c("--card-solid"),
        line: c("--line"),
        lamp: c("--lamp"),
        lamp2: c("--lamp-2"),
        vihara: c("--vihara"),
        gen: c("--gen"),
      },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
    },
  },
  plugins: [],
};

export default config;
