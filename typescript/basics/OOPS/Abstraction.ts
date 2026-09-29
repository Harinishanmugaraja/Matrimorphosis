abstract class FoodOrderService {
  abstract searchRestaurant(food: string): void;
  abstract placeOrder(item: string, quantity: number): void;
  abstract makePayment(amount: number): void;

  // A shared method that’s not abstract
  thankYouMessage(): void {
    console.log("Thank you for ordering with FoodieApp!");
  }
}
//concrete class
class SwiggyOrder extends FoodOrderService {
  searchRestaurant(food: string): void {
    console.log(`Searching restaurants for: ${food}`);
  }

  placeOrder(item: string, quantity: number): void {
    console.log(`Order placed: ${quantity} x ${item}`);
  }

  makePayment(amount: number): void {
    console.log(`Paid ₹${amount} via UPI`);
  }
}
class Zomato extends FoodOrderService {
  searchRestaurant(food: string): void {
    //zomato's implementation
  }
  placeOrder(item: string, quantity: number): void {}
  makePayment(amount: number): void {}
}

//use it
const userOrder = new SwiggyOrder();
const order = new Zomato();

userOrder.searchRestaurant("Pizza");
userOrder.placeOrder("Margherita", 2);
userOrder.makePayment(499);
userOrder.thankYouMessage();
