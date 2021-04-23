import React, { useEffect, useState, useContext } from 'react';
import queryString from 'query-string';
import { loginUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyContext } from './spotifyContext';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [spotifyState, dispatch] = useContext(SpotifyContext);
  console.log(spotifyState);
  useEffect(() => {
    const _hash = window.location.hash;
    window.location.hash = '';
    const _query = queryString.parse(_hash);
    if (_query.access_token) {
      setToken(_query.access_token);
      spotify.setAccessToken(_query.access_token);
      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: 'USER_LOGIN',
          payload: user,
        });
      });
    }
    console.log(_query.access_token);
    console.log(token);
  }, []);

  return (
    <div>
      <h1>Hello Spotify</h1>
      {spotifyState.user ? (
        <h1>Hello {spotifyState.user.display_name} </h1>
      ) : (
        <a href={loginUrl}>login</a>
      )}
    </div>
  );
}

export default App;
