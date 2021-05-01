<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  created() {
    this.validateToken();
  },
  methods: {
    async validateToken() {
      const info = localStorage.getItem("songs");

      if (!info) {
        this.$router.push("/login");
        return;
      }

      const refresh_token = JSON.parse(info).refresh_token;

      if (!refresh_token) {
        this.$router.push("/login");
        return;
      }

      this.$store.commit("setRefreshToken", refresh_token);

      const params = new URLSearchParams();
      params.append("refresh_token", refresh_token);
      params.append("grant_type", "refresh_token");

      try {
        const { data } = await axios({
          method: "post",
          url: "https://accounts.spotify.com/api/token",
          data: params,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              new Buffer(
                process.env.VUE_APP_SPOTIFY_API_CLIENT_ID +
                  ":" +
                  process.env.VUE_APP_SPOTIFY_API_CLIENT_SECRET
              ).toString("base64"),
          },
          json: true,
        });

        this.$router.push("/main");

        const access_token = data.access_token;
        this.$store.commit("setAccessToken", access_token);

        try {
          await axios.post(
            process.env.VUE_APP_API_BASE_URL,
            {
              code: access_token,
            },
            {
              "Content-Type": "application/json",
            }
          );
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
