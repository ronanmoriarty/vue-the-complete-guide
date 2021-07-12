import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        },
        value: state => {
            return state.value;
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
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
        updateValue: ({ commit }, payload) => {
            commit('updateValue', payload);
        }
    }
});