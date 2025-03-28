
import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { threshold = 0.1, root = null, rootMargin = "0px" } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold, root, rootMargin }
    );

    const elements = ref.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, root, rootMargin]);

  return ref;
};

export default useScrollReveal;
