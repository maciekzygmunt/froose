import React, { createContext, useContext, useState } from 'react';
import { TimeFormatContextType } from '../types';

export const TimeFormatContext = createContext<TimeFormatContextType | null>(null);

export const useTimeFormatContext = () => useContext(TimeFormatContext);

const TimeFormatProvider = ({ children }: any) => {
  const [timeFormat, setTimeFormat] = useState(() => {
    try {
      const value = window.localStorage.getItem('timeFormat');

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem('timeFormat', JSON.stringify(1));
        return 1;
      }
    } catch (err) {
      return 1;
    }
  });

  const toggleTimeFormat = () => {
    const newValue = timeFormat === 1 ? 0 : 1;
    setTimeFormat(newValue);
    window.localStorage.setItem('timeFormat', JSON.stringify(newValue));
  };

  return (
    <TimeFormatContext.Provider value={{ timeFormat, toggleTimeFormat }}>
      {children}
    </TimeFormatContext.Provider>
  );
};

export default TimeFormatProvider;
