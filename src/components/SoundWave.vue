<template>
  <div class="sound-wave">
    <div id="bars">
      <div class="bar" v-for="i in 80" :key="i"></div>
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
  background: rgb(144, 0, 211);
  bottom: 1px;
  height: 50px;
  position: absolute;
  width: 1rem;
  animation: sound 0ms -800ms linear infinite alternate;
}

@keyframes sound {
  0% {
    opacity: 0.35;
    height: 14rem;
  }
  100% {
    opacity: 1;
    height: 6rem;
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
.bar:nth-child(21) {
  left: calc((17px * 20) + 1px);
  animation-duration: 474ms;
}
.bar:nth-child(22) {
  left: calc((17px * 21) + 1px);
  animation-duration: 433ms;
}
.bar:nth-child(23) {
  left: calc((17px * 22) + 1px);
  animation-duration: 407ms;
}
.bar:nth-child(24) {
  left: calc((17px * 23) + 1px);
  animation-duration: 458ms;
}
.bar:nth-child(25) {
  left: calc((17px * 24) + 1px);
  animation-duration: 400ms;
}
.bar:nth-child(26) {
  left: calc((17px * 25) + 1px);
  animation-duration: 427ms;
}
.bar:nth-child(27) {
  left: calc((17px * 26) + 1px);
  animation-duration: 441ms;
}
.bar:nth-child(28) {
  left: calc((17px * 27) + 1px);
  animation-duration: 419ms;
}
.bar:nth-child(29) {
  left: calc((17px * 28) + 1px);
  animation-duration: 487ms;
}
.bar:nth-child(30) {
  left: calc((17px * 29) + 1px);
  animation-duration: 442ms;
}
.bar:nth-child(31) {
  left: calc((17px * 30) + 1px);
  animation-duration: 474ms;
}
.bar:nth-child(32) {
  left: calc((17px * 31) + 1px);
  animation-duration: 433ms;
}
.bar:nth-child(33) {
  left: calc((17px * 32) + 1px);
  animation-duration: 407ms;
}
.bar:nth-child(34) {
  left: calc((17px * 33) + 1px);
  animation-duration: 458ms;
}
.bar:nth-child(35) {
  left: calc((17px * 34) + 1px);
  animation-duration: 400ms;
}
.bar:nth-child(36) {
  left: calc((17px * 35) + 1px);
  animation-duration: 427ms;
}
.bar:nth-child(37) {
  left: calc((17px * 36) + 1px);
  animation-duration: 441ms;
}
.bar:nth-child(38) {
  left: calc((17px * 37) + 1px);
  animation-duration: 419ms;
}
.bar:nth-child(39) {
  left: calc((17px * 38) + 1px);
  animation-duration: 487ms;
}
.bar:nth-child(40) {
  left: calc((17px * 39) + 1px);
  animation-duration: 442ms;
}
.bar:nth-child(41) {
  left: calc((17px * 40) + 1px);
  animation-duration: 474ms;
}
.bar:nth-child(42) {
  left: calc((17px * 41) + 1px);
  animation-duration: 433ms;
}
.bar:nth-child(43) {
  left: calc((17px * 42) + 1px);
  animation-duration: 407ms;
}
.bar:nth-child(44) {
  left: calc((17px * 43) + 1px);
  animation-duration: 458ms;
}
.bar:nth-child(45) {
  left: calc((17px * 44) + 1px);
  animation-duration: 400ms;
}
.bar:nth-child(46) {
  left: calc((17px * 45) + 1px);
  animation-duration: 427ms;
}
.bar:nth-child(47) {
  left: calc((17px * 46) + 1px);
  animation-duration: 441ms;
}
.bar:nth-child(48) {
  left: calc((17px * 47) + 1px);
  animation-duration: 419ms;
}
.bar:nth-child(49) {
  left: calc((17px * 48) + 1px);
  animation-duration: 487ms;
}
.bar:nth-child(50) {
  left: calc((17px * 49) + 1px);
  animation-duration: 442ms;
}
.bar:nth-child(51) {
  left: calc((17px * 50) + 1px);
  animation-duration: 442ms;
}
.bar:nth-child(52) {
  left: calc((17px * 51) + 1px);
  animation-duration: 433ms;
}
.bar:nth-child(53) {
  left: calc((17px * 52) + 1px);
  animation-duration: 407ms;
}
.bar:nth-child(54) {
  left: calc((17px * 53) + 1px);
  animation-duration: 458ms;
}
.bar:nth-child(55) {
  left: calc((17px * 54) + 1px);
  animation-duration: 400ms;
}
.bar:nth-child(56) {
  left: calc((17px * 55) + 1px);
  animation-duration: 427ms;
}
.bar:nth-child(57) {
  left: calc((17px * 56) + 1px);
  animation-duration: 441ms;
}
.bar:nth-child(58) {
  left: calc((17px * 57) + 1px);
  animation-duration: 419ms;
}
.bar:nth-child(59) {
  left: calc((17px * 58) + 1px);
  animation-duration: 487ms;
}
.bar:nth-child(60) {
  left: calc((17px * 59) + 1px);
  animation-duration: 442ms;
}
.bar:nth-child(61) {
  left: calc((17px * 60) + 1px);
  animation-duration: 474ms;
}
.bar:nth-child(62) {
  left: calc((17px * 61) + 1px);
  animation-duration: 433ms;
}
.bar:nth-child(63) {
  left: calc((17px * 62) + 1px);
  animation-duration: 407ms;
}
.bar:nth-child(64) {
  left: calc((17px * 63) + 1px);
  animation-duration: 458ms;
}
.bar:nth-child(65) {
  left: calc((17px * 64) + 1px);
  animation-duration: 400ms;
}
.bar:nth-child(66) {
  left: calc((17px * 65) + 1px);
  animation-duration: 427ms;
}
.bar:nth-child(67) {
  left: calc((17px * 66) + 1px);
  animation-duration: 441ms;
}
.bar:nth-child(68) {
  left: calc((17px * 67) + 1px);
  animation-duration: 419ms;
}
.bar:nth-child(69) {
  left: calc((17px * 68) + 1px);
  animation-duration: 487ms;
}
.bar:nth-child(70) {
  left: calc((17px * 69) + 1px);
  animation-duration: 442ms;
}
.bar:nth-child(71) {
  left: calc((17px * 70) + 1px);
  animation-duration: 474ms;
}
.bar:nth-child(72) {
  left: calc((17px * 71) + 1px);
  animation-duration: 433ms;
}
.bar:nth-child(73) {
  left: calc((17px * 72) + 1px);
  animation-duration: 407ms;
}
.bar:nth-child(74) {
  left: calc((17px * 73) + 1px);
  animation-duration: 458ms;
}
.bar:nth-child(75) {
  left: calc((17px * 74) + 1px);
  animation-duration: 400ms;
}
.bar:nth-child(76) {
  left: calc((17px * 75) + 1px);
  animation-duration: 427ms;
}
.bar:nth-child(77) {
  left: calc((17px * 76) + 1px);
  animation-duration: 441ms;
}
.bar:nth-child(78) {
  left: calc((17px * 77) + 1px);
  animation-duration: 419ms;
}
.bar:nth-child(79) {
  left: calc((17px * 78) + 1px);
  animation-duration: 487ms;
}
.bar:nth-child(80) {
  left: calc((17px * 79) + 1px);
  animation-duration: 442ms;
}
.bar:nth-child(81) {
  left: calc((17px * 80) + 1px);
  animation-duration: 442ms;
}
</style>
