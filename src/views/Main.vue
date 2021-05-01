<template>
  <div class="main">
    <div
      class="background-80s animated-clouds stars"
      style="--background-height: 100vh"
    >
      <div class="sun"></div>
      <div
        class="grid"
        style="
          --grid-color: rgba(115, 59, 139, 0.7);
          --grid-size: 30px;
          --grid-blur: 1px;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 10vw;
          --mountain-height: 5vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #b533b3;
          --mountain-offset: 10vw;
          --mountain-tilt: -20deg;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 10vw;
          --mountain-height: 5vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-tilt: 59deg;
          --mountain-offset: 20vw;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 8vw;
          --mountain-height: 4vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #b533b3;
          --mountain-offset: 20vw;
          --mountain-tilt: -20deg;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 3vw;
          --mountain-height: 4vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-tilt: 45deg;
          --mountain-offset: 28vw;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 5vw;
          --mountain-height: 5vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-offset: -40vw;
          --mountain-tilt: -20deg;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 5vw;
          --mountain-height: 5vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #b533b3;
          --mountain-tilt: 33deg;
          --mountain-offset: -35vw;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 5vw;
          --mountain-height: 5vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-tilt: -62deg;
          --mountain-offset: -5vw;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 10vw;
          --mountain-height: 5vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #2a025d;
          --mountain-tilt: -20deg;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 10vw;
          --mountain-height: 5vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #150030;
          --mountain-tilt: 59deg;
          --mountain-offset: 10vw;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 10vw;
          --mountain-height: 10vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #150030;
          --mountain-tilt: -33deg;
          --mountain-offset: -30vw;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 10vw;
          --mountain-height: 10vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #2a025d;
          --mountain-offset: -20vw;
          --mountain-tilt: 20deg;
        "
      ></div>
      <div
        class="mountain"
        style="
          --mountain-base: 3vw;
          --mountain-height: 10vw;
          --mountain-color1: #a684cb;
          --mountain-color2: #681e6b;
          --mountain-tilt: 45.5deg;
          --mountain-offset: -10vw;
        "
      ></div>

      <div class="road-off"></div>
      <div class="overlay"></div>

      <div class="text">
        <div class="outrun glow">SONGS</div>

        <div class="chrome shine play" @click="toGame" data-text="PLAY NOW">
          <span class="spark"></span>PLAY NOW
        </div>
        <div
          class="chrome shine score"
          @click="toScore"
          data-text="SCORE"
          style="--shine-delay: 1s"
        >
          SCORE<span class="spark spark-offset"></span>
        </div>
      </div>
    </div>
    <svg width="0" height="0">
      <filter id="filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".01"
          numOctaves="10"
          id="fractalNoise"
        />
        <feDisplacementMap
          id="displacementMap"
          in="SourceGraphic"
          scale="120"
        />
      </filter>
      <animate
        xlink:href="#displacementMap"
        id="animclouds1"
        begin="0; animclouds2.end"
        attributeName="scale"
        from="50"
        to="180"
        dur="3s"
        fill="freeze"
      />
      <animate
        xlink:href="#displacementMap"
        id="animclouds2"
        begin="animclouds1.end"
        attributeName="scale"
        from="180"
        to="50"
        dur="3s"
        fill="freeze"
      />
      <animate
        xlink:href="#fractalNoise"
        id="animclouds3"
        begin="0;animclouds4.end"
        attributeName="baseFrequency"
        from="0.03"
        to="0.01"
        dur="30s"
        fill="freeze"
      />
      <animate
        xlink:href="#fractalNoise"
        id="animclouds4"
        begin="animclouds3.end"
        attributeName="baseFrequency"
        from="0.01"
        to="0.03"
        dur="30s"
        fill="freeze"
      />
    </svg>
  </div>
</template>

<script>
import musics from "@/assets/musics/musicas.json";

