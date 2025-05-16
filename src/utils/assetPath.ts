/**
 * Helper function to resolve asset paths correctly on both local development and GitHub Pages
 * 
 * @param path - The relative path to the asset
 * @returns The correct path for the current environment
 */
export function assetPath(path: string): string {
  // Remove leading slash if present
  if (path.startsWith('/')) {
    path = path.substring(1);
  }
  
  // On GitHub Pages, we need to prefix with the repository name
  const isGitHubPages = window.location.hostname !== 'localhost' && 
                        window.location.hostname !== '127.0.0.1';
  
  if (isGitHubPages) {
    return `/LendFlow-frontend/${path}`;
  }
  
  // For local development, just use the relative path
  return `/${path}`;
}

export default assetPath; 