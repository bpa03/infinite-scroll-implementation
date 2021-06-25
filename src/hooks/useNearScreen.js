import { useState, useRef, useEffect, useCallback } from "react";

const createObserver = (callback) => {
  return new IntersectionObserver(callback, {
    rootMargin: "0px",
    threshold: 1
  });
};

export const useNearScreen = () => {
  const elementRef = useRef(null);
  const [isIntercepted, setIsIntercepted] = useState(false);
  const observerRef = useRef(null);

  const observerCallback = useCallback((entries) => {
    entries.forEach((entrie) => {
      setIsIntercepted(entrie.isIntersecting);
    })
  }, []);

  useEffect(() => {
    observerRef.current = createObserver(observerCallback);
    observerRef.current.observe(elementRef.current);
  }, [observerCallback]);

  return [isIntercepted, elementRef];
};
