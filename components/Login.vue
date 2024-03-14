<template>
  <div class="bg-gray-800">
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="bg-gray-700 p-8 shadow-md rounded-md w-full max-w-md">
        <h2 class="text-slate-200 text-2xl font-semibold mb-4">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="password" class="block text-slate-200 text-sm font-medium mb-2">Username</label>

            <input v-model="userName" type="text" class="bg-gray-800 border border-gray-300 text-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your username" required>
            <span v-if="userNameError" class="text-red-500 text-sm">{{ userNameError }}</span>
          </div>

          <div class="mb-4">
            <label for="password" class="block text-slate-200 text-sm font-medium mb-2">Password</label>
            <input v-model="password" type="password" class="text-slate-200 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your password" required>
            <span v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</span>
          </div>

          <div>
            <button type="submit" class="bg-blue-500 text-slate-200 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';

const router = useRouter();
const userStore = useUserStore();
const userName = ref('');
const password = ref('');
const userNameError = ref('');
const passwordError = ref('');

const handleLogin = async () => {
  // Reset errors
  userNameError.value = '';
  passwordError.value = '';

  // Perform login logic if no errors
  if (!userNameError.value && !passwordError.value) {
    try {
      await userStore.login({ userName: userName.value, password: password.value });

      // Redirect to dashboard
      router.push({ name: 'dashboard' });
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }
};
</script>
