export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    // Retrieve JWT token from local storage
    const token = localStorage.getItem('token');

    if (token) {
      try {
        console.error('Valid token');
      } catch (error) {
        console.error('Error verifying token:', error);
        // Handle error (e.g., network error, server error)
        // Example: redirect('/error');
      }
    } else {
      // Token does not exist, redirect to login page or handle unauthorized access
      navigateTo(to, '/login');
      console.error('Token not found');
    }
  }
});
