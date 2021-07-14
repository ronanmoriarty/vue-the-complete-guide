import stocks from '../../data/stocks';

const state = {
  stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RANDOM_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * getRandomPercentageChange());
        });

        function getRandomPercentageChange() {
            const factor = Math.random() > 0.5 ? 1 : -1;
            return 1 + (factor * Math.random() * 0.1);
        }
    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initialiseStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    randomiseStocks: ({ commit }) => {
        commit('RANDOM_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};
