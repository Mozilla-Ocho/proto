import { useState, useEffect } from 'react';
const mobileBreak = 580;
const tabletBreak = 768;
const desktopBreak = 1024;

/**
 * React Hook Media Queries are used when you need to track window size outside of the SCSS ecosystem.
 * Simply import hook and use its boolean response to track if a specific media query is being met. This can
 * be used to add or remove a CSS class or render or remove a component in the JSX.
 */

/**
 * Base MediaQuery Hook
 *
 * Use this hook to create custom media query hooks. Please use pre-calibrated hooks below (ie 'useMobileDown' ) unless
 * absolutely necessary to create your own hook.
 * @param query
 * @returns
 */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;

/**
 * Mobile
 */
export const useMobileDown = () => {
  return useMediaQuery(`(max-width: ${mobileBreak}px)`);
};

/**
 * Tablet
 */
export const useTabletDown = () => {
  return useMediaQuery(`(max-width: ${tabletBreak}px)`);
};

export const useTabletUp = () => {
  return useMediaQuery(`(min-width: ${tabletBreak}px)`);
};

/**
 * Desktop
 */
export const useDesktopDown = () => {
  return useMediaQuery(`(max-width: ${desktopBreak}px)`);
};

export const usDesktopUp = () => {
  return useMediaQuery(`(min-width: ${desktopBreak}px)`);
};
