<template>
  <div class="container mx-auto py-8 px-4">
    <div class="max-w-lg mx-auto">
      <Balance :balance="balance" />
      <Buttons />
    </div>
  </div>
</template>

<script>
import Balance from '@/components/Balance.vue'
import Buttons from '@/components/Buttons.vue'

export default {
  components: {
    Balance,
    Buttons
  },
  data() {
    return {
      balance: 1000 // Example balance, replace with actual balance
    }
  }
}
</script>
