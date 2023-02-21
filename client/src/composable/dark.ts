import { useDark } from "@vueuse/core";

export const isDark = useDark({
  storageKey: "browser-dark-mode",
});
