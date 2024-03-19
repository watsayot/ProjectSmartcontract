import { ethers } from 'ethers';

const getProvider = () => {
  return new ethers.providers.JsonRpcProvider('YOUR_ETHEREUM_NODE_URL');
};

const getSigner = (wallet) => {
  return wallet.connect(getProvider());
};

export { getProvider, getSigner };