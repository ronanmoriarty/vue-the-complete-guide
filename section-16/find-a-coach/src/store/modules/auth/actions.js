export default {
  async login(context, payload) {
    return context.dispatch('auth', {
        ...payload,
        mode: 'login'
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
        ...payload,
        mode: 'signup'
    });
  },
  async auth(context, payload) {
    console.log('auth....');
    const mode = payload.mode;
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdmJMq9FAq74cAhcGz_AzFvLzg3knasy0';
    if(mode === 'signup') {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdmJMq9FAq74cAhcGz_AzFvLzg3knasy0';
    }
    const response = await fetch(
        url,
        {
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
          })
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to login');
        throw error;
      }

      localStorage.setItem('token', responseData.idToken);
      localStorage.setItem('userId', responseData.localId);
    //   localStorage.setItem('expires', responseData.expiresIn); // need to convert to absolute date and time - at the moment it's just "3600", i.e. number of seconds to expiry

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn // comes back from firebase as string representing number of seconds to expire - will transform this later.
      });
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if(token && userId) {
        context.commit('setUser', {
            token,
            userId,
            tokenExpiration: null
        });
    }
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    });
  }
};
