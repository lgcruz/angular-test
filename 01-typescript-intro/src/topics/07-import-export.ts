import { Product, calculateTax } from "./06-functions-destructuring";

const shoppingCart: Product[] = [
  {
    description: "nokia",
    price: 100,
  },
  {
    description: "Ipad",
    price: 150,
  },
];

const [totalPrice, totalTax] = calculateTax({
  products: shoppingCart,
  tax: 0.15,
});

console.log(`Total price: ${totalPrice} - Tax Price: ${totalTax}`);
