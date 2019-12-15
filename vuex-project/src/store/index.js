import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

import todos from './todos'

export const store = new Vuex.Store({
  modules: {
    todos
  }
});