export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia",
  price: 70.0,
};
const tablet: Product = {
  description: "Ipad",
  price: 500.0,
};

interface CalculateTaxOptions {
  products: Product[];
  tax: number;
}

export function calculateTax(options: CalculateTaxOptions): [number, number] {
  const { products, tax } = options;
  let total = 0;

  products.forEach(({ price }) => {
    return (total += price);
  });
  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const taxRate = 0.15;

const [totalPrice, totalTax] = calculateTax({
  products: shoppingCart,
  tax: taxRate,
});

console.log(`Total price: ${totalPrice} - Tax Price: ${totalTax}`);

// export {};
