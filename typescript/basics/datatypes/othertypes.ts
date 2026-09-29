// 1. any (Disable Type Checking)
let value: any = "Hello";
value = 42; // No error
value = true; // No error

console.log(value);
// 2. unknown (Safer Alternative to any)
let dataq: unknown = "Hello";
dataq = 42; // ✅ Allowed
//let text: string = dataq; // ❌ Error: Type 'unknown' is not assignable to type 'string'
console.log(dataq);

//To be explored by the students

// 3. void (No Return Value)
function logMessage(): void {
  console.log("This function returns nothing!");
}
logMessage();

// 4. never (No Possible Value)
function throwError(message: string): never {
  throw new Error(message);
}
try {
  throwError("Test");
} catch (err) {
  //console.log(err.message);
}
