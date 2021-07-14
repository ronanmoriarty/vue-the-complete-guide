const state = {
    stocks: [],
    funds: 10000
};

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
        let stock = state.stocks.find(stock => stock.id === stockId);
        if(stock) {
            stock.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity
            });
        }

        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
        let stock = state.stocks.find(stock => stock.id === stockId);
        if(stock.quantity > quantity) {
            stock.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(stock));
        }

        state.funds += stockPrice * Math.min(quantity, stock.quantity);
    }
};

const actions = {
    sellStock({ commit }, order) {
        commit('purchase', order);
    }
};

const getters = {
    stockPortfolio: (state, getters) => {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
        });
    },
    funds: state => {
        return state.funds;
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}