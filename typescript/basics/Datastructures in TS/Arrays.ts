let products: string[] = ["Laptop", "Phone", "Tablet", "Smartwatch"];
console.log(products); // Output: ["Laptop", "Phone", "Tablet", "Smartwatch"]

let arr: number[] = [1, 2, 3, 4, 5];

arr.push(6); // Adds element at end
console.log(arr);
arr.pop(); // Removes last element
console.log(arr);
arr.unshift(7); // Adds element at start
console.log("after unshift", arr);
arr.shift(); // Removes first element
console.log("after shift", arr);
console.log(arr.includes(3)); // true (checks if element exists)
console.log(arr);
// console.log("hello")
