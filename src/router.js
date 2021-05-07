import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/persons'
    },
    {
      path: "/persons",
      name: "persons",
      component: () => import("./view/pages/persons/index")
    },
    {
      path: "/persons/:id",
      name: "getPerson",
      component: () => import("./view/pages/persons/form")
    }
  ]
}); 