import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { SpotifyLayout } from './spotifyContext';

ReactDOM.render(
  <SpotifyLayout>
    <App />
  </SpotifyLayout>,
  document.getElementById('root')
);
