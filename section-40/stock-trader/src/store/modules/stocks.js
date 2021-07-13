import stocks from '../../data/stocks';

const state = {
  stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RANDOM_STOCKS' (state) {
        // i.e. when end of day clicked
        // Change the prices of the existing stocks
    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit('PORTFOLIO/PURCHASE', order); // guessing for now at syntax for commiting to portfolio module - will flesh out later
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
