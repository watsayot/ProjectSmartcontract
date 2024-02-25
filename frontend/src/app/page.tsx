"use client"

import { useEffect, useState } from "react";
import { getContract } from "../../ethereum";
import Vegetable from "../../../artifacts/contracts/Vegetable.sol/Vegetable.json";


export default function Home() {
  const [count, setCount] = useState(0);
  const [contract, setContract] = useState(null);
  
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
          '0x9d4454B023096f34B160D6B654540c56A1F81688',
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

    // async function initContract() {
    //   const contract = getContract(
    //     "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
    //     Counter.abi,
    //     0 // Use the first account as the signer
    //   );
    //   setContract(contract);
    //   const initialCount = await contract.getCount();
    //   setCount(initialCount.toNumber());
    // }
    initContract();
  }, []);

  return (
    
    <div>
      <h1>Vegetable Details</h1>
      <p>Name: {data.vegeName}</p>
      <p>ID: {data.vegeID}</p>
      <p>Farm: {data.vegeFarm}</p>
      <p>Farmer Name: {data.vegeFarmerName}</p>
      <p>Detail: {data.vegeDetail}</p>
    </div>
    // <div style={{ textAlign: 'center'}}>
    //   <h1>Counter: {count}</h1>
    //   <button onClick={increment}>Increment</button>
    // </div>
  );
}
