import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "runteq-primary": "#FC7400",
        "runteq-secondary": "#3434D3",
        "runteq-background": "#F4F9FA",
      },
      colors: {
        "runteq-primary": "#FC7400",
        "runteq-secondary": "#3434D3",
      },
    },
  },
  plugins: [],
};
export default config;
