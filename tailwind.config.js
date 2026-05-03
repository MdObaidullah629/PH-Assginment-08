/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // আপনার সামার থিম কালার
      },
    },
  },
  darkMode: "class",
  plugins: [], // যদি এরর দেয় তবে এখানেই রাখুন, তবে হিরো ইউআই এর জন্য প্লাগইন লাগে
};