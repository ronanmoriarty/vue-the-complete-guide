export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
      console.log(`didAutoLogout initially set to: ${state.didAutoLogout}`);
      state.didAutoLogout = true;
      console.log('didAutoLogout set to true');
  }
};
