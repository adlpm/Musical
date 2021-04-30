<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "Callback",
  async created() {
    const code = this.$route.query.code || null;

    const params = new URLSearchParams();
    params.append("code", code);
    params.append("grant_type", "authorization_code");
    params.append("redirect_uri", process.env.VUE_APP_SPOTIFY_REDIRECT_URL);

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

      const access_token = data.access_token;
      const refresh_token = data.refresh_token;

      this.$store.commit("setAccessToken", access_token);
      this.$store.commit("setRefreshToken", refresh_token);

      this.$router.push("/");
    } catch (error) {
      console.log(error);
      this.router.push("/login");
    }
  },
};
</script>
