<template>
  <nav class="bg-gray-800 p-4 fixed top-0 left-0 right-0">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink to="/" class="text-white text-lg font-semibold">Z-Prompter</NuxtLink>
      </div>
      <div class="md:hidden">
        <!-- Hamburger Icon for Mobile -->
        <button @click="toggleMobileNav" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </button>
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <!-- Navigation links go here -->
        <NuxtLink to ="#" class="text-white">Generate</NuxtLink>
        <NuxtLink to ="#" class="text-white">Art Board</NuxtLink>
        <NuxtLink to ="/dashboard" class="text-white">Dashboard</NuxtLink>
      </div>
      <div class="hidden md:flex items-center space-x-4">       
        <NuxtLink v-if="!isLoggedIn" to="/login" class="text-white">Login</NuxtLink>
        <button v-else @click="logout" class="text-white">Logout</button>
<div>        <NuxtLink v-if="!isLoggedIn" to="/signup" class="text-white">Sign Up</NuxtLink>
        <button v-else @click="" class="text-white">hey</button></div>
      </div>

    </div>
    <!-- Mobile Navigation Dropdown -->
    <div v-if="showMobileNav" class="md:hidden">
      <NuxtLink @click.native="toggleMobileNav" to ="#" class="text-white block py-2">Generate</NuxtLink>
      <NuxtLink @click.native="toggleMobileNav" to ="#" class="text-white block py-2">About</NuxtLink>
      <NuxtLink @click.native="toggleMobileNav" to ="/dashboard" class="text-white block py-2">Dashboard</NuxtLink>
      <NuxtLink @click.native="toggleMobileNav" v-if="!isLoggedIn" to ="/login" class="text-white block py-2">Login</NuxtLink>
      <button v-else @click="logout" class="text-white">Logout</button>

      <NuxtLink @click.native="toggleMobileNav" v-if="!isLoggedIn" to ="/signup" class="text-white block py-2">Sign Up</NuxtLink>
    </div>
  </nav>

  <div>
    <slot />
  </div>
</template>

<script>
import { useAuthStore } from '~/stores/authStore';
const authStore = useAuthStore();

export default {
  data() {
    return {
      showMobileNav: false,
    };
  },

  computed: {
  isLoggedIn() {
    return authStore.isAuthenticated;
  },
},
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
    closeMobileNav() {
      this.showMobileNav = false;
    },
    login() {
      useAuthStore().login(userId, userName);
    },


    async logout() {
      try {
        const response = await fetch('http://localhost:4000/api/v1/user/logout', {
          method: 'GET',
          mode: 'cors',
          credentials: 'include',
        });        
        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Logout failed');
        }

        // Delete session cookie
        document.cookie = "zprompter=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
     
        
        // Redirect to login page
        this.$router.push('/login');
      } catch (error) {
        console.error('Logout failed:', error);
        // Handle logout failure, e.g., display an error message
      }
    }
  },
  mounted() {
    // Log the value of isLoggedIn when the component is mounted
    console.log('isLoggedIn:', this.isLoggedIn);
  },
  watch: {
    $route() {
      this.closeMobileNav(); 
    },
  },
};
</script>

<style scoped>
/* Additional styling specific to this component */
@media (max-width: 767px) {
  .md\\:hidden {
    display: none !important;
  }
}
</style>
