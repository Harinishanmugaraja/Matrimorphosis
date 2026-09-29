//For you to explore - students
function createCounter(start: number): () => number {
  let count = start; // Initialize count with the start value

  // This is the inner function that increments the count
  return function (): number {
    count += 1;
    return count;
  };
}

// Create a counter starting from 5
const counterFrom5 = createCounter(5);

// Call the counter a few times
console.log(counterFrom5()); // 6
console.log(counterFrom5()); // 7
console.log(counterFrom5()); // 8
