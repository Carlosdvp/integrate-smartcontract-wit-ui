import { ethers } from 'ethers';
import HelloWorld from '../artifacts/contracts/HelloWorld.sol/HelloWorld.json';

import dotenv from 'dotenv';
dotenv.config();

const {
  PRIVATE_KEY,
  CONTRACT_ADDRESS,
  SEPOLIA_URL
} = process.env;

if (!PRIVATE_KEY) {
  throw new Error('Please define the PRIVATE_KEY environment variable');
}

// the provider
const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(SEPOLIA_URL);

// the signer -> my wallet
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// initilaize the contract
if (!CONTRACT_ADDRESS) {
  throw new Error('Please define the CONTRACT_ADDRESS environment variable');
}
const helloContract: ethers.Contract = new ethers.Contract(CONTRACT_ADDRESS, HelloWorld.abi, wallet);
  
// call the message function in the contract
async function main() {
  const message = await helloContract.message();
  console.log('The message is: ', message);

  console.log('Updating the message...')
  const tx = await helloContract.update("Where is Triss?");
  await tx.wait();

  const newMessage = await helloContract.message();
  console.log('The message is: ', newMessage);
}

main();
