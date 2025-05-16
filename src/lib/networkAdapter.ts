/**
 * Network Adapter
 * 
 * This module provides utilities for adapting network connections based on the current environment.
 * It handles the differences between local development (Hardhat) and production deployment (GitHub Pages)
 */

// Detect whether we're on GitHub Pages
export const isGitHubPages = (): boolean => {
  return window.location.hostname !== 'localhost' && 
         window.location.hostname !== '127.0.0.1';
};

// Get the appropriate RPC URL based on environment
export const getRpcUrl = (): string => {
  if (isGitHubPages()) {
    // For GitHub Pages, use a public Sepolia RPC endpoint
    return 'https://rpc.sepolia.org';
  }
  
  // For local development, use Hardhat's local node
  return 'http://localhost:8545';
};

// Get the appropriate chain ID based on environment
export const getChainId = (): number => {
  if (isGitHubPages()) {
    // Sepolia testnet
    return 11155111;
  }
  
  // Hardhat local chain
  return 31337;
};

// Get network name for display purposes
export const getNetworkName = (): string => {
  return isGitHubPages() ? 'Sepolia Testnet' : 'Local Hardhat Network';
};

// Check if we need to show the network warning banner
export const shouldShowNetworkWarning = (): boolean => {
  return isGitHubPages();
};

export default {
  isGitHubPages,
  getRpcUrl,
  getChainId,
  getNetworkName,
  shouldShowNetworkWarning,
}; 