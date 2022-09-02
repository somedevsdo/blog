import { writable } from "svelte/store";

type Theme = "light" | "dark";

const createThemeStore = () => {
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  darkModeQuery.addEventListener("change", (event) => {
    if (event.matches) {
      update(() => "dark");
    } else {
      update(() => "light");
    }
  });

  const defaultTheme = darkModeQuery.matches ? "dark" : "light";
  const local = window.localStorage.getItem("theme") as Theme;
  const theme: Theme = local !== null ? local : defaultTheme;
  const { subscribe, set, update } = writable<Theme>(theme);

  subscribe((value) => {
    window.localStorage.setItem("theme", value);
    document.documentElement.setAttribute("data-theme", value);
    document.documentElement.style.setProperty("color-scheme", value);
  });

  return {
    set: (t: Theme) => set(t),
    subscribe,
    toggle: () => update((t) => (t === "light" ? "dark" : "light")),
    reset: () => set("light"),
  };
};

export const theme = createThemeStore();
