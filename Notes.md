Jan 27 2024

# I -- Deploy a Smart Contract

- Sepolia account with some ETH
- initialize npm and git
- install hardhat
- initialize hardhat project



## Connect Metamask & Alchemy to your project

We’ve created a Metamask wallet, Alchemy account, and written our smart contract, now it’s time to connect the three.

## Update hardhat.config.js

## Compile our contract

Now that our contract is written and our configuration file is good to go, it’s time to write our contract deploy script.

## Deploy our contract

command: npx hardhat run scripts/deploy.ts --network sepolia

Contract deployed to 0x882F7c43f96d2bDFc24da1480E95aF4301aD774C

------------------------------------------------------------------------------------------------------------------------

# II -- Interact with the Smart Contract

## Grab your contract ABI

## Read the init message

## Update the message

---------------------------------------------------------------------------------------------------------------------------

# III -- Publish  Your Smart Contract to Etherscan

By verifying your smart contract on Etherscan, anyone can view your source code and interact with your smart contract.

## Generate an API Key on your Etherscan account

## With Hardhat-deployed smart contracts

### Verify your smart contract on Etherscan!

----------------------------------------------------------------------------------------------------------------------------

# IV: Connecting your smart contract to a frontend project

## 1: Clone the starter files

## Install Vite and create a new react project to build the FE

- install TailwindCSS

## 2. HelloWorld component setup

## 3. Read from your smart contract

## 4. Loading your Hello World smart contract

To load your Hello World smart contract, you'll need its contract address and ABI

### Implementing loadCurrentMessage in your interact.js file

This function is super simple. We're going to make a simple async call to read from our contract. 

NOTE: do not use dotend on the FE, Vite will ahndle the env variables for us, just use import.meta.env to get them.

### Implement addSmartContractListener

The addSmartContractListener function is going to specifically listen for our Hello World smart contract's UpdatedMessages event, and update our UI to display the new message.

## 5. Set up your Ethereum wallet and Connect Metamask to your UI

The connectWallet function
In our interact.js file, let's implement the connectWallet function, which we can then call in our HelloWorld.js component.

- there are some functions that we don't need when using the WalletConnect sdk
  - for example: getCurrentWalletConnected, connectWalletPressed and connectWallet
