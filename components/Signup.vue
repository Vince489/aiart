<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-800">
    <div class="bg-gray-700 p-8 shadow-md rounded-md w-full max-w-md">
      <h2 class="text-slate-200 text-2xl font-semibold mb-4">Sign Up</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="userName" class="block text-slate-200 text-sm font-medium mb-2">Username</label>
          <input type="text" v-model="userName" placeholder="Enter your userName" class="border p-2 rounded-md w-full">
          <span v-if="userNameError" class="text-red-500 text-sm">{{ userNameError }}</span>
        </div>

        <div class="mb-6">
          <label for="password" class="block text-slate-200 text-sm font-medium mb-2">Password</label>
          <input type="password" v-model="password" placeholder="Enter your password" class="border p-2 rounded-md w-full">
          <span v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</span>
        </div>

        <div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
      userNameError: '',
      passwordError: '',
    };
  },
  methods: {
    async handleSubmit() {
      // Reset errors
      this.userNameError = '';
      this.passwordError = '';

      // Validation logic (you can replace this with your own validation)
      if (!this.userName) {
        this.userNameError = 'userName is required.';
      }

      if (!this.password) {
        this.passwordError = 'Password is required.';
      }

      // Perform signup logic if no errors
      if (!this.userNameError && !this.passwordError) {
        try {
          const response = await fetch('https://zplogin-production.up.railway.app/api/v1/user/register', { // Modified endpoint
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userName: this.userName, // Modified property name
              password: this.password,
            }),
          });
          const data = await response.json();
          console.log(data); // Log the response from the API
          // Optionally, redirect to another page upon successful signup
          this.$router.push('/');
        } catch (error) {
          console.error('Error signing up:', error);
        }
      }
    },
    
    isValiduserName(userName) {
      // Basic userName format validation
      const userNameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return userNameRegex.test(userName);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
