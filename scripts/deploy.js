const hre = require("hardhat");

async function main() {
  const Counter = await hre.ethers.getContractFactory('Counter');
  const counter = await Counter.deploy({ gasLimit: 2000000 });

  // Remove the .deployed() call
  console.log(
    `Counter deployed to: ${counter.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});