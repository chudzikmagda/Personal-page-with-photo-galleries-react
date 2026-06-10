import { useMemo, useSyncExternalStore } from 'react';

export const useIsMobile = (breakpoint: number): boolean => {
	const query = `(max-width: ${breakpoint - 1}px)`;

	const store = useMemo(() => {
		return {
			subscribe: (callback: () => void) => {
				if (typeof window === 'undefined') return () => {};

				const mediaQueryList = window.matchMedia(query);
				mediaQueryList.addEventListener('change', callback);

				return () => mediaQueryList.removeEventListener('change', callback);
			},
			getSnapshot: () => {
				if (typeof window === 'undefined') return false;
				return window.matchMedia(query).matches;
			},
			getServerSnapshot: () => false
		};
	}, [query]);

	return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
};
