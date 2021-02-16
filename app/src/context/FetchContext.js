import React, { createContext } from 'react';
import axios from 'axios';

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  const authAxios = axios.create({
    baseURL: "http://localhost:340"
  });

  return (
    <Provider
      value={{
        authAxios
      }}
    >
      {children}
    </Provider>
  );
};

export { FetchContext, FetchProvider };
