<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 shadow-md rounded-md w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-4">Sign Up</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-medium mb-2">Username</label>
          <input type="text" v-model="username" placeholder="Enter your username" class="border p-2 rounded-md w-full">
          <span v-if="usernameError" class="text-red-500 text-sm">{{ usernameError }}</span>
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-medium mb-2">Email</label>
          <input type="email" v-model="email" placeholder="Enter your email" class="border p-2 rounded-md w-full">
          <span v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</span>
        </div>

        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-medium mb-2">Password</label>
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
      username: '',
      email: '',
      password: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
    };
  },
  methods: {
    handleSubmit() {
      // Reset errors
      this.usernameError = '';
      this.emailError = '';
      this.passwordError = '';

      // Validation logic (you can replace this with your own validation)
      if (!this.username) {
        this.usernameError = 'Username is required.';
      }

      if (!this.email) {
        this.emailError = 'Email is required.';
      } else if (!this.isValidEmail(this.email)) {
        this.emailError = 'Invalid email format.';
      }

      if (!this.password) {
        this.passwordError = 'Password is required.';
      }

      // Perform signup logic if no errors
      if (!this.usernameError && !this.emailError && !this.passwordError) {
        // Your signup logic here
        console.log('Sign up successful!');
      }
    },
    isValidEmail(email) {
      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  },
};
</script>
