import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    userId: null,
    userName: null
  }),
  getters: {
    // Getter to check if user is logged in
    isAuthenticated: state => state.isLoggedIn
  },
  actions: {
    // Action to set session data upon login
    login(userId, userName) {
      this.isLoggedIn = true;
      this.userId = userId;
      this.userName = userName;
    },
    // Action to clear session data upon logout
    logout() {
      this.isLoggedIn = false;
      this.userId = null;
      this.userName = null;
    }  }
});
