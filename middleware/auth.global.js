import { useUserStore } from '~/stores/userStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  const isLoggedIn = userStore.userData?.isAuthenticated || false;

  // Redirect to login page if user is trying to access dashboard not authenticated
  if (to.name === 'dashboard' && !isLoggedIn) {
    return { name: 'login' };
  }
});



  




