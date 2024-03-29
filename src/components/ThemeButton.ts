// Theme button logic

const light_theme = document.querySelectorAll<HTMLSpanElement>("#light_theme");
const dark_theme = document.querySelectorAll<HTMLSpanElement>("#dark_theme");
const theme = (() => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
})();

const set_dark_theme = () => {
  light_theme?.forEach((e) => {
    e.classList.remove("bg-violet-400");
  });
  dark_theme?.forEach((e) => {
    e.classList.add("bg-blue-300");
  });
  document.documentElement.classList.add("dark");
  window.localStorage.setItem("theme", "dark");
};

const set_light_theme = () => {
  light_theme?.forEach((e) => {
    e.classList.add("bg-violet-300");
  });
  dark_theme?.forEach((e) => {
    e.classList.remove("bg-blue-300");
  });

  window.localStorage.setItem("theme", "light");
  document.documentElement.classList.remove("dark");
};

light_theme?.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
    set_light_theme();
  });
});
dark_theme?.forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log("dt click");
    e.preventDefault();
    set_dark_theme();
  });
});

if (theme === "light") {
  set_light_theme();
} else {
  set_dark_theme();
}

export {};
