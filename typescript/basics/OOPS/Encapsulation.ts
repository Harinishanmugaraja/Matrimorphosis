class Wallet {
  private balance: number; // Private variable to prevent direct access

  constructor(initialAmount: number) {
    this.balance = initialAmount;
  }

  // Public method to add money
  addMoney(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`$${amount} added. New balance: $${this.balance}`);
    } else {
      console.log("Invalid amount. Please add a positive value.");
    }
  }

  // Public method to check balance
  getBalance(): string {
    return `Current Balance: $${this.balance}`;
  }
}

// Usage
const myWallet = new Wallet(100);
console.log(myWallet.getBalance()); // Current Balance: $100
myWallet.addMoney(50); // $50 added. New balance: $150
console.log(myWallet.getBalance());

// ❌ Direct access is not allowed: console.log(myWallet.balance); (Error)
