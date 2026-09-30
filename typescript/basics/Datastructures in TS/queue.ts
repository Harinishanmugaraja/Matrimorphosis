class OrderQueue {
  private orders: string[] = [];

  placeOrder(order: string): void {
    this.orders.push(order);
    console.log(`Order placed: ${order}`);
  }

  processOrder(): void {
    if (this.orders.length > 0) {
      console.log(`Processing order: ${this.orders.shift()}`);
    } else {
      console.log("No orders to process.");
    }
  }
}

// Usage
const orderQueue = new OrderQueue();
orderQueue.placeOrder("Order #101");
orderQueue.placeOrder("Order #102");

orderQueue.processOrder(); // Processing order: Order #101
orderQueue.processOrder(); // Processing order: Order #102
