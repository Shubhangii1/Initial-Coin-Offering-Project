const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { SHUBHX_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const ShubhXNFTContract = SHUBHX_NFT_CONTRACT_ADDRESS;
  const ShubhXTokenContract = await ethers.getContractFactory(
    "ShubhXToken"
  );

  // deploy the contract
  const deployedShubhXTokenContract = await ShubhXTokenContract.deploy(
    ShubhXNFTContract
  );

  await deployedShubhXTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
    "ShubhX Token Contract Address:",
    deployedShubhXTokenContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });