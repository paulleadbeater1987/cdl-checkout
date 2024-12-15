interface Pricing {
  unitPrice: number;
  specialPrice?: { quantity: number; price: number };
}

const prices: { [key: string]: Pricing } = {
  A: { unitPrice: 50, specialPrice: { quantity: 3, price: 130 } },
  B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
  C: { unitPrice: 20 },
  D: { unitPrice: 15 },
};

export const calculateTotal = (items: string[]): number => {
  let total = 0;
  const itemCount: { [key: string]: number } = {};

  // Count the occurrence of each item
  items.forEach(item => {
    itemCount[item] = (itemCount[item] || 0) + 1;
  });

  // Calculate the total cost considering special pricing
  for (const [item, count] of Object.entries(itemCount)) {
    const price = prices[item];
    if (price.specialPrice) {
      const { quantity, price: specialPrice } = price.specialPrice;
      const specialSets = Math.floor(count / quantity);
      const remainingItems = count % quantity;

      total += specialSets * specialPrice + remainingItems * price.unitPrice;
    } else {
      total += count * price.unitPrice;
    }
  }

  return total / 100; // Convert to pounds
};