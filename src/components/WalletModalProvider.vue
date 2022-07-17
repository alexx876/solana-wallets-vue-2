<template>
  <div>
    <div :class="dark ? 'swv-dark' : ''">
      <slot :open-modal="openModal" />
    </div>
    <div
      v-if="modalOpened"
      v-scroll-lock
      aria-labelledby="swv-modal-title"
      aria-modal="true"
      class="swv-modal"
      :class="dark ? 'swv-dark' : ''"
      role="dialog"
    >
      <slot name="overlay">
        <div @click="closeModal" class="swv-modal-overlay" />
      </slot>
      <div ref="modalPanel" class="swv-modal-container">
        <slot name="modal">
          <div
            class="swv-modal-wrapper"
            :class="{ 'swv-modal-wrapper-no-logo': !hasLogo }"
          >
            <div v-if="hasLogo" class="swv-modal-logo-wrapper">
              <slot name="logo">
                <img alt="logo" class="swv-modal-logo" :src="logo">
              </slot>
            </div>
            <h1 id="swv-modal-title" class="swv-modal-title">
              Connect Wallet
            </h1>
            <button class="swv-modal-button-close" @click.prevent="closeModal">
              <svg width="14" height="14">
                <path d="M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z" />
              </svg>
            </button>
            <ul class="swv-modal-list">
              <li
                v-for="wallet in walletsToDisplay"
                :key="wallet.name"
                @click="selectWallet(wallet.name); closeModal();"
              >
                <button class="swv-button">
                  <p>{{ wallet.name }}</p>
                  <wallet-icon :wallet="wallet" />
                </button>
              </li>
            </ul>
            <button
              v-if="hiddenWallets.length > 0"
              aria-controls="swv-modal-collapse"
              :aria-expanded="expandedWallets"
              class="swv-button swv-modal-collapse-button"
              :class="{ 'swv-modal-collapse-button-active': expandedWallets }"
              @click="expandedWallets = !expandedWallets"
            >
              {{ expandedWallets ? "Less" : "More" }} options
              <i class="swv-button-icon">
                <svg width="11" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path d="m5.938 5.73 4.28-4.126a.915.915 0 0 0 0-1.322 1 1 0 0 0-1.371 0L5.253 3.736 1.659.272a1 1 0 0 0-1.371 0A.93.93 0 0 0 0 .932c0 .246.1.48.288.662l4.28 4.125a.99.99 0 0 0 1.37.01z" />
                </svg>
              </i>
            </button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import WalletIcon from './WalletIcon'
import mixins from './mixins'

export default {
  name: 'WalletModalProvider',
  components: { WalletIcon },
  mixins: [mixins],
  props: {
    featured: {
      type: Number, default: 3
    },
    logo: {
      type: String,
      default: ''
    },
    dark: Boolean,
    store: Object
  },
  data () {
    return {
      modalOpened: false,
      expandedWallets: false
    }
  },
  computed: {
    hasLogo () {
      return !!this.logo
    },
    wallets () {
      return this.store?.wallets
    },
    featuredWallets () {
      return this.wallets.slice(0, this.featured)
    },
    walletsToDisplay () {
      return this.expandedWallets ? this.wallets : this.featuredWallets
    },
    hiddenWallets () {
      return this.wallets.slice(this.featured)
    }
  },
  methods: {
    closeModal () {
      this.modalOpened = false
    },
    openModal () {
      this.modalOpened = true
    },
    selectWallet (wallet) {
      this.store?.select(wallet)
    }
  }
}
</script>

<style scoped>

</style>
