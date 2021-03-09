export default {
  api: {
    authEndpoint: "https://accounts.spotify.com/authorize",
    redirectUri: "http://localhost:3000/",
    baseUrl: "https://api.spotify.com/v1",
    authUrl: "https://accounts.spotify.com/api/token",
    clientId: "c4258ea38c164462ad18097a0ecf88f5",
    clientSecret: "",
  },
  scopes: [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
  ],
};
