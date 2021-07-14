const state = {
    orders: [],
    balance: 10000
};

const getters = {
    orders: state => {
        return state.orders;
    },
    balance: state => {
        return state.balance;
    }
};

const mutations = {
    purchase: (state, order) => {
        if(order.stockPrice * order.quantity < state.balance) {
            state.orders.push(order);
        } else {
            // what should we do if not enough funds? How should we communicate this?
        }
    }
};

const actions = {
    purchase: ({ commit }, order) => {
        commit('purchase', order);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}