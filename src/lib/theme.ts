import { writable } from "svelte/store";

const createThemeStore = () => {
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  darkModeQuery.addEventListener("change", (event) => {
    if (event.matches) {
      update(() => "dark");
    } else {
      update(() => "light");
    }
  });

  const local = window.localStorage.getItem("theme");
  const { subscribe, set, update } = writable<"light" | "dark">(
    local === "dark" ? "dark" : "light"
  );

  subscribe((value) => {
    window.localStorage.setItem("theme", value);
    document.documentElement.setAttribute("data-theme", value);
  });

  return {
    set: (t: "light" | "dark") => set(t),
    subscribe,
    toggle: () => update((t) => (t === "light" ? "dark" : "light")),
    reset: () => set("light"),
  };
};

export const theme = createThemeStore();
