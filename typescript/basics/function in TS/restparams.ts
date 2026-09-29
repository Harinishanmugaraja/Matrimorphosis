function calculateTotal(...prices: number[]): number {
  let total = 0;
  for (const price of prices) {
    total += price;
  }
  return total;
}

// function addToCart(...prices: number[]): void {
//   console.log("Total Price: $" + calculateTotal(...prices));
// }

// Example usage
console.log(calculateTotal(1200, 200, 50));

//complex example

//function with rest params
interface Product {
  name: string;
  price: number;
}

function calculateTotalPrices(...prices: number[]): number {
  return prices.reduce((acc, current) => acc + current, 0);
}

function addToCart(...products: Product[]): void {
  // Directly passing the prices as rest parameters to calculate the total

  const totalPrice = calculateTotalPrices(
    ...products.map((product) => product.price),
  );
  console.log("Total Cart Price: $" + totalPrice);
}

// Using the functions
const product1: Product = { name: "Laptop", price: 12000 };
const product2: Product = { name: "Headphones", price: 1500 };
const product3: Product = { name: "Mouse", price: 250 };

addToCart(product1, product2, product3);
