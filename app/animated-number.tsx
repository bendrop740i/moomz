"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({
  value,
  duration = 500,
}: {
  value: number;
  duration?: number;
}) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    const start = prevRef.current;
    const delta = value - start;
    if (delta === 0) return;
    let raf = 0;
    const startTime =
      typeof performance !== "undefined" ? performance.now() : Date.now();
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(start + delta * eased));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        prevRef.current = value;
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return <>{display}</>;
}
