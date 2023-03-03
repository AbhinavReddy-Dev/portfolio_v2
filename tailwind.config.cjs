module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
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
        19: "4.75rem",
        23: "5.75rem",
      },
      height: {
        19: "4.75rem",
        23: "5.75rem",
      },
      cursor: {
        logo: "url('/logo/logo_bg.cur'), pointer",
      },
      backgroundImage: {
        "main-bg-light": "url('/logo/PNG/logo_big.png')",
        "main-bg-dark": "url('/logo/PNG/logo_dark_big.png')",
        "nav-bg-light": "url('/logo/PNG/logo.png')",
        "nav-bg-dark": "url('/logo/PNG/logo_black_border.png')",
      },
      animation: {
        "translate-xy-in-1": "translate-xy-in-1 1s forwards ease-in-out",
        "translate-xy-out-1": "translate-xy-out-1 1s forwards ease-in-out",
        "translate-xy-in-2": "translate-xy-in-2 1s forwards ease-in-out",
        "translate-xy-out-2": "translate-xy-out-2 1s forwards ease-in-out",
        "translate-xy-in-3": "translate-xy-in-3 1s forwards ease-in-out",
        "translate-xy-out-3": "translate-xy-out-3 1s forwards ease-in-out",
        "translate-xy-in-4": "translate-xy-in-4 1s forwards ease-in-out",
        "translate-xy-out-4": "translate-xy-out-4 1s forwards ease-in-out",
        "menu-bg-motion": "menu-bg-motion 3s ease-in-out infinite",
        "menu-bg-motion-2": "menu-bg-motion-2 3s ease-in-out infinite",
        "menu-bg-motion-3": "menu-bg-motion-3 3s ease-in-out infinite",
        "menu-bg-motion-4": "menu-bg-motion-4 3s ease-in-out infinite",
        "scale-logo-sm": "scale-logo-sm 1s forwards ease-in-out",
        "scale-logo-lg": "scale-logo-lg 1s forwards ease-in-out",
        "text-appear": "text-appear 1s forwards ease-in-out",
        "text-disappear": "text-disappear 1s forwards ease-in-out",
      },
      keyframes: {
        // Animation for the logo
        "scale-logo-sm": {
          "0%": { transform: "scale(0.6)" },
          "100%": { transform: "scale(.35)" },
        },
        "scale-logo-lg": {
          "0%": { transform: "scale(0.35)" },
          "100%": { transform: "scale(.6)" },
        },
        // Animation for the index page text
        "text-appear": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        "text-disappear": { "0%": { opacity: 1 }, "100%": { opacity: 0 } },
        // Animation for the menu background
        "menu-bg-motion": {
          "0%": { transform: "translateX(0px) translateY(0px)" },
          "25%": { transform: "translateX(2px) translateY(2px)" },
          "50%": { transform: "translateX(-4px) translateY(-4px)" },
          "75%": { transform: "translateX(-6px) translateY(2px)" },
          "100%": { transform: "translateX(0px) translateY(0px)" },
        },
        "menu-bg-motion-2": {
          "0%": { transform: "translateX(0px) translateY(0px)" },
          "25%": { transform: "translateX(-3px) translateY(2px)" },
          "50%": { transform: "translateX(4px) translateY(-5px)" },
          "75%": { transform: "translateX(4px) translateY(2px)" },
          "100%": { transform: "translateX(0px) translateY(0px)" },
        },
        "menu-bg-motion-3": {
          "0%": { transform: "translateX(0px) translateY(0px)" },
          "25%": { transform: "translateX(2px) translateY(-5px)" },
          "50%": { transform: "translateX(-1px) translateY(4px)" },
          "75%": { transform: "translateX(5px) translateY(-2px)" },
          "100%": { transform: "translateX(0px) translateY(0px)" },
        },
        "menu-bg-motion-4": {
          "0%": { transform: "translateX(0px) translateY(0px)" },
          "25%": { transform: "translateX(-2px) translateY(-3px)" },
          "50%": { transform: "translateX(2px) translateY(4px)" },
          "75%": { transform: "translateX(-7px) translateY(1px)" },
          "100%": { transform: "translateX(0px) translateY(0px)" },
        },
        // Animation for the menu items
        "translate-xy-in-1": {
          "0%": {
            transform:
              "translateX(0px) translateY(0px) scale(0) rotate(-38deg)",
          },
          "100%": {
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
        "translate-xy-in-3": {
          "0%": {
            transform:
              "translateX(0px) translateY(0px) scale(0)  rotate(-38deg)",
          },
          "100%": {
            transform:
              "translateX(300px) translateY(300px) scale(1)  rotate(38deg)",
          },
        },
        "translate-xy-out-3": {
          "0%": {
            transform:
              "translateX(300px) translateY(300px) scale(1)  rotate(38deg)",
          },
          "100%": {
            transform:
              "translateX(0px) translateY(0px) scale(0)  rotate(-38deg)",
          },
        },
        "translate-xy-in-4": {
          "0%": {
            transform:
              "translateX(0px) translateY(0px) scale(0)  rotate(-38deg)",
          },
          "100%": {
            transform:
              "translateX(-300px) translateY(-300px) scale(1)  rotate(38deg)",
          },
        },
        "translate-xy-out-4": {
          "0%": {
            transform:
              "translateX(-300px) translateY(-300px) scale(1)  rotate(38deg)",
          },
          "100%": {
            transform:
              "translateX(0px) translateY(0px) scale(0)  rotate(-38deg)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
};
