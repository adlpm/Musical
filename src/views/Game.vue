<template>
  <div class="game">
    <div class="score">{{ score }}</div>

    <div class="time">{{ count }}</div>

    <div class="options">
      <button
        @click="optionClicked(option, $event)"
        v-for="option in options"
        :key="option.title"
      >{{ option.title }}</button>
    </div>
  </div>
</template>

<script>
// import song from "@/assets/musics/other_californication.wav";
import { mapState } from "vuex";
//import musics from '@/assets/musics/musicas.json'

export default {
  data() {
    return {
      currentLevel: 0,
      music: null,
      isPlaying: false,
      count: 0,
      score: 20000,
      options: [],
    };
  },
  mounted() {
    this.loadCurrentLevel();
  },
  computed: mapState(["scores","selectedMusics"]),
  methods: {
    loadLevel(levelInfo) {
      this.music = new Audio(levelInfo.path);
      this.music.play();
      this.options = levelInfo.options;
      this.isPlaying = true;
      const self = this;
      setInterval(function () {
        if (self.isPlaying) {
          self.count++;
          self.score -= 1000;
        }
      }, 1000);
      setTimeout(function () {
        self.optionClicked();
      }, 20000);
    },
    loadCurrentLevel() {
      if (this.currentLevel < this.selectedMusics.length) {
        this.loadLevel(this.selectedMusics[this.currentLevel]);
        return;
      }
      this.$router.push("/score");
    },
    optionClicked(option, event) {
      console.log(event);
      if (this.isPlaying && option.rightOption != undefined) {
        this.music.pause();
        this.isPlaying = false;
        this.musicVerification(true, event);
        this.currentLevel++;
        setTimeout(() => {
          this.loadCurrentLevel();
        }, 1000); 
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
