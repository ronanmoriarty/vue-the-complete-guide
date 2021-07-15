import { restElement } from 'babel-types';
import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    }
  },
  actions: {
    signup ({ commit }, authData) {
      axios.post('/accounts:signUp?key=AIzaSyDP6CktbZ4Xx91Qzsf5DxCVjCaEsaGTX3Q', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
        })
        .catch(error => console.log(error))
    },
    login({ commit }, authData) {
      axios.post('/accounts:signInWithPassword?key=AIzaSyDP6CktbZ4Xx91Qzsf5DxCVjCaEsaGTX3Q', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          });
        })
        .catch(error => console.log(error))
    }
  },
  getters: {

  }
})