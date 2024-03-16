import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user', // unique identifier for the store

  // State properties
  state: () => ({
    userData: null, // holds user data like username, email, etc.
  }),

  // Actions to perform async operations
  actions: {
    // Action to set user data
    setUserData(userData) {
      this.userData = userData;
    },

    // Action to perform login
    async login({ userName, password }) {
      try {
        const response = await fetch('https://zplogin-production.up.railway.app/api/v1/user/login', {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: userName,
            password: password,
          }),
        });

        const data = await response.json();
        console.log('Login:', data.user.isAuthenticated);
        if (!response.ok) {
          throw new Error(data.message);
        }
        
        // Store JWT token in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', data.token);
        }
        
        // Set user data and authentication status
        await this.setUserData(data.user); // Wait for setting state to complete

      } catch (error) {
        console.error('Error logging in:', error);
        throw error;
      }
    },

    // Action to perform logout
    async logout() {
      try {
        const response = await fetch('https://zplogin-production.up.railway.app/api/v1/user/logout', {
          method: 'POST', // Using POST for logout
          mode: 'cors',
          credentials: 'include',
        });

        if (response.ok) {
          // Clear user data and authentication status
          this.setUserData(null);

          // Clear JWT token from localStorage
          if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
            localStorage.removeItem('stat');
          }

          // Redirect to login or any other appropriate route
          // const router = useRouter();
          // router.push({ name: 'login' });
        } else {
          // Handle logout error
          console.error('Error logging out:', response.statusText);
        }
      } catch (error) {
        // Handle logout error
        console.error('Error logging out:', error);
      }
    },


    // Get user data
    async getUserData() {
      try {
        // Ensure execution in the browser environment
        if (typeof window !== 'undefined') {
          // Check if JWT token is present in localStorage
          if (!localStorage.getItem('token')) {
            return { success: false, message: 'No token found' };
          }
          // Call your user data API endpoint here
          const response = await fetch('https://zplogin-production.up.railway.app/api/v1/user/getUser', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
          });
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message);
          }
          console.log('User data:', data);
          // Update userData state with user data
          this.setUserData(data);
        }
        return { success: true, message: 'User data fetched' };
      } catch (error) {
        console.error('Error fetching user data:', error);
        return { success: false, message: 'Failed to fetch user data' };
      }
    },
  },
    // Getters to retrieve computed properties based on state
    getters: {

    }
});
