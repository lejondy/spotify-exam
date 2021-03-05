export default {
  api: {
    authEndpoint: 'https://accounts.spotify.com/authorize',
    redirectUri: 'http://localhost:3000/',
    baseUrl: 'https://api.spotify.com/v1',
    authUrl: 'https://accounts.spotify.com/api/token',
    clientId: 'f0c8f951f8e04b0cbab44bd790953400',
    clientSecret: '',
  },
  scopes: [
    'user-top-read',
    'user-read-currently-playing',
    'user-read-playback-state',
  ],
}
