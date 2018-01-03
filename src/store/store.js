import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import { loadData } from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  actions: {
    loadData,
  },
  modules:{
    stocks,
    portfolio,
  }
})
