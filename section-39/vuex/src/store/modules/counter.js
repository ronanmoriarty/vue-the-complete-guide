import * as types from '../types';

const state = {
    counter: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    }
};

const mutations = {
    [types.INCREMENT]: (state, payload) => {
        state.counter += payload;
    },
    [types.DECREMENT]: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
    [types.INCREMENT]: ({ commit }, payload) => { // destructuring context to only pass in the commit method of context.
        commit(types.INCREMENT, payload);
    },
    [types.DECREMENT]: ({ commit }, payload) => {
        commit(types.DECREMENT, payload);
    },
    [types.INCREMENT_ASYNC]: ({ commit }, payload) => {
        setTimeout(() => {
            commit(types.INCREMENT, payload.by);
        }, payload.duration || 1000);
    },
    [types.DECREMENT_ASYNC]: ({ commit }, payload) => {
        setTimeout(() => {
            commit(types.DECREMENT, payload.by);
        }, payload.duration || 1000);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}