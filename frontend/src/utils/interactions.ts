import { ethers } from 'ethers';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

import helloWorld from './HelloWorld.json'

const {
  VITE_SEPOLIA_URL,
  VITE_CONTRACT_ADDRESS,
  VITE_WALLET_CONNECT_KEY
} = import.meta.env;

const provider = new ethers.JsonRpcProvider(VITE_SEPOLIA_URL);
const helloWorldAbi = helloWorld.abi;
const helloWorldContractAddress = VITE_CONTRACT_ADDRESS;

export const helloworldContract: ethers.Contract = new ethers.Contract(helloWorldContractAddress, helloWorldAbi, provider);

export const loadCurrentMessage = async () => {
  const message = await helloworldContract.message();

  return message;
};

export const getCurrentConnectedWallet = async () => {};

export const updateMessage = async () => {};

// 1. Get the project id
export const projectId = VITE_WALLET_CONNECT_KEY;

// 2. Set chains
export const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}
export const testnet = {
  chainId: 11155111,
  name: 'Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.ethplorer.io/',
  rpcUrl: VITE_SEPOLIA_URL
}

// 3. Create a metadata object
export const metadata = {
  name: 'poc dapp',
  description: 'basic dapp',
  url: 'http://localhost',
  icons: ['']
}

// 4. Create Ethers config
export const ethersConfig = defaultConfig({
  /*Required*/
  metadata,
  /*Optional*/
  enableEIP6963: true,
  enableInjected: true
})
