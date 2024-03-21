import { ethers } from 'ethers';
import helloWorld from './HelloWorld.json'

const { VITE_SEPOLIA_URL, VITE_CONTRACT_ADDRESS } = import.meta.env;

const provider = new ethers.JsonRpcProvider(VITE_SEPOLIA_URL);
const helloWorldAbi = helloWorld.abi;
const helloWorldContractAddress = VITE_CONTRACT_ADDRESS;

export const helloworldContract: ethers.Contract = new ethers.Contract(helloWorldContractAddress, helloWorldAbi, provider);

export const loadCurrentMessage = async () => {
  const message = await helloworldContract.message();

  return message;
};

export const connectWallet = async () => {
};

export const getCurrentConnectedWallet = async () => {};

export const updateMessage = async () => {};
