<template>
  <div>Teste</div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "LoadingScreen",
  methods: {
    async getMusics() {
      console.log("ok1");
      const selectedMusics = await axios
        .post(process.env.VUE_APP_API_BASE_URL, {
          code: this.access_token,
          songs: 5,
        })
        .then((response) => {
          console.log("ok2");
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      console.log(selectedMusics);
    },
  },
  async mounted() {
    console.log("ok0");
    await this.getMusics();
  },
  computed: mapState(["access_token"]),
};
</script>
