interface Pricing {
  unitPrice: number;
  specialPrice?: { quantity: number; price: number };
}

const prices: Record<string, Pricing> = {
  A: { unitPrice: 50, specialPrice: { quantity: 3, price: 130 } },
  B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
  C: { unitPrice: 20 },
  D: { unitPrice: 15 },
};

export function calculateTotal(items: string[]): number {
  const itemCounts = items.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);

  let total = 0;

  for (const [item, count] of Object.entries(itemCounts)) {
    const price = prices[item];
    if (price.specialPrice) {
      const specialSets = Math.floor(count / price.specialPrice.quantity);
      const remainingItems = count % price.specialPrice.quantity;
      total += specialSets * price.specialPrice.price + remainingItems * price.unitPrice;
    } else {
      total += count * price.unitPrice;
    }
  }

  return total / 100; // Convert to pounds
}