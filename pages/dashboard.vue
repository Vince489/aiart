<template>
  <div class="pt-20">
    <h1>Welcome to Dashboard, {{ userName }}</h1>
  </div>
</template>

<script setup>
// import { useSessionStore } from '@/stores/session'; // Adjust the path as per your project structure

// Get the username from the session store
const sessionStore = useSessionStore();
const userName = sessionStore.user ? sessionStore.user.userName : 'Guest';
</script>

<style scoped>

</style>
