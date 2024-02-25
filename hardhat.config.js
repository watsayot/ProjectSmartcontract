
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
const {INFURA_API_KEY,PRIVATEKEY} = process.env;


module.exports = {
  solidity: "0.8.19",
  defaultNetwork : "alchemy",
  networks: {
    //Test tranaction
    hardhat: {
      //url: 'http://localhost:8545',
      chainId: 1337,},
    alchemy: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/LFJoNb8_NrZvUQmsG9ZbyvmI8BjUYRoa',
      accounts: [PRIVATEKEY],
    }
  }
};
