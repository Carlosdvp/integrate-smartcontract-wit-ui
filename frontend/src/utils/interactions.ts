import dotenv from 'dotenv';
import { ethers } from 'ethers';
import helloWorld from './HelloWorld.json'

dotenv.config();

const { VITE_SEPOLIA_URL, VITE_CONTRACT_ADDRESS } = import.meta.env;

const provider = new ethers.JsonRpcProvider(VITE_SEPOLIA_URL);
const helloWorldAbi = helloWorld.abi;
const helloWorldContractAddress = VITE_CONTRACT_ADDRESS;

export const helloworldContract = new ethers.BaseContract(helloWorldContractAddress, helloWorldAbi, provider);

export const loadCurrentMessage = async () => {
};

export const connectWallet = async () => {
};

export const getCurrentConnectedWallet = async () => {};

export const updateMessage = async () => {};
