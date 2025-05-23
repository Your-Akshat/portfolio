// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./public/index.html",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  safelist: [
    "card", "card-body", "btn", "btn-primary", "bg-base-100", "shadow-xl",
    "text-center", "text-red-950", "hover:-translate-y-4", "hover:shadow-2xl",
    "hover:bg-[#f5ca3c]", "hover:shadow-[rgba(245,202,60,0.6)]"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
