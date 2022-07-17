<template>
  <div id="app" :class="{ dark: dark }">
    <div class="gh-link">
      <a href="https://github.com/alexx876/solana-wallets-vue-2" target="_blank"
         aria-label="View source on GitHub">
        <svg width="80" height="80" viewBox="0 0 250 250"
             style="position: absolute; top: 0px; right: 0px; border: 0px;" aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" fill="#151513"></path>
          <path class="octo-arm"
                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                fill="#ffffff" style="transform-origin: 130px 106px;"></path>
          <path class="octo-body"
                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                fill="#ffffff"></path>
        </svg>
      </a>
    </div>
    <div class="vue-logo">
      <div>Solana Wallets Vue 2</div>
      <button @click="dark = !dark" class="btn">Toggle mode</button>
    </div>
    <wallet-multi-button :wallets="wallets" :dark="dark" auto-connect></wallet-multi-button>
  </div>
</template>

<script>
import {
  CoinbaseWalletAdapter,
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter
} from '@solana/wallet-adapter-wallets'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import WalletMultiButton from "@/components/WalletMultiButton"

const network = WalletAdapterNetwork.Devnet

export default {
  name: 'App',
  components: { WalletMultiButton },
  data() {
    return {
      dark: false,
      wallets: [
        new CoinbaseWalletAdapter(),
        new PhantomWalletAdapter(),
        new GlowWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter()
      ],
    }
  },
}
</script>
<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn {
    margin-bottom: 10px;
    background: #fffbda;
    padding: 10px 23px;
    color: black;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    font-weight: 500;
  }

  &.dark {
    background-color: rgb(17 24 39);
    color: white;

    .btn {
      color: #ffffff;
      background: #3e3e3e;
    }
  }
  .gh-link {
    align-self: flex-end;
    position: sticky;
    top: 0;
    right: 0;
  }
  .vue-logo {
    margin-top: 2rem;
    text-align: center;
    img {
      max-width: 70%;
    }
    div {
      font-weight: bolder;
      font-size: 2rem;
      padding: 1rem 0;
    }
  }
}
</style>
