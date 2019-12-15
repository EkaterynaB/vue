import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Singup from './views/Signup';
import Carts from "./views/Carts";
import Home from './views/Home';
import Article from './views/Article';
import CreateArticle from './views/CreateArticle';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Singup
    },
    {
      path: '/carts',
      component: Carts
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/articles/create',
      component: CreateArticle
    }, {
      path: '/article/:id',
      component: Article
    }
  ]
});