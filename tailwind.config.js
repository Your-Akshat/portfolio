// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./public/index.html",
//   ],
//   safelist: [
//     "card",
//     "card-body",
//     "hover:-translate-y-4",
//     "hover:shadow-2xl",
//     "hover:bg-[#f5ca3c]",
//     "hover:shadow-[rgba(245,202,60,0.6)]",
//     "bg-amber-300",
//     "text-red-950",
//     "text-center",
//     "text-blue-800",
//     "text-sm",
//     "underline",
//     "list-disc",
//     "list-inside",
//     "font-semibold",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };


module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    // './safelist.txt', // Include the safelist file
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
