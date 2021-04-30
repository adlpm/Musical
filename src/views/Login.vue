<template>
  <div id="login">
    <h1>SONGS</h1>
    <p>
      Um Jogo de trivia que testa se você realmente conhece as músicas que ouve!
    </p>
    <p>Conecte-se com o spotify para jogar</p>
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
