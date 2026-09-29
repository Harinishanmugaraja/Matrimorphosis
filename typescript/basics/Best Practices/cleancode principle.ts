//keep functions small and focussed
function calculateTotalPrice(cartItems: Product[]): number {
  return cartItems.reduce((total, item) => total + item.price, 0);
 
}
//❌ Avoid: Functions doing multiple tasks.


function processOrder(cartItems: Product[]) {
    // ❌ Bad: This function does too much
    console.log("Processing order...");
    let total = cartItems.reduce((total, item) => total + item.price, 0);
    console.log(`Total Price: ${total}`);
}


// ✔ Avoid Magic Numbers & Strings
// ✅ Use constants instead of hardcoded values.


const TAX_RATE = 0.08;


function calculateTaxes(amount: number): number {
    return amount * TAX_RATE;
}


//❌ Avoid:


function calculateTax(amount: number): number {
    return amount * 0.08;  // ❌ Bad (magic number)
}


//✔ Use Meaningful & Self-Explanatory Names
//✅ Names should be clear and descriptive.
//function getProductById(productId: number) { ... }  // ✅ Good




//❌ Avoid:
//function gp(id: number) { ... }  // ❌ Bad (not meaningful)


