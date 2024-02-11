export default defineNuxtRouteMiddleware(async () => {
  try {
    // Make a request to the backend to check the session status
    const response = await fetch('http://localhost:4000/api/v1/user/check-session', {
      method: 'GET', 
      mode: 'cors', //
      credentials: 'include' // Include cookies in the request
    });

    console.log('Session status:', response.status );  
  } catch (error) {
    console.error('Error checking session:', error);
  }
});


