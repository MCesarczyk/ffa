export const wait = (ms: number): Promise<unknown> => new Promise((resolve) => setTimeout(resolve, ms));

export const formatMoney = (amount: number): string => (amount / 100).toFixed(2);
