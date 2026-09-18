import { type RefObject, useLayoutEffect, useState } from 'react';

export type ElementSize = {
  width: number;
  height: number;
};

export const useResizeObserver = (elementRef: RefObject<HTMLElement | null>): ElementSize => {
  const [size, setSize] = useState<ElementSize>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const element: HTMLElement | null = elementRef.current;
    if (!element) return;

    setSize({ width: element.offsetWidth, height: element.offsetHeight });

    const observer: ResizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (entries[0]) {
        setSize({
          width: entries[0].contentRect.width,
          height: entries[0].contentRect.height,
        });
      }
    });
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return size;
};
