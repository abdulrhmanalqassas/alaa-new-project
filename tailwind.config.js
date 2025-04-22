/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Make sure to scan your HTML files
    "./src/**/*.{js,ts,jsx,tsx}", // Add your React files
  ],
  base: "/alaa-new-project/", // Specify the base path for all your URLs
  theme: {
    extend: {},
  },
  plugins: [],
};
