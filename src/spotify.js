const authUrl = `https://accounts.spotify.com/authorize`;

const redirectUri = `http://localhost:3000`;
const clientId = `cf52c00105d3495abe82bc37e3e931ea`;

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const loginUrl = `${authUrl}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}`;
