<template>
  <div id="login">
    <h1>SONGS</h1>
    <p>A trivia game that tests knowledge about songs you listen!</p>
    <p>Connect with Spotify to play</p>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import querystring from "querystring";

export default {
  name: "Login",
  methods: {
    login() {
      const url = "https://accounts.spotify.com/authorize?";
      const scope = "user-read-private user-read-email";
      const queryString = querystring.stringify({
        response_type: "code",
        client_id: process.env.VUE_APP_SPOTIFY_API_CLIENT_ID,
        scope: scope,
        redirect_uri: process.env.VUE_APP_SPOTIFY_REDIRECT_URL,
        show_dialog: true,
      });

      window.location = url + queryString;
    },
  },
};
</script>
