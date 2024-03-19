const { ethers } = require("hardhat");

async function main(){
   
   //ติดต่อ smart contract
   const _Vegetable = await ethers.getContractFactory("Vegetable");

   const vegeID = 123;  
    const vegeName = "Tomato";  
    const vegeFarm = "Farm1";  
    const vegeFarmerName = "John Doe";  
    const vegeDetail = "Fresh and organic";  


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