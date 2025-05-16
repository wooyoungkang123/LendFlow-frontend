import { http, createConfig } from 'wagmi';
import { mainnet, sepolia, hardhat } from 'wagmi/chains';
import { QueryClient } from '@tanstack/react-query';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// Create a new QueryClient instance
export const queryClient = new QueryClient();

// Detect if we're on GitHub Pages
const isGitHubPages = () => {
  return window.location.hostname !== 'localhost' && 
         window.location.hostname !== '127.0.0.1';
};

// Create the proper transports configuration based on environment
const createTransports = () => {
  if (isGitHubPages()) {
    // For GitHub Pages, use public RPC endpoints
    return {
      [sepolia.id]: http('https://rpc.sepolia.org'),
      [mainnet.id]: http('https://eth.llamarpc.com'),
    };
  }
  
  // For local development, include Hardhat
  return {
    [hardhat.id]: http(),
    [sepolia.id]: http(),
    [mainnet.id]: http(),
  };
};

// Get the appropriate chains based on environment
const getChains = () => {
  return isGitHubPages() 
    ? [sepolia, mainnet] 
    : [hardhat, sepolia, mainnet];
};

// Set up RainbowKit and Wagmi config
export const config = getDefaultConfig({
  appName: 'DeFi Lending Platform',
  projectId: 'a7b790a0273bd7f2d7c6f2cde7abe00a', // Example project ID - this is a placeholder
  chains: getChains(),
  transports: createTransports(),
  ssr: false, // We don't need server-side rendering for this app
}); 