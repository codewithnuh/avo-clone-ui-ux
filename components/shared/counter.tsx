"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  target: number; // The final number to count to
  duration?: number; // Duration for the animation (in seconds)
}

const Counter: React.FC<CounterProps> = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once when in view

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let start = 0;
      const increment = target / (duration * 120); // Calculate increment per frame (assuming 60fps)

      const animate = () => {
        start += increment;
        if (start < target) {
          setCount(Math.ceil(start)); // Update count to the nearest integer
          requestAnimationFrame(animate); // Continue animating
        } else {
          setCount(target); // Ensure it lands on the exact target
        }
      };

      animate();
    }
  }, [isInView, hasAnimated, target, duration]);

  return (
    <span ref={ref}>
      <span className="text-5xl font-bold">{count}</span>
    </span>
  );
};

export default Counter;
