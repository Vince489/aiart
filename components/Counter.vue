<template>
  <div>
    <h1>Counter: {{ counterStore.count }}</h1>
    <button @click="increment" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Increment
</button>

<button @click="decrement" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Decrement
</button>

<button @click="reset" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
  Reset
</button>

  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counterStore';

const counterStore = useCounterStore();
const { increment, decrement, reset } = useCounterStore();

</script>
