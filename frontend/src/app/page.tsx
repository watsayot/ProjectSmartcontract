"use client"; 

import { useEffect, useState } from "react";
import { getContract } from "../../ethereum";
import Vegetable from "../../../artifacts/contracts/Vegetable.sol/Vegetable.json";
import { Contract } from "ethers";

export default function Home() {
  const [contract, setContract] = useState<Contract | null>(null);

  const [data, setData] = useState({
    vegeName: '',
    vegeID: 0,
    vegeFarm: '',
    vegeFarmerName: '',
    vegeDetail: ''
  });

  useEffect(() => {

    async function initContract() {
      try {
        const contractInstance = getContract(
          '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
          Vegetable.abi,
          0 // Use the first account as the signer
        );
        setContract(contractInstance);

        const result = await contractInstance.returnAll();
        setData({
          vegeName: result[0],
          vegeID: result[1].toNumber(),
          vegeFarm: result[2],
          vegeFarmerName: result[3],
          vegeDetail: result[4]
        });
      } catch (error) {
        console.error('Error initializing contract:', error);
      }
    }
    initContract();
  }, []);

  return (
    
    <div style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>
      <h1>Vegetable Details</h1>
      <p>Name: {data.vegeName}</p>
      <p>ID: {data.vegeID}</p>
      <p>Farm: {data.vegeFarm}</p>
      <p>Farmer Name: {data.vegeFarmerName}</p>
      <p>Detail: {data.vegeDetail}</p>
    </div>
  );
}
