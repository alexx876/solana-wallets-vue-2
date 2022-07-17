<template>
  <i class="swv-button-icon">
    <img v-if="wallet" :src="wallet.icon" :alt="`${wallet.name} icon`">
  </i>
</template>

<script>
export default {
  name: 'WalletIcon',
  props: {
    wallet: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
