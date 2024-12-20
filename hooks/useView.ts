"use client";
import { useState, useEffect, useRef, RefObject } from "react";

/**
 * Hook to track whether an element is in view
 * @param options IntersectionObserver options
 * @returns [ref, isIntersecting]
 */
export function useInView<T extends Element>(
  options: IntersectionObserverInit = { threshold: 0.1 }
): [RefObject<T | null>, boolean] {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
}