export default {
  name: "Main",
  methods: {
    toGame() {
      this.selectRandomMusics();
      this.$router.push("/game");
    },
    toScore() {
      this.$router.push("/score");
    },
    selectRandomMusics() {
      const totalMusics = 2;
      const selectedMusics = [];
      for (let i = 0; i < totalMusics; i++) {
        const randomNum = Math.floor(Math.random() * this.musics.length);
        selectedMusics.push(this.musics[randomNum]);
        this.musics.splice(randomNum, 1);
      }
      this.$store.commit("setSelectedMusics", selectedMusics);
    },
  },
  data() {
    return {
      musics: musics,
    };
  },
};
</script>

<style scoped>
.main {
  /* height: 100vh; */
  width: 100vw;
}

.logo {
  position: absolute;
  top: 8rem;
}

.logo img {
  margin-bottom: 1rem;
}

.buttons {
  z-index: 999;
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 1rem;
}

.buttons .game {
  padding: 0.8rem 5rem;
  border-radius: 0.4rem;
  border: none;
  background: #b742d4;
  color: #ffffff;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  font-family: "Circular-Loom";
  font-size: large;
}

.buttons .game:hover {
  background: #9934b3;
  box-shadow: 0 0 16px rgb(255, 255, 255);
}

.buttons .score {
  padding: 0.8rem 5rem;
  border-radius: 0.4rem;
  border: none;
  background: #b994ea;
  color: #ffffff;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  font-family: "Circular-Loom";
  font-size: large;
}

.buttons .score:hover {
  background: #8969b3;
  box-shadow: 0 0 16px rgb(255, 255, 255);
}

/*--------------------------------------------------*/

