import { WalletNotConnectedError, WalletNotReadyError, WalletReadyState } from '@solana/wallet-adapter-base'
import { WalletNotSelectedError } from './errors'
export const WALLET_STORAGE_KEY = 'walletName'

export default class WalletStore {
  constructor ({ wallets, autoConnect, onError, localStorageKey }) {
    this._name = ''
    this.wallet = null
    this.publicKey = null
    this._readyState = WalletReadyState.NotDetected
    this.connected = false
    this.disconnecting = false
    this.connecting = false

    this.wallets = wallets || []
    this.autoConnect = autoConnect || false
    this.onError = onError || ((e) => {
      console.error(e)
    })
    this.localStorageKey = localStorageKey || WALLET_STORAGE_KEY

    setTimeout(() => {
      this.mounted()
    }, 300)
  }

  get readyState () {
    return this._readyState
  }

  set readyState (value) {
    this._readyState = value
    this.autoConnector()
  }

  get ready () {
    return [WalletReadyState.Installed, WalletReadyState.Loadable].includes(this.readyState)
  }

  get walletsByName () {
    return this.wallets.reduce((walletsByName, wallet) => {
      walletsByName[wallet.name] = wallet
      return walletsByName
    }, {})
  }

  get signTransaction () {
    const _wallet = this.wallet
    if (!(_wallet && 'signTransaction' in _wallet)) {
      return false
    }

    return async (transaction) => {
      if (!this.connected) { throw this.newError(new WalletNotConnectedError()) }
      return await _wallet.signTransaction(transaction)
    }
  }

  get signAllTransactions () {
    const _wallet = this.wallet
    if (!(_wallet && 'signMessage' in _wallet)) {
      return false
    }

    return async (message) => {
      if (!this.connected) { throw this.newError(new WalletNotConnectedError()) }
      return await _wallet.signMessage(message)
    }
  }

  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
    let _a, _b
    this.setWallet((_b = (_a = this.walletsByName) === null || _a === void 0 ? void 0 : _a[this.name]) !== null && _b !== void 0 ? _b : null)
  }

  mounted () {
    this.name = localStorage.getItem(this.localStorageKey)
    this.addEventsWindow()
  }

  async autoConnector () {
    if (
      !this.autoConnect ||
            !this.wallet ||
            !this.ready ||
            this.connected ||
            this.connecting
    ) { return }
    try {
      await this.connect()
    } catch (error) {
      this.name = null
    } finally {
      this.connecting = false
    }
  }

  addEventsWindow () {
    const onReadyStateChange = () => this.setWallet(this.wallet)
    const onConnect = () => this.setWallet(this.wallet)
    const onDisconnect = () => (this.name = null)

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', (onInvalidate) => {
        const _wallet = this.wallet
        if (!_wallet) {
          return
        }
        _wallet.on('readyStateChange', onReadyStateChange)
        _wallet.on('connect', onConnect)
        _wallet.on('disconnect', onDisconnect)
        _wallet.on('error', this.onError)
        onInvalidate(() => {
          _wallet.off('readyStateChange', onReadyStateChange)
          _wallet.off('connect', onConnect)
          _wallet.off('disconnect', onDisconnect)
          _wallet.off('error', this.onError)
        })
      })
    }
  }

  setWallet (newWallet) {
    let _a, _b, _c
    this.wallet = newWallet
    this.readyState = (_a = newWallet === null || newWallet === void 0 ? void 0 : newWallet.readyState) !== null && _a !== void 0 ? _a : WalletReadyState.NotDetected
    this.publicKey = (_b = newWallet === null || newWallet === void 0 ? void 0 : newWallet.publicKey) !== null && _b !== void 0 ? _b : null
    this.connected = (_c = newWallet === null || newWallet === void 0 ? void 0 : newWallet.connected) !== null && _c !== void 0 ? _c : false
  }

  newError (error) {
    this.onError(error)
    return error
  }

  async select (walletName) {
    if (this.name === walletName) {
      return
    }
    localStorage.setItem(this.localStorageKey, walletName)
    this.name = walletName
  }

  async connect () {
    if (this.connected || this.connecting || this.disconnecting) {
      return
    }
    if (!this.wallet) {
      throw this.newError(new WalletNotSelectedError())
    }
    if (!this.ready) {
      if (typeof window !== 'undefined' && this.wallet._readyState !== 'Installed') {
        window.open(this.wallet.url, '_blank')
      }
      this.name = null
      throw this.newError(new WalletNotReadyError())
    }
    try {
      this.connecting = true
      await this.wallet.connect()
      this.setWallet(this.wallet)
    } catch (error) {
      this.name = null
      throw error
    } finally {
      this.connecting = false
    }
  }

  async disconnect () {
    if (this.disconnecting) {
      return
    }
    if (!this.wallet) {
      this.name = null
      return
    }
    try {
      this.disconnecting = true
      await this.wallet.disconnect()
    } finally {
      this.name = null
      this.disconnecting = false
      localStorage.removeItem(this.localStorageKey)
    }
  }

  async sendTransaction (transaction, connection, options) {
    if (!this.wallet) {
      throw this.newError(new WalletNotSelectedError())
    }
    if (!this.connected) {
      throw this.newError(new WalletNotConnectedError())
    }
    return await this.wallet.sendTransaction(transaction, connection, options)
  }
}
