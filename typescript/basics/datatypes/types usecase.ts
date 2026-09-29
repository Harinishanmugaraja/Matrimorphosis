type ApiResponse =
  | { success: true; data: any }
  | { success: false; error: string };

// ✅ Success Example
const response1: ApiResponse = {
  success: true,
  data: { name: "Pizza", price: 299 },
};

// ✅ Failure Example
const response2: ApiResponse = {
  success: false,
  error: "Product not found",
};

//tuple
type Point = [number, number];

// ✅ Example usage
const origin1: Point = [0, 0];
const deliveryLocation: Point = [25.123, 75.456];

//union
type ID = string | number;

// ✅ Example usage
let userId1: ID = 101;
userId1 = "USER102"; // also valid

// Use in object
const user1 = {
  id: userId1,
  name: "Ananya",
};
