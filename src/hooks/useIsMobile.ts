import { useSyncExternalStore } from "react";

export const useIsMobile = (breakpoint = 767) => {
  const query = `(max-width: ${breakpoint}px)`;

  return useSyncExternalStore(
    (callback) => {
      const mediaQuery = window.matchMedia(query);
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", callback);
        return () => mediaQuery.removeEventListener("change", callback);
      } else {
        mediaQuery.addListener(callback);
        return () => mediaQuery.removeListener(callback);
      }
    },
    () => window.matchMedia(query).matches,
    () => false
  );
};
