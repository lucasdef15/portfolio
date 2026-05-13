import { useEffect, useRef, type RefObject } from 'react';

export function useDimensions(ref: RefObject<HTMLElement | null>) {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, [ref]);

  return dimensions.current;
}
