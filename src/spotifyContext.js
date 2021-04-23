import React, { createContext, useContext, useReducer } from 'react';

import reducer, { initialState } from './spotifyReducer';
export const SpotifyContext = createContext();

export const SpotifyLayout = ({ children }) => (
  <SpotifyContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </SpotifyContext.Provider>
);
