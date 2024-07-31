import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const eventHandler = (event: MediaQueryListEvent) => {
    setDarkMode(event.matches);
  };

  useEffect(() => {
    const darkmodeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(darkmodeQuery.matches);
    darkmodeQuery.addEventListener('change', eventHandler);

    return () => {
      darkmodeQuery.removeEventListener('change', eventHandler);
    };
  }, []);

  return darkMode;
};

export default useDarkMode;
