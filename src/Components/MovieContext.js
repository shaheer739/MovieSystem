// MovieContext.js
import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [imdbID, setimdbID] = useState('');

  return (
    <MovieContext.Provider value={{ imdbID, setimdbID }}>
      {children}
    </MovieContext.Provider>
  );
};

