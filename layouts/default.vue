<template>
  <nav class="bg-gray-900 p-4 fixed top-0 left-0 right-0">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink to="/" class="text-slate-200 text-lg font-semibold">Z-Prompter</NuxtLink>
      </div>
      <div class="md:hidden">
        <!-- Hamburger Icon for Mobile -->
        <button @click="toggleMobileNav" class="text-slate-200">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </button>
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <!-- Navigation links go here -->
        <NuxtLink to ="#" class="text-slate-200">Generate</NuxtLink>
        <NuxtLink to ="#" class="text-slate-200">Art Board</NuxtLink>
        <NuxtLink to ="/dashboard" class="text-slate-200">Dashboard</NuxtLink>
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <NuxtLink to="/login" class="text-slate-200">Login</NuxtLink>
        <button @click="logout" class="text-slate-200">Logout</button>        
        <NuxtLink to="/signup" class="text-slate-200">Sign Up</NuxtLink>
      </div>
    </div>
    <!-- Mobile Navigation Dropdown -->
    <div class="md:hidden">
      <NuxtLink to ="#" class="text-slate-200 block py-2">Generate</NuxtLink>
      <NuxtLink to ="#" class="text-slate-200 block py-2">About</NuxtLink>
      <NuxtLink to ="#" class="text-slate-200 block py-2">Contact</NuxtLink>
      <NuxtLink to ="/login" class="text-slate-200 block py-2">Login</NuxtLink>
      <NuxtLink to ="/signup" class="text-slate-200 block py-2">Sign Up</NuxtLink>
    </div>
  </nav>

  <div>
    <slot />
  </div>
</template>

<script>
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore();

userStore.getUserData();

</script>

<style scoped>
/* Additional styling specific to this component */
@media (max-width: 767px) {
  .md\\:hidden {
    display: none !important;
  }
}
</style>
