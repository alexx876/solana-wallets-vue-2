import { WalletError } from '@solana/wallet-adapter-base'
export class WalletNotSelectedError extends WalletError {
  constructor () {
    super(...arguments)
    this.name = 'WalletNotSelectedError'
  }
}
export class WalletNotInitializedError extends WalletError {
  constructor () {
    super(...arguments)
    this.name = 'WalletNotSelectedError'
  }
}
