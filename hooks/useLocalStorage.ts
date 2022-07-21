import React, { useEffect } from 'react';

const useLocalStorage = (keyName: string, defaultValue: any) => {
  //TODO: fix local storage listener
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

  const setValue = (newValue: string) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
    window.location.reload();
  };

  return [storedValue, setValue];
};
export default useLocalStorage;
