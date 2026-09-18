import { useSyncExternalStore } from 'react';

export const useIsMobile = (breakpoint: number): boolean => {
  const query = `(max-width: ${breakpoint - 1}px)`;

  const subscribe = (callback: () => void) => {
    if (typeof window === 'undefined') return () => {};

    const mediaQueryList = window.matchMedia(query);
    mediaQueryList.addEventListener('change', callback);

    return () => mediaQueryList.removeEventListener('change', callback);
  };
  const getSnapshot = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  };
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
