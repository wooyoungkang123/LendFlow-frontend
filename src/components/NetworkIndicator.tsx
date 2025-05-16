import React, { useEffect, useState } from 'react';

/**
 * NetworkIndicator component
 * 
 * Displays a banner when the app is running on GitHub Pages to inform users
 * they need to connect to the Sepolia testnet.
 */
const NetworkIndicator: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  // Only render after mount to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  // Only show on GitHub Pages
  const isGitHubPages = window.location.hostname !== 'localhost' && 
                        window.location.hostname !== '127.0.0.1';
  
  if (!isGitHubPages) return null;
  
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
      <p className="text-red-700">⚠️ Running on GitHub Pages - Connected to Sepolia Testnet</p>
      <p className="text-red-700 mt-1">Make sure your wallet is connected to Sepolia Testnet</p>
    </div>
  );
};

export default NetworkIndicator; 