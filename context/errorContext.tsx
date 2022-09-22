import React, { createContext, useContext, useState } from 'react';

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
