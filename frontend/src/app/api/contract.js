// pages/api/contract.js

import { ethers } from 'hardhat';
import Web3 from 'web3';

export default async function handler(req, res) {
  try {
    const MyContract = await ethers.getContractFactory('Vegetable'); // Replace with your contract name
    const deployedContract = await MyContract.deployed();
    const contractAddress = deployedContract.address;
    const contractABI = MyContract.interface.format('json');

    res.json({
      address: contractAddress,
      abi: contractABI,
    });
  } catch (error) {
    console.error('Error retrieving contract details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
