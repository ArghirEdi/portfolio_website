/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fd9924",
        secondary: "#fb923c",
        // "bg-nav-1": "rgba(51, 49, 47, 1)",
        // "bg-nav-2": "rgba(58, 49, 39, 1)",
        // "bg-nav-3": "rgba(61, 42, 20, 1)",
        "bg-nav-1": "rgba(165, 165, 165, 1)",
        "bg-nav-2": "rgba(137, 137, 137, 1)",
        "bg-nav-3": "rgba(109, 109, 109, 1)",
        // ff8901
      },
      container: {
        center: true,
        padding: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
