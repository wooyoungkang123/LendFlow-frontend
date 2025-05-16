// Mock data for when contracts aren't available on Sepolia

export const mockMarketData = {
  totalValueLocked: 8400000, // $8.4M
  ethPrice: 2489.55,
  borrowAPY: 4.32,
  supplyAPY: 2.87,
  priceChange: {
    eth: 1.8, // +1.8%
    tvl: 5.2, // +5.2%
    borrowAPY: -0.1, // -0.1%
    supplyAPY: 0.3, // +0.3%
  }
};

export const mockUserPosition = {
  collateralSupplied: 2.5, // ETH
  borrowedAmount: 3500, // USDC
  healthFactor: 999.00, // Very safe
  healthStatus: 'Very Safe',
  liquidationThreshold: 80, // 80%
};

export interface MockData {
  marketData: typeof mockMarketData;
  userPosition: typeof mockUserPosition;
}

export const getMockData = (): MockData => {
  return {
    marketData: { ...mockMarketData },
    userPosition: { ...mockUserPosition }
  };
};

export default getMockData; 