module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      scale: {
        25: ".25",
        35: ".35",
        45: ".45",
        60: ".60",
      },
      animation: {
        "translate-xy-in-1": "translate-xy-in-1 1s forwards ease-in-out",
        "translate-xy-out-1": "translate-xy-out-1 1s forwards ease-in-out",
        "translate-xy-in-2": "translate-xy-in-2 1s forwards ease-in-out",
        "translate-xy-out-2": "translate-xy-out-2 1s forwards ease-in-out",
        "scale-logo-sm": "scale-logo-sm 1s forwards ease-in-out",
        "scale-logo-lg": "scale-logo-lg 1s forwards ease-in-out",
      },
      keyframes: {
        // Animation for the menu items
        "translate-xy-in-1": {
          "0%": { transform: "translateX(0px) translateY(0px) scale(0)" },
          "100%": {
            transform: "translateX(300px) translateY(-300px) scale(1)",
          },
        },
        "translate-xy-out-1": {
          "0%": {
            transform: "translateX(300px) translateY(-300px) scale(1)",
          },
          "100%": { transform: "translateX(0px) translateY(0px) scale(0)" },
        },
        "translate-xy-in-2": {
          "0%": { transform: "translateX(0px) translateY(0px) scale(0)" },
          "100%": {
            transform: "translateX(-300px) translateY(300px) scale(1)",
          },
        },
        "translate-xy-out-2": {
          "0%": {
            transform: "translateX(-300px) translateY(300px) scale(1)",
          },
          "100%": { transform: "translateX(0px) translateY(0px) scale(0)" },
        },
        // Animation for the logo
        "scale-logo-sm": {
          "0%": { transform: "scale(0.6)" },
          "100%": { transform: "scale(.45)" },
        },
        "scale-logo-lg": {
          "0%": { transform: "scale(0.45)" },
          "100%": { transform: "scale(.6)" },
        },
      },
    },
  },
  plugins: [],
};
