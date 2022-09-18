import React, { createContext, useContext, useState } from 'react';
import { PreferencesContextType } from '../types';
import toast from 'react-hot-toast';

interface ErrorContextType {
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ErrorContext = createContext<ErrorContextType | null>(null);

export const useErrorContext = () => useContext(ErrorContext);

const ErrorContextProvider = ({ children }: any) => {
  const [error, setError] = useState<boolean>(false);

  return <ErrorContext.Provider value={{ error, setError }}>{children}</ErrorContext.Provider>;
};

export default ErrorContextProvider;
