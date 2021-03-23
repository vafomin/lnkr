import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home"),
    },
    {
      path: "/u/:token",
      name: "page",
      component: () => import("../pages/RedirectPage"),
    },
    {
      path: "*",
      name: "notFound",
      component: () => import("../pages/NotFound"),
    },
  ],
});

export default router;
