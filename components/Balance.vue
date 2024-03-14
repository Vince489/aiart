<!-- components/Balance.vue -->
<template>
  <div class="bg-gray-200 p-4 rounded-lg">
    <h2 class="text-xl font-semibold">Your Balance</h2>
    <p class="text-2xl mt-2">{{ balance }}</p>
  </div>
</template>

<script>
export default {
  props: {
    balance: Number
  }
}
</script>
