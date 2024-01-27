import { ethers } from "hardhat";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;
  // const lockedAmount = ethers.parseEther("0.001");

  const hellowworld = await ethers.deployContract("HelloWorld");

  await hellowworld.waitForDeployment();

  console.log(`Contract deployed to ${hellowworld.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
