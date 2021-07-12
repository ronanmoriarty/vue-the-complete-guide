import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        }
    },
    actions: {
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
        },
    }
});