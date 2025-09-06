/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tuychon: "#2233cc",
        tuychon2: {
          100: "#22ffcc",
          200: "#22ffff",
        },
      },
    },
  },
  plugins: [],
};
