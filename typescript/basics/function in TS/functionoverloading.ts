//function overloading
// Overload signatures
function calculateArea(radius: number): number; // For Circle
function calculateArea(length: number, width: number): number; // For Rectangle

// Function implementation
function calculateArea(a: number, b?: number): number {
  if (b) {
    // If both length and width are provided, it's a rectangle
    return a * b; // Rectangle area = length * width
  } else {
    // If only radius is provided, it's a circle
    return Math.PI * a * a; // Circle area = π * radius^2
  }
}

// Using the function
const circleArea = calculateArea(5); // Circle with radius 5
console.log("Circle Area:", circleArea); // 78.53981633974483 (π * 5^2)

const rectangleArea = calculateArea(4, 6); // Rectangle with length 4 and width 6
console.log("Rectangle Area:", rectangleArea); // 24 (4 * 6)
