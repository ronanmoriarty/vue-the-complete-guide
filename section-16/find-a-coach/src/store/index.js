import { createStore } from 'vuex';

import auth from './modules/auth/index.js';
import coaches from './modules/coaches/index.js';
import requests from './modules/requests/index.js';

const store = createStore({
  modules: {
    auth,
    coaches,
    requests
  }
});

export default store;
