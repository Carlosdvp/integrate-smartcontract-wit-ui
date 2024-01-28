import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

dotenv.config();

const { SEPOLIA_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

if (!PRIVATE_KEY) {
  throw new Error('Please define the PRIVATE_KEY environment variable');
}

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};

export default config;
