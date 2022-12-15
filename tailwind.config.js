/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        blue: "#4C5FD5",
        lilac: "#dadbf1",
      },
      backgroundImage: {
        branch: "url('../assets/branch.png')",
        human: "url('../assets/human.png')",
        puzzle: "url('../assets/puzzle.png')",
        dollar: "url('../assets/dollar.png')",
        key: "url('../assets/key.png')",
        message: "url('../assets/message.png')",
      },
      width: {
        "txt-box": "calc(100% - 5rem)",
      },
      maxWidth: {
        "screen-3xl": "1600px",
      },
      height:{
        '700' : '43.75rem'
      }
    },
  },
  plugins: [],
};
