<template>
  <div>
    <wallet-modal-provider :featured="featured" :logo="logo" :dark="dark" :store="walletStore">
      <template #default="{ openModal }">
        <slot>
          <button v-if="!wallet" class="swv-button swv-button-trigger" @click="openModal()">
            Select Wallet
          </button>
          <wallet-connect-button v-else-if="!publicKeyBase58" :store="walletStore" />
          <div v-else v-click-outside-modal="closeDropdown" class="swv-dropdown">
            <slot name="dropdown-button">
              <button
                class="swv-button swv-button-trigger"
                :style="{ pointerEvents: dropdownOpened ? 'none' : 'auto' }"
                :aria-expanded="dropdownOpened"
                :title="publicKeyBase58"
                @click="openDropdown"
              >
                <wallet-icon :wallet="wallet" />
                <p>
                  {{ publicKeyTrimmed }}
                </p>
              </button>
            </slot>
            <slot name="dropdown">
              <ul
                ref="dropdownPanel"
                aria-label="dropdown-list"
                class="swv-dropdown-list"
                :class="{ 'swv-dropdown-list-active': dropdownOpened }"
                role="menu"
              >
                <slot name="dropdown-list">
                  <li v-if="canCopy" class="swv-dropdown-list-item" role="menuitem" @click="copyAddress">
                    {{ addressCopied ? "Copied" : "Copy address" }}
                  </li>
                  <li class="swv-dropdown-list-item" role="menuitem" @click="openModal(); closeDropdown();">
                    Change wallet
                  </li>
                  <li class="swv-dropdown-list-item" role="menuitem" @click="disconnect()">
                    Disconnect
                  </li>
                </slot>
              </ul>
            </slot>
          </div>
        </slot>
      </template>

      <template #overlay>
        <slot name="modal-overlay" />
      </template>
      <template #modal>
        <slot name="modal" />
      </template>
    </wallet-modal-provider>
  </div>
</template>

<script>
import WalletStore from './WalletStore.js'
import WalletModalProvider from './WalletModalProvider'
import WalletIcon from './WalletIcon'
import WalletConnectButton from './WalletConnectButton'
import mixins from './mixins'

export default {
  name: 'WalletMultiButton',
  components: { WalletConnectButton, WalletIcon, WalletModalProvider },
  mixins: [mixins],
  props: {
    featured: {
      type: Number, default: 3
    },
    logo: {
      type: String,
      default: ''
    },
    wallets: {
      type: Array,
      default: () => []
    },
    autoConnect: {
      type: Boolean,
      default: false
    },
    trimWalletLength: {
      type: Number,
      default: 4
    },
    localStorageKey: {
      type: String,
      default: 'walletName'
    },
    onError: {
      type: Function,
    },
    dark: Boolean
  },
  data () {
    return {
      walletStore: {},
      dropdownOpened: false,
      canCopy: true,
      addressCopied: false
    }
  },
  computed: {
    publicKey () {
      return this.walletStore?.publicKey
    },
    wallet () {
      return this.walletStore?.wallet
    },
    publicKeyBase58 () {
      return this.publicKey?.toBase58()
    },
    publicKeyTrimmed () {
      if (!this.wallet || !this.publicKeyBase58) {
        return null
      }
      return this.publicKeyBase58.slice(0, this.trimWalletLength) + '..' + this.publicKeyBase58.slice(-1 * this.trimWalletLength)
    }
  },
  created () {
    this.walletStore = new WalletStore({
      wallets: this.wallets,
      autoConnect: this.autoConnect,
      localStorageKey: this.localStorageKey,
      onError: this.onError
    })
  },
  methods: {
    copyAddress () {
      this.addressCopied = true
      const el = document.createElement('textarea')
      el.value = this.publicKeyBase58
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)

      if (selected) {
        document.getSelection().removeAllRanges()
        document.getSelection().addRange(selected)
      }
      setTimeout(() => {
        this.addressCopied = false
      }, 2000)
    },
    closeDropdown () {
      this.dropdownOpened = false
    },
    openDropdown () {
      this.dropdownOpened = !this.dropdownOpened
    },
    disconnect () {
      return this.walletStore?.disconnect()
    }
  }
}
</script>

<style>
</style>
