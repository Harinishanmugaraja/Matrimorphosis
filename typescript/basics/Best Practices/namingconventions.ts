let productName: string = "Laptop"; // ✅ Good
const MAX_PRODUCTS: number = 100; // ✅ Good




let product_name: string = "Laptop"; // ❌ Bad (snake_case not preferred)
const maxProducts = 100;             // ❌ Bad (constants should be UPPER_CASE)


//functions and methods
function getProductDetails(id: number): string {
  return `Product ID: ${id}`;
}
//function GetProduct_Details(id: number): string { ... }  // ❌ Bad (PascalCase and underscores)


//class & interface
// class Product {
//     name: string;
//     price: number;
// }


interface ICartItem {
    productId: number;
    quantity: number;
}




//class product { ... }  // ❌ Bad (lowercase)
//interface cartItem { ... }  // ❌ Bad (should use PascalCase)
//File & Folder Naming


// components/
//   product-list.component.ts  ✅ Good
//   checkout.service.ts        ✅ Good




//   components/
//   ProductList.ts     ❌ Bad (PascalCase)
//   checkoutService.ts ❌ Bad (camelCase)


