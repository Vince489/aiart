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
        <NuxtLink to ="#" class="text-white">Contact</NuxtLink>
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <!-- Login and Sign Up links go here -->
        <NuxtLink to ="/login" class="text-white">Login</NuxtLink>
        <NuxtLink to ="/signup" class="text-white">Sign Up</NuxtLink>
      </div>
    </div>
    <!-- Mobile Navigation Dropdown -->
    <div v-if="showMobileNav" class="md:hidden">
      <NuxtLink @click.native="toggleMobileNav" to ="#" class="text-white block py-2">Generate</NuxtLink>
      <NuxtLink @click.native="toggleMobileNav" to ="#" class="text-white block py-2">About</NuxtLink>
      <NuxtLink @click.native="toggleMobileNav" to ="#" class="text-white block py-2">Contact</NuxtLink>
      <NuxtLink @click.native="toggleMobileNav" to ="/login" class="text-white block py-2">Login</NuxtLink>
      <NuxtLink @click.native="toggleMobileNav" to ="/signup" class="text-white block py-2">Sign Up</NuxtLink>
    </div>
  </nav>

  <div>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileNav: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
    closeMobileNav() {
      this.showMobileNav = false;
    },
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
