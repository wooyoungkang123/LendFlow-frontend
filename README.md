# DeFi Lending Platform Frontend

A decentralized finance lending platform that allows users to deposit collateral, borrow assets, and manage their loans.

## Local Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser at http://localhost:5173

## Running with Hardhat Local Node

To connect to a local Hardhat blockchain:

1. In a separate terminal, start the Hardhat node:
   ```
   cd .. && npm run dev
   ```
2. The frontend will automatically connect to the local node when running in development mode

## Deploying to GitHub Pages

### Automatic Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.
When you push to the main branch, the workflow will build and deploy your app.

### Manual Deployment

To manually deploy to GitHub Pages:

1. Build the project:
   ```
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

## Configuration

- The app will automatically detect if it's running on GitHub Pages and use the Sepolia testnet
- For local development, it connects to a local Hardhat node

## Troubleshooting

If you encounter a blank page on GitHub Pages:

1. Check the browser console for errors
2. Verify your wallet is connected to the Sepolia testnet
3. Make sure the repository is properly configured for GitHub Pages (Settings > Pages)

## Project Structure

The application follows a feature-based architecture to improve organization and maintainability:

```
src/
├── assets/               # Static assets like images and icons
├── components/           # Shared UI components
│   ├── common/           # Generic UI components
│   ├── layout/           # Layout components (Header, Footer, Layout)
│   └── ui/               # UI primitives
│
├── config/               # Configuration files
│
├── contracts/            # Smart contract ABIs and config
│
├── features/             # Feature-based modules
│   ├── borrowing/        # Borrowing feature components
│   ├── dashboard/        # Dashboard feature components 
│   ├── lending/          # Lending feature components
│   └── wallet/           # Wallet connection components
│
├── hooks/                # Custom React hooks
│   ├── contracts/        # Contract interaction hooks
│   ├── data/             # Data fetching and state hooks
│   └── wallet/           # Wallet-related hooks
│
├── lib/                  # Library setup and configuration
│
├── utils/                # Utility functions
│   ├── formatting/       # Formatting utilities
│   └── web3/             # Web3 utilities
│
├── App.css               # Global styles
├── App.tsx               # Main App component
├── index.css             # Base styles
├── main.tsx              # Entry point
└── Web3Provider.tsx      # Web3 provider setup
```

## Features

- Connect to Ethereum wallet via MetaMask
- Supply ETH as collateral
- Borrow USDC stablecoins against ETH collateral
- Repay USDC loans
- View position details and health factor
- Monitor market information

## Technology Stack

- React
- TypeScript
- Wagmi
- RainbowKit
- Ethers.js
- Vite
