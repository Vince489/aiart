import { defineStore } from 'pinia';

export const useSessionStore = defineStore('session', {
  state: () => ({
    isAuthenticated: false,
    user: null
  }),
  actions: {
    loginUser(user) {
      this.isAuthenticated = true;
      this.user = user;
      console.log('User logged in:', user);
    },
    logoutUser() {
      this.isAuthenticated = false;
      this.user = null;
    },
    // Other actions to update session data, handle session expiry, etc.
  },
});
