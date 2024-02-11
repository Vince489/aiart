<template>
  <div class="bg-gray-800">
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="bg-gray-700 p-8 shadow-md rounded-md w-full max-w-md">
        <h2 class="text-slate-200 text-2xl font-semibold mb-4">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="password" class="block text-slate-200 text-sm font-medium mb-2">Email</label>

            <input  v-model="email" type="email" class="bg-gray-800 border border-gray-300 text-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email" required>
            <span v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</span>
          </div>

          <div class="mb-4">
            <label for="password" class="block text-slate-200 text-sm font-medium mb-2">Password</label>
            <input v-model="password" type="password" class=" text-slate-200 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your password" required>
            <span v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</span>
          </div>

          

          <div>
            <button type="submit" class="bg-blue-500 text-slate-200 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useAuthStore } from '~/stores/authStore';

const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const handleLogin = async () => {
  // Reset errors
  emailError.value = '';
  passwordError.value = '';

  // Validation logic
  if (!email.value) {
    emailError.value = 'Email is required.';
  } else if (!isValidEmail(email.value)) {
    emailError.value = 'Invalid email format.';
  }

  if (!password.value) {
    passwordError.value = 'Password is required.';
  }

  // Perform login logic if no errors
  if (!emailError.value && !passwordError.value) {
    try {
      const response = await fetch('http://localhost:4000/api/v1/user/login', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Pass userId and userName if needed
      const userId = 'j'; // Replace with userId
      const userName = ''; // Replace with userName
      
      // Call the login action from the authStore to update isLoggedIn state
      // await authStore.login(userId, userName);
      console.log(data);

      // Redirect to dashboard after successful login
      router.push('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }
};

const isValidEmail = (email) => {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
</script>
