import { createPublicClient, http } from 'viem';
import { hardhat, sepolia } from 'viem/chains';

// Detect if we're on GitHub Pages
export const isGitHubPages = () => {
  return window.location.hostname !== 'localhost' && 
         window.location.hostname !== '127.0.0.1';
};

// Get the appropriate chain to use based on environment
export const getDefaultChain = () => {
  return isGitHubPages() ? sepolia : hardhat;
};

// Create a fallback provider that works both locally and on GitHub Pages
export const createFallbackClient = () => {
  const chain = getDefaultChain();
  
  // For GitHub Pages, use Sepolia testnet with a public RPC
  if (isGitHubPages()) {
    return createPublicClient({
      chain: sepolia,
      transport: http('https://rpc.sepolia.org'),
    });
  }
  
  // For local development, use Hardhat local node
  return createPublicClient({
    chain: hardhat,
    transport: http('http://localhost:8545'),
  });
};

// A helper function to get network name for display or logging
export const getNetworkName = () => {
  return isGitHubPages() ? 'Sepolia Testnet' : 'Local Hardhat Node';
};

export default createFallbackClient; 