@import url(https://fonts.googleapis.com/css?family=Montserrat:700,900|Dancing+Script);

@font-face {
  font-family: "RoadRage";
  font-style: normal;
  font-weight: normal;
  src: local("RoadRage"),
    url("http://coding-dude.com/wp/wp-content/uploads/Road_Rage.woff")
      format("woff");
}

:root {
  font-size: 3vw;
}

.grid {
  position: absolute;
  bottom: -30%;
  left: 0;
  margin-left: -50%;
  width: 200%;
  height: 100%;
  background-position-y: 0px;
  background-image: repeating-linear-gradient(
      90deg,
      var(--grid-color, black) 0%,
      transparent calc(1px + var(--grid-blur, 0px)),
      transparent var(--grid-size),
      var(--grid-color, black)
        calc(var(--grid-size) + 1px + var(--grid-blur, 0px))
    ),
    repeating-linear-gradient(
      180deg,
      var(--grid-color, black) 0%,
      transparent calc(1px + var(--grid-blur, 0px)),
      transparent var(--grid-size),
      var(--grid-color, black)
        calc(var(--grid-size) + 1px + var(--grid-blur, 0px))
    );
  transform: perspective(50vh) rotateX(60deg) translateZ(10px);
  animation: moving-grid 0.5s infinite linear;
  z-index: -1;
}

@keyframes moving-grid {
  0% {
    transform: perspective(50vh) rotateX(60deg) translateZ(10px)
      translateY(-var(--grid-size));
  }
  100% {
    transform: perspective(50vh) rotateX(60deg) translateZ(10px)
      translateY(var(--grid-size));
  }
}

.sun {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  position: absolute;
  background-color: yellow;
  left: calc(50%);
  bottom: 40%;
  transform: translateX(-50%);
  background-image: linear-gradient(red, yellow), linear-gradient(black, white);
  clip-path: polygon(
    -50% 0px,
    150% -50%,
    150% 55%,
    -50% 55%,
    -50% 62%,
    150% 62%,
    150% 70%,
    0 70%,
    -50% 75%,
    150% 75%,
    150% 80%,
    0 80%,
    -50% 82%,
    150% 82%,
    150% 85%,
    0 85%,
    -50% 87%,
    150% 87%,
    150% 90%,
    0 90%,
    -50% 92%,
    150% 92%,
    150% 95%,
    0 95%,
    -50% 96%,
    150% 96%,
    150% 150%,
    0 150%
  );
  box-shadow: rgba(255, 128, 0, 0.7) 0px 0 20px;
}

.mountain {
  position: absolute;
  content: "";
  bottom: 35%;
  left: calc(50% + var(--mountain-offset, 0px));
  border-left: calc(var(--mountain-base) / 2) solid transparent;
  border-bottom: var(--mountain-height, 100px) solid
    var(--mountain-color1, white);
  border-top: 0px solid transparent;
  border-right: calc(var(--mountain-base, 100px) / 2) solid transparent;
  transform-origin: bottom;
  transform: skewX(var(--mountain-tilt, 0deg));
}

.mountain:after {
  content: "";
  border-left: calc(var(--mountain-base) / 2) solid transparent;
  border-bottom: var(--mountain-height, 100px) solid
    var(--mountain-color2, black);
  border-top: 0px solid transparent;
  border-right: calc(var(--mountain-base, 100px) / 2) solid transparent;
  transform: translate(-50%) scale(0.98);
  position: absolute;
  left: 0;
  top: 0;
}

.overlay {
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: absolute;
  left: 0;
  top: 0;
  background-image: repeating-linear-gradient(
    rgba(0, 0, 0, 0.3) 0,
    transparent 1px,
    transparent 2px,
    rgba(0, 0, 0, 0.3) 3px
  );
  pointer-events: none;
}

.background-80s {
  background: linear-gradient(
      to bottom,
      #010310 0,
      #0c1142 24%,
      #45125e 45%,
      #d53567 60%,
      #f0c3d9 65%,
      #0c1142 65%
    )
    fixed;
  background-size: 100% var(--background-height, 100vh);
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: var(--background-height, 100vh);
  z-index: -2;
}

.animated-clouds:before {
  filter: url(#filter);
}

.background-80s:before {
  content: "";
  background: linear-gradient(
      to bottom,
      #010310 0,
      #0c1142 24%,
      #45125e 45%,
      #d53567 60%,
      #f0c3d9 65%,
      #0c1142 65%
    )
    fixed;
  width: 100%;
  height: 55%;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  opacity: 0.2;
}

/*stars*/
.stars:after {
  transform: translateY(-40%);
  content: " ";
  border-radius: 100%;
  width: 3px;
  height: 4px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  box-shadow: 5vw 15vh 2px white, 1vw 33vh 0px white, 2vw 25vh 2px white,
    10vw 10vh 2px white, 12vw 20vh 0px white, 30vw 15vh 2px white,
    16vw 5vh 2px white, 24vw 10vh 0px white, 32vw 40vh 0px white,
    33vw 35vh 2px white, 12vw 38vh 2px white, 24vw 10vh 0px white,
    33vw 5vh 2px white, 20vw 10vh 0px white, 80vw 10vh 2px white,
    62vw 20vh 0px white, 60vw 15vh 2px white, 70vw 7vh 0px white,
    62vw 50vh 0px white, 65vw 35vh 2px white, 64vw 10vh 0px white,
    85vw 2vh 0px white, 92vw 40vh 0px white, 75vw 35vh 2px white,
    90vw 10vh 0px white;
  opacity: 0.3;
  animation: glitter 2s infinite;
}

@keyframes glitter {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.9;
  }

  100% {
    opacity: 0.5;
  }
}

.text {
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
.outrun {
  font-family: "Road Rage";
  font-weight: normal;
  font-size: 50px;
}

.glow {
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
      0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
      0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}

.chrome {
  cursor: pointer;
  font-family: "Montserrat";
  font-weight: 900;
  font-size: calc(30px + 10vh);
  background-image: linear-gradient(
    #2989cc 0%,
    #d3e5ec 50%,
    #592451 51%,
    #b3628d 55%,
    #592451 59%,
    #b3628d 65%,
    #ac86a6 75%,
    #b3628d 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.4);
  position: relative;
}

.chrome:before {
  content: attr(data-text);
  text-shadow: -1px -1px 1px #2989cc, -2px -2px 1px #2989cc,
    -3px -3px 1px #2989cc, 1px 1px 1px #000, 0px -1px 2px #000,
    -1px -2px 2px #000, 0 0 5px rgba(255, 255, 255, 1);
  opacity: 1;
  position: absolute;
  z-index: -1;
}

.play:hover {
  text-shadow: 0 0 16px rgba(255, 255, 255, 0.25);
}

.score:hover {
  text-shadow: 0 0 16px rgba(255, 255, 255, 0.25);
}

.shine:after {
  content: attr(data-text);
  background-image: linear-gradient(
    225deg,
    transparent 53%,
    white 55%,
    transparent 58%
  );
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-clip: text;
  z-index: 999;
  background-size: 400% 400%;
  animation: shine 10s ease infinite;
  animation-delay: var(--shine-delay, 0s);
}

@keyframes shine {
  0% {
    background-position: 0% 51%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
}

.spark {
  margin-top: calc(4vh);
  margin-left: -0.3em;
  line-height: 0;
  position: absolute;
  width: 37px;
  height: 45px;
  z-index: 999;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='120 250 1700 1200' width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --%3E%3Cg%3E%3Ctitle%3Ebackground%3C/title%3E%3Crect fill='none' id='canvas_background' height='402' width='182' y='-1' x='-1'/%3E%3Cg display='none' overflow='visible' y='0' x='0' height='100%25' width='100%25' id='canvasGrid'%3E%3Crect fill='url(%23gridpattern)' stroke-width='0' y='0' x='0' height='100%25' width='100%25'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cellipse ry='183' rx='5' id='svg_2' cy='197.0375' cx='274.5' stroke-width='0' stroke='%23000' fill='%23fff'/%3E%3Cellipse transform='rotate(90 274.50000000000006,197.03750610351565) ' ry='183' rx='5' id='svg_3' cy='197.0375' cx='274.5' stroke-width='0' stroke='%23000' fill='%23fff'/%3E%3Cellipse stroke='%23000' transform='rotate(126.69925689697266 276.19342041015625,195.4363708496094) ' ry='90.194158' rx='3.223029' id='svg_4' cy='195.43637' cx='276.193439' stroke-width='0' fill='%23fff'/%3E%3Cellipse stroke='%23000' transform='rotate(-134.6077117919922 276.19342041015625,195.43637084960938) ' ry='90.194158' rx='3.223029' id='svg_5' cy='195.43637' cx='276.193439' stroke-width='0' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E");
  filter: blur(0.5px);
  transform: scale(0);
  animation: blip 5s infinite;
  animation-timing-function: ease-in-out;
}

.chrome:last-of-type .spark {
  animation-delay: -2.5s;
}

@keyframes blip {
  0% {
    transform: scale(0);
  }
  5% {
    transform: scale(1.2) rotate(0deg);
  }
  6% {
    transform: scale(1) rotate(0deg);
  }
  8% {
    transform: scale(1) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(180deg);
  }
}

.road {
  --grid-size: 90px;
  --road-color: #2a025d;
  position: absolute;
  bottom: -30%;
  left: 0;
  margin-left: calc(50% - 200px / 2);
  width: 200px;
  height: 100%;
  background-position-y: 0px;
  background-image: repeating-linear-gradient(
    90deg,
    #a684cb 0%,
    #a684cb 2%,
    var(--road-color, rgba(115, 59, 139, 1)) 2%,
    var(--road-color, rgba(115, 59, 139, 1)) 98%,
    #a684cb 98%
  );
  transform: perspective(50vh) rotateX(60deg);
  z-index: -1;
}

.road:after {
  content: "";
  --grid-size: 90px;
  position: absolute;
  margin-left: calc(50% - 10px / 2);
  width: 10px;
  height: 100%;
  background-position-y: 0px;
  background-image: repeating-linear-gradient(
    0deg,
    #a684cb 0%,
    #a684cb 10%,
    transparent 10%,
    transparent 20%
  );
  animation: moving-grid 0.5s infinite linear;
}
</style>
