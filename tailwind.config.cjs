module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        devil: ["Devil Breeze", "cursive"],
      },
      scale: {
        25: ".25",
        35: ".35",
        45: ".45",
        60: ".60",
      },
      rotate: {
        "-38": "-38deg",
      },
      text: {
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      width: {
        23: "5.75rem",
      },
      height: {
        23: "5.75rem",
      },
      animation: {
        "translate-xy-in-1": "translate-xy-in-1 1s forwards ease-in-out",
        "translate-xy-out-1": "translate-xy-out-1 1s forwards ease-in-out",
        "translate-xy-in-2": "translate-xy-in-2 1s forwards ease-in-out",
        "translate-xy-out-2": "translate-xy-out-2 1s forwards ease-in-out",
        "scale-logo-sm": "scale-logo-sm 1s forwards ease-in-out",
        "scale-logo-lg": "scale-logo-lg 1s forwards ease-in-out",
        "text-appear": "text-appear 1s forwards ease-in-out",
        "text-disappear": "text-disappear 1s forwards ease-in-out",
      },
      keyframes: {
        // Animation for the menu items
        "text-appear": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        "text-disappear": { "0%": { opacity: 1 }, "100%": { opacity: 0 } },
        "translate-xy-in-1": {
          "0%": {
            transform:
              "translateX(0px) translateY(0px) scale(0) rotate(-38deg)",
          },
          "100%": {
            width: "6rem",
            height: "6rem",
            transform:
              "translateX(300px) translateY(-300px) scale(1) rotate(38deg)",
          },
        },
        "translate-xy-out-1": {
          "0%": {
            transform:
              "translateX(300px) translateY(-300px) scale(1) rotate(38deg)",
          },
          "100%": {
            transform:
              "translateX(0px) translateY(0px) scale(0) rotate(-38deg)",
          },
        },
        "translate-xy-in-2": {
          "0%": {
            transform:
              "translateX(0px) translateY(0px) scale(0)  rotate(-38deg)",
          },
          "100%": {
            transform:
              "translateX(-300px) translateY(300px) scale(1)  rotate(38deg)",
          },
        },
        "translate-xy-out-2": {
          "0%": {
            transform:
              "translateX(-300px) translateY(300px) scale(1)  rotate(38deg)",
          },
          "100%": {
            transform:
              "translateX(0px) translateY(0px) scale(0)  rotate(-38deg)",
          },
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
