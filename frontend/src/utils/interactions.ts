import { ethers,BrowserProvider } from 'ethers';
import { defaultConfig, useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react'

import helloWorld from './HelloWorld.json'
import { Eip1193Provider, JsonRpcSigner, TransactionReceipt } from 'ethers/providers';

const {
  VITE_SEPOLIA_URL,
  VITE_CONTRACT_ADDRESS,
  VITE_WALLET_CONNECT_KEY
} = import.meta.env;

const provider = new ethers.JsonRpcProvider(VITE_SEPOLIA_URL);
const helloWorldAbi = helloWorld.abi;
const helloWorldContractAddress = VITE_CONTRACT_ADDRESS;
// const signer = provider.getSigner();

export const helloworldContract: ethers.Contract = new ethers.Contract(helloWorldContractAddress, helloWorldAbi, provider);

export const loadCurrentMessage = async () => {
  const message = await helloworldContract.message();

  return message;
};

export const getCurrentConnectedWallet = async () => {
  const { address } = useWeb3ModalAccount();

  if (address) {
    console.log('address: ', address)
    return address;
  }
}

export const updateMessage = async (address: string, message: string, walletProvider: Eip1193Provider) => {

  let transactionParams;
  let data;

  const browserProvider = new ethers.BrowserProvider(walletProvider)
  const signer = await browserProvider.getSigner();
  const contract: ethers.Contract = new ethers.Contract(helloWorldContractAddress, helloWorldAbi, signer);

  // encode the function call data
  data = contract.interface.encodeFunctionData('update', [message]);

  // set up transaction parameters
  transactionParams = {
    to: VITE_CONTRACT_ADDRESS,
    data: data
  }

  // Sign the transaction
  const txResponse = await signer.sendTransaction(transactionParams);

  // Get the transaction hash
  const txHash = txResponse.hash;

  return {
    status: "success",
    txHash: txHash
  }
};

// 1. Get the project id
export const projectId = VITE_WALLET_CONNECT_KEY;

// 2. Set chain id's
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
