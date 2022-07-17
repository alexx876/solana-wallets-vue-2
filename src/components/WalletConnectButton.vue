<template>
  <div>
    <slot>
      <button
          class="swv-button swv-button-trigger"
          :disabled="disabled || !wallet || connecting || connected"
          @click="onClick"
      >
        <wallet-icon v-if="wallet" :wallet="wallet" />
        <p v-text="content" />
      </button>
    </slot>
  </div>
</template>

<script>
import WalletIcon from './WalletIcon'
export default {
  name: 'WalletConnectButton',
  components: { WalletIcon },
  props: {
    disabled: Boolean,
    store: Object
  },
  computed: {
    wallet () {
      return this.store.wallet
    },
    connecting () {
      return this.store.connecting
    },
    connected () {
      return this.store.connected
    },
    content () {
      if (this.connecting) {
        return 'Connecting ...'
      }
      if (this.connected) {
        return 'Connected'
      }
      if (this.wallet) {
        return 'Connect'
      }
      return 'Connect Wallet'
    }
  },
  methods: {
    onClick (event) {
      this.$emit('click', event)
      if (event.defaultPrevented) {
        return
      }
      this.store.connect().catch(() => {})
    }
  }
}
</script>

<style scoped>

</style>
