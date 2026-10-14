import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations
 * using IntersectionObserver for performance.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    triggerOnce = true
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

/**
 * Generic animated section wrapper that fades & slides in on scroll.
 */
export function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, isVisible] = useScrollReveal();

  const directionStyles = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    none: ''
  };

  const initialTransform = directionStyles[direction] || directionStyles.up;

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1000ms] ease-out ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${initialTransform}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/**
 * Stagger wrapper for child animations
 */
export function StaggerChildren({ children, className = '', staggerDelay = 100, direction = 'up' }) {
  const [ref, isVisible] = useScrollReveal();

  const directionStyles = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: ''
  };

  const initialTransform = directionStyles[direction] || directionStyles.up;

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${initialTransform}`
              }`}
              style={{ transitionDelay: `${index * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
