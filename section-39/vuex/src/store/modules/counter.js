const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    }
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
    increment: ({ commit }, payload) => { // destructuring context to only pass in the commit method of context.
        commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload);
    },
    incrementAsync: ({ commit }, payload) => {
        console.log(payload);
        setTimeout(() => {
            commit('increment', payload.by);
        }, payload.duration || 1000);
    },
    decrementAsync: ({ commit }, payload) => {
        console.log(payload);
        setTimeout(() => {
            commit('decrement', payload.by);
        }, payload.duration || 1000);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}