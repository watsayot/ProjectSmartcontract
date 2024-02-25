const { ethers } = require("hardhat");

async function main(){
   
   //ติดต่อ smart contract
   const _Vegetable = await ethers.getContractFactory("Vegetable");

   const vegeID = 123;  // Replace with the actual value
    const vegeName = "Tomato";  // Replace with the actual value
    const vegeFarm = "Farm1";  // Replace with the actual value
    const vegeFarmerName = "John Doe";  // Replace with the actual value
    const vegeDetail = "Fresh and organic";  // Replace with the actual value


    const Vegetable = await _Vegetable.deploy(
      vegeID,
      vegeName,
      vegeFarm,
      vegeFarmerName,
      vegeDetail
  );


  await Vegetable.deployed();
   console.log("Contract deployed to address", Vegetable.address);


   //get ค่า
   console.log("VegeID:", await Vegetable.VegeID());
    console.log("VegeName:", await Vegetable.VegeName());
    console.log("VegeFarm:", await Vegetable.VegeFarm());
    console.log("VegeFarmerName:", await Vegetable.VegeFarmerName());
    console.log("VegeDetail:", await Vegetable.VegeDetail());

   // const currentValue = await vegetable.getTest();
   // console.log("Current Value:", currentValue);

   // const transactionResponse = await Vegetable.updateTest("HHHHHHH");
   // await transactionResponse.wa(1);

   // const newValue = await vegetable.getTest();
   // console.log("New Value: ",newValue);
 }

 main().then(() => process.exit(0)).catch((error) =>{
    console.error(error);
    process.exit(1);
 });