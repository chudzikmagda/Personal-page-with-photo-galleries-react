import { useState, useLayoutEffect, RefObject } from 'react';

export const useResizeObserver = (elementRef: RefObject<HTMLElement | null>): number => {
	const [width, setWidth] = useState<number>(0);

	useLayoutEffect(() => {
		const element: HTMLElement | null = elementRef.current;
		if (!element) return;

		setWidth(element.offsetWidth);

		const observer: ResizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
			if (entries[0]) {
				setWidth(entries[0].contentRect.width);
			}
		});
		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, [elementRef]);

	return width;
};
