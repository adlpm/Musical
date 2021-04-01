<template>
  <div class="home">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="Logo" />
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
  background: linear-gradient(180deg, rgb(86, 19, 194) 0%, rgb(0, 0, 0) 100%);
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
</style>
