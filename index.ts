// Generics
// Create a generic function that can operate on any type.

function reverse<T>(items: T[]): T[] {
    return items.reverse();
  }
  
  console.log(reverse([1, 2, 3])); // Output: [3, 2, 1]
  console.log(reverse(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']
  
//   Function Overloading
// Define multiple signatures for a function.

function concat(a: string, b: string): string;
function concat(a: number, b: number): number;
function concat(a: any, b: any): any {
  return a + b;
}

console.log(concat(1, 2)); // Output: 3
console.log(concat("Hello, ", "World!")); // Output: Hello, World!

// Decorator
// Use decorators to modify behavior or add metadata.
function Log(target: any, key: string) {
    let value = target[key];
  
    const getter = () => value;
    const setter = (newValue) => {
      console.log(`Setting value for ${key}: ${newValue}`);
      value = newValue;
    };
  
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  }
  
  class Product {
    @Log
    price: number;
  
    constructor(price: number) {
      this.price = price;
    }
  }
  
  const product = new Product(100);
  product.price = 200; // Console: Setting value for price: 200

  