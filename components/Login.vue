<template>
  <div class="bg-gray-100">
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 class="text-2xl font-semibold mb-4">Login</h2>
        <form @submit.prevent="handleSubmit">
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const router = useRouter();

const handleSubmit = async () => {
  // Reset errors
  emailError.value = '';
  passwordError.value = '';

  // Validation logic (you can replace this with your own validation)
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

      // Console log the response for now
      console.log('Login response:', data);

      // Redirect to dashboard
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
