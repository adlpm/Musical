import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import getEnv from "@/utils/env";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/login",
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/callback",
    name: "Callback",
    component: () => import("../views/Callback.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../views/Game.vue"),
  },
  {
    path: "/score",
    name: "score",
    component: () => import("../views/Score.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: getEnv("BASE_URL"),
  routes,
});

export default router;
