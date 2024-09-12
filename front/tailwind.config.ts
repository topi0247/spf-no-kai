import icons from "rocketicons/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hiraginoKakuGothic: [
          "ヒラギノ角ゴ ProN W3",
          "Hiragino Kaku Gothic ProN",
        ],
      },
      fontWeight: {
        600: "600",
      },
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
  plugins: [icons],
};
export default config;
