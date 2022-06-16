import { createRouter, createWebHistory } from "vue-router";
import Register from "../pages/account/register/Register.vue";
import Login from "../pages/account/login/Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: "",
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
