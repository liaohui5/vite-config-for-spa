"use strict";
import VueRouter from "vue-router";
import Vue from "vue";
import Home from "%/Home.vue";
import About from "%/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  }
];

export default new VueRouter({
  mode: 'hash',
  routes,
});

