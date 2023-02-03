/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        default: 0,
        lg: "135px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
