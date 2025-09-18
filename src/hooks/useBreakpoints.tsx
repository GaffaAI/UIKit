"use client";

import { useState, useEffect } from "react";

function useMediaQuery(query: string) {
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const updateMatch = () => setIsMatching(mql.matches);

    updateMatch();
    mql.addEventListener("change", updateMatch);
    return () => mql.removeEventListener("change", updateMatch);
  }, [query]);

  return isMatching;
}

// Tailwind default breakpoints
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const useBreakpoints = () => {
  return {
    isMobile: useMediaQuery(`(max-width: ${BREAKPOINTS.sm - 1}px)`),
    isTablet: useMediaQuery(
      `(min-width: ${BREAKPOINTS.sm}px) and (max-width: ${BREAKPOINTS.md - 1}px)`,
    ),
    isLaptop: useMediaQuery(
      `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
    ),
    isDesktop: useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`),
  };
};
