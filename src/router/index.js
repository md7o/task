/* eslint-disable no-undef */
import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import ProfileView from "../views/ProfileView.vue";
import ForgetView from "../views/ForgetView.vue";

const routes = [
  {
    path: "/",
    name: "about",
    component: AboutView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/forget",
    name: "forget",
    component: ForgetView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
