/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blurple": {
          100: "#5865f2",
          200: "#414def",
          400: "#1f26ba",
        }
      }
    }
  },
  plugins: [],
  mode: "jit"
};

