/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        inba: {
          primary: "#DAA520",
          "primary-content": "#000",
          secondary: "#111111",
          accent: "#f97316",
          neutral: "#2a323c",
          "base-100": "#000000",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      "night",
      "cupcake",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
