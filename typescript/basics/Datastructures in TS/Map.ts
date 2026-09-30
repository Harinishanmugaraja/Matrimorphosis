//For you to explore
// Create a Map to store product stock (Product Name -> Stock Quantity)
//using the built-in ds from typescript
let productStock = new Map<string, number>();

// Adding products with initial stock
productStock.set("Laptop", 10);
productStock.set("Phone", 20);
productStock.set("Tablet", 5);

// Checking stock for a product
console.log(`Stock for Phone: ${productStock.get("Phone")}`);
// Output: Stock for Phone: 20

// Updating stock after a purchase
function purchaseProduct(product: string, quantity: number): void {
  if (productStock.has(product)) {
    let currentStock = productStock.get(product)!;
    if (currentStock >= quantity) {
      productStock.set(product, currentStock - quantity);
      console.log(
        `✅ Purchased ${quantity} ${product}(s). Remaining stock: ${productStock.get(
          product,
        )}`,
      );
    } else {
      console.log(
        `❌ Not enough stock for ${product}. Only ${currentStock} left.`,
      );
    }
  } else {
    console.log(`❌ Product ${product} not found.`);
  }
}

// Buying 2 Phones
purchaseProduct("Phone", 2);
// Output: ✅ Purchased 2 Phone(s). Remaining stock: 18

// Trying to buy 6 Tablets (Stock is only 5)
purchaseProduct("Tablet", 6);
// Output: ❌ Not enough stock for Tablet. Only 5 left.

// Removing a product when out of stock
if (productStock.has("Tablet") === true) {
  productStock.delete("Tablet");
  console.log("the product tablet is deleted successfully");
}
