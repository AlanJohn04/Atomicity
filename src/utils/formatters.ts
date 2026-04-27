export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value);
};

export const calculateEfficiency = (id: number) => {
    return Math.max(10, Math.min(95, (id * 7) % 100));
};