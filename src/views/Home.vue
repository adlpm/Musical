<template>
  <div class="home">
    <div class="logo">
      <img src="../assets/images/songpe.png" alt="Logo" />
    </div>
    <div class="buttons">
      <router-link to="/game" class="game">Jogar</router-link>

      <router-link to="/score" class="score">Pontuação</router-link>
    </div>

    <SoundWave />
  </div>
</template>

<script>
import SoundWave from "@/components/SoundWave.vue";

export default {
  name: "Home",
  components: {
    SoundWave,
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    268.44deg,
    rgb(255, 255, 255) 0.26%,
    rgb(156, 177, 197) 98.86%
  );
  display: flex;
  justify-content: center;
  align-items: center;
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
  background: #94c1ea;
  color: #ffffff;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
}

.buttons .game:hover {
  background: #78a1c7;
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
}

.buttons .score:hover {
  background: #8969b3;
}
</style>
