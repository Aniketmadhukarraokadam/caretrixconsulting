import React, { useState, useEffect, useRef } from 'react';

export default function StatCounter({ target, prefix = '', suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const end = parseFloat(target);
    if (isNaN(end)) {
      setCount(target);
      return;
    }

    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={counterRef} className="stat-number">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
