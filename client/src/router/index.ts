import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Gallery.vue"),
    },
    {
      path: "/user",
      component: () => import("../views/User.vue"),
      children: [
        {
          path: "login",
          component: () => import("../components/UserLogin.vue"),
        },
        {
          path: "profile",
          component: () => import("../components/UserProfile.vue"),
        },
      ],
    },
  ],
});
