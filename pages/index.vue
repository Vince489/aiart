<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold mb-8">Home Page</h1>
    <button @click="handleLogout" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    async handleLogout() {
      try {
        const response = await fetch('http://localhost:4000/api/v1/user/logout', {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
        });
        if (response.ok) {
          // Redirect to home page
          this.$router.replace('/login');
        } else {
          console.error('Failed to logout:', response.statusText);
        }
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  }
}
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
