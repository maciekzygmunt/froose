import React, { createContext, useContext, useState } from 'react';
import { PreferencesContextType } from '../types';

export const PreferencesContext = createContext<PreferencesContextType | null>(null);

export const usePreferencesContext = () => useContext(PreferencesContext);

const PreferencesContextProvider = ({ children }: any) => {
  const [preferences, setPreferences] = useState(() => {
    try {
      let timeFormat = window.localStorage.getItem('timeFormat');
      let units = window.localStorage.getItem('units');
      if (timeFormat) {
        timeFormat = JSON.parse(timeFormat);
      } else {
        window.localStorage.setItem('timeFormat', JSON.stringify(1));
        timeFormat = JSON.parse('1');
      }
      if (units) {
        units = JSON.parse(units);
      } else {
        window.localStorage.setItem('units', JSON.stringify('metric'));
        units = JSON.parse('metric');
      }
      return {
        timeFormat,
        units,
      };
    } catch (err) {
      return {
        timeFormat: 1,
        units: 'metric',
      };
    }
  });

  const toggleTimeFormat = () => {
    const newValue = preferences.timeFormat === 1 ? 0 : 1;
    setPreferences((s: any) => {
      return {
        timeFormat: newValue,
        units: s.units,
      };
    });
    window.localStorage.setItem('timeFormat', JSON.stringify(newValue));
  };

  const toggleUnits = () => {
    const newValue = preferences.units === 'metric' ? 'imperial' : 'metric';
    setPreferences((s: any) => {
      return {
        timeFormat: s.timeFormat,
        units: newValue,
      };
    });
    window.localStorage.setItem('units', JSON.stringify(newValue));
  };

  return (
    <PreferencesContext.Provider value={{ preferences, toggleTimeFormat, toggleUnits }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesContextProvider;
