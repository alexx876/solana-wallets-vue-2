
# Solana Wallets Vue 2
Integrates Solana wallets in your Vue 2 applications.

⚡️ [View demo](https://solana-wallets-vue-2.netlify.app/)

<img width="1230" alt="solana-wallets-vue" src="https://user-images.githubusercontent.com/3642397/152684955-079b4505-a7bb-4be7-976b-a0a5a59acf92.png">  

## Installation

To get started, you'll need to install the `solana-wallets-vue` npm package as well as the wallets adapters provided by Solana.

```shell  
npm install solana-wallets-vue @solana/wallet-adapter-wallets```  
  
## Setup  
Next, you can install Solana Wallets Vue use as local or global component.  
You have to set up Solana Wallets Adapters and prop it to the component instance.  
#### To register as global component:  
  
```js  
import { WalletMultiButton } from "solana-wallets-vue-2";  
Vue.component('wallet-multi-button', WalletMultiButton);  
```  
#### To use as a local component:

```vue  
<template>  
 <div> <wallet-multi-button :wallets="wallets" auto-connect /> </div></template>  
  
<script>  
import {  
 CoinbaseWalletAdapter, GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter} from '@solana/wallet-adapter-wallets'  
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'  
  import { WalletMultiButton } from "solana-wallets-vue-2";  
  export default {  
 name: 'component.vue', components: { WalletMultiButton }, data() { return { wallets: [ new CoinbaseWalletAdapter(), new PhantomWalletAdapter(), new GlowWalletAdapter(), new SlopeWalletAdapter(), new SolflareWalletAdapter({ WalletAdapterNetwork.Devnet }), new TorusWalletAdapter() ], } }}  
</script>  
```  

If you prefer the dark mode, simply provide the `dark` boolean props to the component above.

```html  
<wallet-multi-button :wallets="wallets" dark></wallet-multi-button>  
```  

### Parameters
| Props(Parameter) | Type | Default | Description |
| - | - | - |  - |  
| `wallets` | `Array` | `[]` | The wallets available the use. |  
| `autoConnect` | `boolean` | `false` | Whether or not we should try to automatically connect the wallet when loading the page. |  
| `autoConnect` | `boolean` | `false` | Whether or not we should try to automatically connect the wallet when loading the page. |  
| `onError(error)` | `void` | `error => console.error(error)` | Will be called whenever an error occurs on the wallet selection/connection workflow. |  
| `localStorageKey` | `string` | `walletName` | The key to use when storing the selected wallet type (e.g. `Phantom`) in the local storage. |  
| `localStorageKey` | `string` | `walletName` | The key to use when storing the selected wallet type (e.g. `Phantom`) in the local storage. |

## Usage
You can access the wallet store adding ref to the component instance:

```js  
<wallet-multi-button ref="walletConnector" :wallets="wallets" dark></wallet-multi-button>  
```  
Next, you can access by call **walletStore** in ref:

```js  
...  
computed: {  
 publicKey () { return this.$refs.walletConnector.walletStore?.publicKey },}  
```  

## `walletStore` references

The table below shows all the properties and methods you can get from `useWallet()`.

| Property/Method | Type | Description |  
| - | - | - |  
| `wallets` | `Array` | The wallets available the use. |  
| `autoConnect` | `boolean` | Whether or not we should try to automatically connect the wallet when loading the page. |  
| `wallet` | `Wallet | null` | The connected wallet. Null if not connected. |  
| `publicKey` | `PublicKey | null` | The public key of the connected wallet. Null if not connected. |  
| `readyState` | `string` | The ready state of the selected wallet. |  
| `ready` | `boolean` | Whether the selected wallet is ready to connect. |  
| `connected` | `boolean` | Whether a wallet has been selected and connected. |  
| `connecting` | `boolean` | Whether we are connecting a wallet. |  
| `disconnecting` | `boolean` | Whether we are disconnecting a wallet. |  
| `select(walletName)` | `void` | Select a given wallet. |  
| `connect()` | `void` | Connects the selected wallet. |  
| `disconnect()` | `void` | Disconnect the selected wallet. |  
| `sendTransaction(tx, connection, options)` | `Promise` | Send a transation whilst adding the connected wallet as a signer. |  
| `signTransaction` | `Function or undefined` | Signs the given transaction. Undefined if not supported by the selected wallet. |  
| `signAllTransactions` | `Function or undefined` | Signs all given transactions. Undefined if not supported by the selected wallet. |
