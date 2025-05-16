import { useEffect, useState } from 'react';
import { isGitHubPages, getNetworkName } from '../lib/networkAdapter';

/**
 * NetworkIndicator component
 * 
 * Displays a banner when the app is running on GitHub Pages to inform users
 * they need to connect to the Sepolia testnet.
 */
const NetworkIndicator = () => {
  const [mounted, setMounted] = useState(false);
  
  // Only render after mount to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  // Only show on GitHub Pages
  if (!isGitHubPages()) return null;
  
  return (
    <div className="github-pages-notice">
      <p>⚠️ Running on GitHub Pages - Connected to {getNetworkName()}</p>
      <p>Make sure your wallet is connected to Sepolia Testnet</p>
    </div>
  );
};

export default NetworkIndicator; 