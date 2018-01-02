const state = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  //the second param is destructured from an Order object from Stock.js component
  'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
    //find() loops through array an finds the appropriate element
    const record = state.stocks.find(element => element.id == stockId);
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      //the 1 means only remove this item.
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  }
}

const actions = {
  sellStock({ commit }, order){
    commit('SELL_STOCK', order)
  }
};

const getters = {
  stockPortfolio: (state, getters) => {
    return state.stocks.map(stock => {
      //this is the getter that is in the stocks module
      //getters.stock refers to all the stock available
      const record = getters.stock.find(element => element.id == stock.id);
      return {
        id: stock.stockId,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      }
    })
  },
  funds: (state) => {
    return state.funds;
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
}
