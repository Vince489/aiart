<template>
  <nav class="bg-gray-900 p-4 fixed top-0 left-0 right-0">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink to="/" class="text-slate-200 text-lg font-semibold">Z-Prompter</NuxtLink>
      </div>
      <div class="md:hidden">
        <!-- Hamburger Icon for Mobile -->
        <button @click="toggleMenu" id="menu-btn" class="text-slate-200">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </button>
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <!-- Navigation links go here -->
        <NuxtLink to="#" class="text-slate-200">Generate</NuxtLink>
        <NuxtLink to="#" class="text-slate-200">Art Board</NuxtLink>
        <NuxtLink to="/dashboard" class="text-slate-200">Dashboard</NuxtLink>
      </div>
      <div v-if="isAuthenticated" class="hidden md:flex items-center space-x-4">
        <!-- Show Logout link if authenticated -->
        <NuxtLink to="#" class="text-slate-200" @click="logout">Logout</NuxtLink>
      </div>
      <div v-else class="hidden md:flex items-center space-x-4">
        <!-- Show Login and Sign Up links if not authenticated -->
        <NuxtLink to="/login" class="text-slate-200">Login</NuxtLink>
        <NuxtLink to="/signup" class="text-slate-200">Sign Up</NuxtLink>
      </div>
    </div>
    <!-- Mobile Navigation Dropdown -->
    <div v-if="toggle_menu" id="mobile-menu" class="mobile-menu md:hidden">
      <NuxtLink to="#" class="text-slate-200 block py-2">Generate</NuxtLink>
      <NuxtLink to="#" class="text-slate-200 block py-2">About</NuxtLink>
      <NuxtLink to="#" class="text-slate-200 block py-2">Contact</NuxtLink>
      <template v-if="isAuthenticated">
        <!-- Show Logout link if authenticated -->
        <NuxtLink to="#" class="text-slate-200 block py-2" @click="logout">Logout</NuxtLink>
      </template>
      <template v-else>
        <!-- Show Login and Sign Up links if not authenticated -->
        <NuxtLink to="/login" class="text-slate-200 block py-2">Login</NuxtLink>
        <NuxtLink to="/signup" class="text-slate-200 block py-2">Sign Up</NuxtLink>
      </template>
    </div>
  </nav>

  <div>
    <slot />
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/userStore';
import { ref, onMounted } from 'vue';

const userStore = useUserStore();
const isAuthenticated = ref(false);

const logout = async () => {
  try {
    await userStore.logout();
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

userStore.getUserData().then(() => {
  isAuthenticated.value = userStore.isAuthenticated;
});

onMounted(() => {
  isAuthenticated.value = userStore.isAuthenticated;
});



  
// console.log('uu', isAuthenticated);

let toggle_menu = ref(false);

onMounted(() => {
  window.addEventListener("click", function (e) {
    if (
      document.getElementById("mobile-menu") &&
      !document.getElementById("menu-btn").contains(e.target)
    ) {
      toggle_menu.value = false;
    }
  });
});

function toggleMenu() {
  toggle_menu.value = !toggle_menu.value;
}

// 
</script>

<style scoped>
/* Additional styling specific to this component */
@media (max-width: 767px) {
  .md\\:hidden {
    display: none !important;
  }
}
</style>
