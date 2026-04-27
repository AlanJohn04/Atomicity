// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
//   theme: {
//     extend: {
//       colors: {
//         bg: "var(--bg)",
//         panel: "var(--panel)",
//         accent: "var(--accent)",
//         success: "var(--success)",
//       },
//       borderRadius: {
//         card: "var(--radius-card)",
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/container-queries")],
// };
// export default config;



import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        accent: "var(--accent)",
        success: "var(--success)",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;