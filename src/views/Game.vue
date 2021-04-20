<template>
  <div class="game">
    <div class="score">{{ score }}</div>

    <div class="time">{{ count }}</div>

    <div class="options">
      <button
        @click="optionClicked(option, $event)"
        v-for="option in options"
        :key="option.title"
      >
        {{ option.title }}
      </button>
    </div>

    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import song from "@/assets/musics/other_californication.wav";
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
  computed: mapState(["scores", "selectedMusics"]),
  methods: {
    loadLevel(levelInfo) {
      this.music = new Audio(song);
      this.music.play();

      var context = new AudioContext();
      var src = context.createMediaElementSource(this.music);
      var analyser = context.createAnalyser();

      var canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext("2d");

      src.connect(analyser);
      analyser.connect(context.destination);

      analyser.fftSize = 256;

      var bufferLength = analyser.frequencyBinCount;
      console.log(bufferLength);

      var dataArray = new Uint8Array(bufferLength);

      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;

      var barWidth = (WIDTH / bufferLength) * 2.5;
      var barHeight;
      var x = 0;

      function renderFrame() {
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (var i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] * 2;

          var r = barHeight + 25 * (i / bufferLength);
          var g = 250 * (i / bufferLength);
          var b = 50;

          ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          x += barWidth + 1;
        }
      }

      this.music.play();
      renderFrame();

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

#canvas {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
