
const { ethers } = require('hardhat');
const fs = require('fs');

async function main() {
    const vegetable = await ethers.getContractFactory("Vegetable");
    const Vegetable = await vegetable.deploy();
    console.log("Contract deployed to:", Vegetable.address);
  }
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });