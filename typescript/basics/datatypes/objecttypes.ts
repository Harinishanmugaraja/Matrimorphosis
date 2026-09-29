// 1️⃣ Explicit Object Types - Defining a structured object directly
const employee = {
  id: 101,
  name: "Alice",
  department: "HR",
};
console.log("Employee:", employee);

// 2️⃣ Array of Objects - Storing multiple employees
const employees: any = [
  { id: 102, name: "Bob", department: "Finance" },
  { id: 103, name: "Charlie", department: "IT" },
];

console.log("Employee List:", employees);

// 3️⃣ Nested Objects - Adding an address field inside the employee object
const employeeWithAddress = {
  id: 104,
  name: "David",
  department: "Marketing",
  address: {
    city: "New York",
    country: "USA",
  },
};

console.log("Employee with Address:", employeeWithAddress);

// 4️⃣ Index Signature (Dynamic Keys) - Allowing dynamic properties - add on concept "type"
type dynamicEmployee = { [key: string]: string | number }; //| - or string or number | this is union opeartor in ts

const x: dynamicEmployee = {
  id: 105,
  name: "Sudha",
  role: "Developer",
  experience: 5, // years
  //isactive:false
};
console.log("Dynamic Employee:", x);

//===================================================
//just a blue print - not comes as a part of object types - just for ref only
//Using type for Objects
// Using 'type' for defining an object structure
//
type ProductType = {
  productId: number;
  productName: string;
  price: number;
};
//you can create product1 without productype also. but if you want to restrict that only these properties should be there with
//product1 object then you need to create your own type defining what are all the ppties and its datatype. that is the main use of object types

const product: ProductType = {
  productId: 201,
  productName: "Laptop",
  price: 1200,
};

console.log("Product (Type):", product);

// Using 'interface' for defining an object structure
interface ProductInterface {
  productId: number;
  productName: string;
  price: number;
}

const product2: ProductInterface = {
  productId: 202,
  productName: "Smartphone",
  price: 800,
};

console.log("Product (Interface):", product2);
