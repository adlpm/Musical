<template>
  <div class="game">
    <div class="score">
      {{ score }}
    </div>

    <div class="time">
      {{ count }}
    </div>

    <div class="options">
      <button @click="pauseSong(false, $event)">Guns N Roses</button>
      <button @click="pauseSong(true, $event)">AC/DC</button>
      <button @click="pauseSong(false, $event)">Aerosmith</button>
      <button @click="pauseSong(false, $event)">Pantera</button>
    </div>
  </div>
</template>

<script>
import song from "@/assets/musics/other_californication.wav";
import { mapState } from "vuex";

export default {
  data() {
    return {
      music: null,
      isPlaying: false,
      count: 0,
      score: 20000,
    };
  },
  mounted() {
    this.playSong();
  },
  computed: mapState(["scores"]),
  methods: {
    playSong() {
      this.music = new Audio(song);
      this.music.play();
      this.isPlaying = true;
      const self = this;
      setInterval(function () {
        if (self.isPlaying) {
          self.count++;
          self.score -= 1000;
        }
      }, 1000);
      setTimeout(function () {
        self.pauseSong();
      }, 20000);
    },
    pauseSong(bool, event) {
      console.log(event);
      if (this.isPlaying) {
        this.music.pause();
        this.isPlaying = false;
        this.musicVerification(bool, event);
      }
    },
    musicVerification(bool, event) {
      if (bool) {
        event.srcElement.style.background = "green";
        this.$store.commit("setScore", this.score);
        this.scores.push(this.score);
        this.scores.sort().reverse();
        this.$store.commit("setScores", this.scores);
      } else {
        event.srcElement.style.background = "red";
      }
      const self = this;
      setTimeout(function () {
        self.$router.push("/score");
      }, 5000);
    },
  },
};
</script>

<style lang="css" scoped>
.time,
.score {
  display: flex;
  justify-content: center;
}

.score {
  display: flex;
  justify-content: center;
  padding: 3rem;
  width: 1rem;
  margin: auto;
  background: cornflowerblue;
  color: #fff;
  border-radius: 50%;
}

.time {
  display: flex;
  justify-content: center;
  padding: 0.1rem 1rem;
  width: 0.5rem;
  margin: 1rem auto;
  border-radius: 50%;
  background: chartreuse;
}

.options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
}

.options button {
  padding: 0.8rem 5rem;
  border-radius: 0.4rem;
  border: none;
  background: #94c1ea;
  color: #ffffff;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
}
</style>
