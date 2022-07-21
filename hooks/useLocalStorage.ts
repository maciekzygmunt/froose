import React, { useEffect } from 'react';

const useLocalStorage = (keyName: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  useEffect(() => {
    window.addEventListener('storage', (e) => setStoredValue(e.newValue));
    return () => {
      window.removeEventListener('storage', (e) => setStoredValue(e.newValue));
    };
  }, [storedValue]);

  const setValue = (newValue: string) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    let event = new Event('storage');
    event.newValue = newValue;
    window.dispatchEvent(event);
    setStoredValue(newValue);
    // window.location.reload();
  };

  return [storedValue, setValue];
};
export default useLocalStorage;
