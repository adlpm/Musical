<template>
  <div class="sound-wave">
    <div id="bars">
      <div class="bar" v-for="i in 20" :key="i"></div>
      <!-- <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SoundWave",
};
</script>

<style scoped>
#bars {
  height: 100%;
  width: 100%;
}

.bar {
  background: #e20074;
  bottom: 1px;
  height: 50px;
  position: absolute;
  width: 1rem;
  animation: sound 0ms -800ms linear infinite alternate;
}

@keyframes sound {
  0% {
    opacity: 0.35;
    height: 16rem;
  }
  100% {
    opacity: 1;
    height: 8rem;
  }
}

.bar:nth-child(1) {
  left: 1px;
  animation-duration: 474ms;
}
.bar:nth-child(2) {
  left: 18px;
  animation-duration: 433ms;
}
.bar:nth-child(3) {
  left: 35px;
  animation-duration: 407ms;
}
.bar:nth-child(4) {
  left: 52px;
  animation-duration: 458ms;
}
.bar:nth-child(5) {
  left: 69px;
  animation-duration: 400ms;
}
.bar:nth-child(6) {
  left: 86px;
  animation-duration: 427ms;
}
.bar:nth-child(7) {
  left: 103px;
  animation-duration: 441ms;
}
.bar:nth-child(8) {
  left: 120px;
  animation-duration: 419ms;
}
.bar:nth-child(9) {
  left: 137px;
  animation-duration: 487ms;
}
.bar:nth-child(10) {
  left: 154px;
  animation-duration: 442ms;
}
.bar:nth-child(11) {
  left: calc((17px * 10) + 1px);
  animation-duration: 474ms;
}
.bar:nth-child(12) {
  left: calc((17px * 11) + 1px);
  animation-duration: 433ms;
}
.bar:nth-child(13) {
  left: calc((17px * 12) + 1px);
  animation-duration: 407ms;
}
.bar:nth-child(14) {
  left: calc((17px * 13) + 1px);
  animation-duration: 458ms;
}
.bar:nth-child(15) {
  left: calc((17px * 14) + 1px);
  animation-duration: 400ms;
}
.bar:nth-child(16) {
  left: calc((17px * 15) + 1px);
  animation-duration: 427ms;
}
.bar:nth-child(17) {
  left: calc((17px * 16) + 1px);
  animation-duration: 441ms;
}
.bar:nth-child(18) {
  left: calc((17px * 17) + 1px);
  animation-duration: 419ms;
}
.bar:nth-child(19) {
  left: calc((17px * 18) + 1px);
  animation-duration: 487ms;
}
.bar:nth-child(20) {
  left: calc((17px * 19) + 1px);
  animation-duration: 442ms;
}
</style>
