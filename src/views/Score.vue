<template>
  <div class="score">
    <h1>{{ score }}</h1>
    <p v-for="score in scores" :key="score">
      {{ score }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  // data() {
  //   return {
  //     score: 0,
  //     scores: [],
  //   }
  // },
  computed: mapState(["score", "scores"]),
};
</script>
