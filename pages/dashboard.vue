<template>
  <div class="pt-20 flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl text-slate-200 font-bold mb-8">Dashboard</h1>
    <!-- Use a conditional rendering to show loading text while userData is null -->
    <template v-if="!userData">
      <p class="text-2xl text-slate-200 font-semi-bold mb-8">Loading...</p>
    </template>
    <!-- Once userData is available, display user's information -->
    <template v-else>
      <p class="text-2xl text-slate-200 font-semi-bold mb-8">Welcome to the dashboard, {{ userData.userName }}!</p>
      <button class="text-slate-200" @click="handleLogout">Logout</button>
    </template>
  </div>
</template>

<script setup>
definePageMeta({
  // middleware: 'auth',
  title: 'Dashboard',
  description: 'User dashboard page'
});
import { useUserStore } from '~/stores/userStore';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

// Get the user's information from the store
const userStore = useUserStore();
const userData = ref(null); // Use a ref to make it reactive

// Get router instance
const router = useRouter();

const handleLogout = async () => {
  try {
    await userStore.logout();
    router.push({ name: 'login' });
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

onMounted(() => {
  // Fetch user data when the component is mounted
  userStore.getUserData().then(() => {
    // Once userData is fetched, update the ref
    userData.value = userStore.userData;
  });
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
