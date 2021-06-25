import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      return;
    };

    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(prevData => [...new Set([...prevData, ...data])]);
      setLoading(false);
    };

    setLoading(true);

    fetchData();
  }, [url]);

  return [data, loading];
};