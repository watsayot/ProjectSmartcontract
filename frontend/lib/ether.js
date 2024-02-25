import { ethers } from 'ethers';

export const getProvider = () => {
  const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL);
  return provider;
};

export const getSigner = (provider) => {
  const signer = provider.getSigner();
  return signer;
};