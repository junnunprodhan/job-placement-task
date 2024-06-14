// Generics
// Create a generic function that can operate on any type.

function reverse<T>(items: T[]): T[] {
    return items.reverse();
  }
  
  console.log(reverse([1, 2, 3])); // Output: [3, 2, 1]
  console.log(reverse(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']
  