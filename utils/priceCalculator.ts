export function calculateTotalPrice(itemTotal: number, taxRate: number) {
  const tax = itemTotal * taxRate;
  return itemTotal + tax;
}