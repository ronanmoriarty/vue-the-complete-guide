export default {
  async login(context, payload) {
    const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdmJMq9FAq74cAhcGz_AzFvLzg3knasy0',
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
        console.log(responseData);
        const error = new Error(responseData.message || 'Failed to login');
        throw error;
      }

      console.log(responseData);
      context.commit('setUser', {
          token: responseData.idToken,
          userId: responseData.localId,
          tokenExpiration: responseData.expiresIn // comes back from firebase as string representing number of seconds to expire - will transform this later.
      });
  },
  async signup(context, payload) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdmJMq9FAq74cAhcGz_AzFvLzg3knasy0',
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
      console.log(responseData);
      const error = new Error(responseData.message || 'Failed to signup');
      throw error;
    }

    console.log(responseData);
    context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn // comes back from firebase as string representing number of seconds to expire - will transform this later.
    });
  },
  logout(context) {
    context.commit('setUser', {
        token: null,
        userId: null,
        tokenExpiration: null
    });
  }
};
