const state = {
  funds: 10000,
  myStocks: [],
  // id: stock.stockId,
  // quantity: stock.quantity,
  // name: record.name,
  // price: record.price,
};

const mutations = {
  //the second param is destructured from an Order object from Stock.js component
  'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
    //find() loops through array an finds the appropriate element
    console.log("stockId: "+ stockId + "; quantity: "+quantity+"; stockPrice: "+stockPrice)
    const record = state.myStocks.find(element => element.id == stockId);
    if (record) {
      record.quantity = parseInt(record.quantity) + parseInt(quantity)
    } else {
      state.myStocks.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.myStocks.find(element => element.id == stockId);
    console.log('record: ', record)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      //the 1 means only remove this item.
      state.myStocks.splice(state.myStocks.indexOf(record), 1);
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
    return state.myStocks.map(stock => {
      //this is the getter that is in the stocks module
      //getters.stock refers to all the stock available
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      }
    })
  },
  funds: (state) => {
    return state.funds
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
