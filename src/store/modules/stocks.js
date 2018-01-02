import stocks from '../../data/stocks.js';

const state = {
  stocks: [],
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(stock => {
      //math.random() returns number between 0 to 1.
      stock.price = Math.round(stock.price * (0.5 + Math.random()));
    });
  },
};

const actions = {
  //BUY_STOCK mutation occurs in the portfolio module
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
}
