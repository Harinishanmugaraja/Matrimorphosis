// Banking System Example using all primitive types

// 1️⃣ string - Storing the account holder's name
let accountHolder: string = "John Doe";

console.log(`Account Holder: ${accountHolder}`); //backtick

// 2️⃣ number - Storing the account balance
let accountBalance: number = 5000.75;
console.log(`Account Balance: $${accountBalance}`);

// 3️⃣ boolean - Checking if the account is active
let isAccountActive: boolean = true;
console.log(isAccountActive ? "Account is Active" : "Account is Inactive");

// // 4️⃣ bigint - Representing a large transaction ID
let transactionID: bigint = 9876543210123456789n;
console.log(`Transaction ID: ${transactionID}`);

function makeTransaction(amount: number): void {
  if (amount > accountBalance) {
    console.log("❌ Transaction Failed: Insufficient Balance");
  } else {
    accountBalance -= amount;
    console.log(`✅ Transaction Successful! New Balance: $${accountBalance}`);
  }
}

// Attempting a transaction
makeTransaction(1000);

