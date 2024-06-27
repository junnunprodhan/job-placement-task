// Task: Array Filtering And Mapping
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
// Step 1: Create the array of objects
const person = [
    { name: "Alice", age: 28, gender: "female" },
    { name: "Bob", age: 35, gender: "male" },
    { name: "Carol", age: 22, gender: "female" },
    { name: "David", age: 30, gender: "male" },
    { name: "Eve", age: 40, gender: "female" },
    { name: "Frank", age: 33, gender: "male" }
  ];

  const males = person.filter(person => person.gender !== "female");

  const maleNames = males.map(person => person.name);
  console.log(maleNames);
  
//   2.Task: Object Manipulation
//   Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

// Step 1: Create the array of objects
const books = [
    { title: "Bangla", author: "omit", year: 1960 },
    { title: "English", author: "George Orwell", year: 1949 },
    { title: "Math", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "botany", author: "J.D. Salinger", year: 1951 },
    { title: "zoology", author: "Herman Melville", year: 1851 }
  ];
  function getBookTitles(books) {
    return books.map(book => book.title);
  }
  const bookTitles = getBookTitles(books);

  console.log(bookTitles);
  
//   3.Task: Function Composition
// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
// Step 1: Define the three functions

function square(num) {
    return num * num;
  }
  function double(num) {
    return num * 2;
  }
  function addFive(num) {
    return num + 5;
  }
  function squareDoubleAddFive(num) {
    const squared = square(num);
    const doubled = double(squared);
    const result = addFive(doubled);
    return result;
  }

  const number = 3;
  const finalResult = squareDoubleAddFive(number);
  console.log(finalResult);

//   4.Task: Sorting Objects
//   Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
    { make: "Toyota", model: "Corolla", year: 2018 },
    { make: "Honda", model: "Civic", year: 2020 },
    { make: "Ford", model: "Mustang", year: 2015 },
    { make: "Chevrolet", model: "Malibu", year: 2017 },
    { make: "Tesla", model: "Model S", year: 2019 }
  ];
  function sortCarsByYear(cars) {
    return cars.sort((a, b) => a.year - b.year);
  }
  const sortedCars = sortCarsByYear(cars);
  console.log(sortedCars);

  // 5.Task: Find And Modify
  // Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
  
  const peopleArray = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Alice', age: 22 }
];

  const updateAgeByName = (people, name, newAge) => {
    // Find the person by name
    const person = people.find(person => person.name === name);
    
    // If the person is found, update their age
    if (person) {
        person.age = newAge;
    }

    // Print the updated array
    console.log(people);
};

// Example usage:


updateAgeByName(peopleArray, 'Jane', 35);

// 6.Task: Array Reduction
// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = (arr) => {
    return arr.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        } else {
            return sum;
        }
    }, 0);
};

const result = sumOfEvenNumbers(numbers);
console.log(result); // Output will be 30 (2 + 4 + 6 + 8 + 10)

// 7.Write A Function That Determines Whether A Given Year Is A Leap Year.
const isLeapYear = (year) => {
  if (year % 4 === 0) {
      if (year % 100 === 0) {
          if (year % 400 === 0) {
              return true;
          } else {
              return false;
          }
      } else {
          return true;
      }
  } else {
      return false;
  }
};

// Example usage:
console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(2021)); // Output: false

// 8.Task: Count Vowels:

// Write A Function That Counts The Number Of Vowels In A Given String.
function countVowels(s) {
  const vowels = 'aeiouAEIOU'; // list of vowels (both lowercase and uppercase)
  let count = 0; // initialize count to 0
  for (let char of s) { // iterate over each character in the string
      if (vowels.includes(char)) { // check if the character is a vowel
          count++; // increment the count if it is a vowel
      }
  }
  return count; // return the final count of vowels
}

// Example usage:
const inputString = "Hello, World!";

console.log(`The number of vowels in '${inputString}' is ${countVowels(inputString)}.`);


// 9.Task: Unique Values

// Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.
// Function to filter out duplicate values and return an array with unique numbers
function removeDuplicates(arr) {
  // Using a Set to store unique values
  let uniqueSet = new Set(arr);
  // Converting the Set back to an array
  return [...uniqueSet];
}

// Create an array of numbers with some duplicate values
const nums = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 4, 9, 10, 6];

// Call the function and store the result
const uniqueNumbers = removeDuplicates(nums);

// Print the result
console.log('Original array:',nums );

console.log('Array with unique values:', uniqueNumbers);


// 10. Task: Find Maximum Value:

// Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.
// Function to find the maximum value in an array of numbers
function findMaxValue(arr) {
  if (arr.length === 0) {
      throw new Error("Array is empty");
  }
  let max = arr[0]; // Initialize max with the first element of the array
  for (let i = 1; i < arr.length; i++) { // Start loop from the second element
      if (arr[i] > max) { // If the current element is greater than max
          max = arr[i]; // Update max
      }
  }
  return max; // Return the maximum value
}

// Example usage:
const nNumbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
const maxValue = findMaxValue(nNumbers );
console.log(`The maximum value in the array is ${maxValue}.`);

// 11. Task: Advanced Sorting

// Create An Array Of Objects Representing Students With 'Name' And 'Grades' Properties. Write A Function To Sort The Students By Average Grade In Descending Order.
// Function to calculate the average of an array of numbers
function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

// Function to sort students by average grade in descending order
function sortStudentsByAverageGrade(students) {
  return students.sort((a, b) => {
      const averageA = calculateAverage(a.grades);
      const averageB = calculateAverage(b.grades);
      return averageB - averageA; // Sort in descending order
  });
}

// Create an array of student objects
const students = [
  { name: 'Alice', grades: [85, 90, 78] },
  { name: 'Bob', grades: [80, 85, 88] },
  { name: 'Charlie', grades: [90, 95, 92] },
  { name: 'David', grades: [70, 75, 80] },
  { name: 'Eve', grades: [88, 82, 91] }
];

// Call the function to sort students
const sortedStudents = sortStudentsByAverageGrade(students);

// Print the result
console.log('Students sorted by average grade in descending order:');

sortedStudents.forEach(student => {
  console.log(`${student.name}: ${calculateAverage(student.grades).toFixed(2)}`);
});


// 12. Task: Functional Programming - Reduce

// Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property.
// Function to calculate the total value of an array of objects with 'quantity' and 'price' properties
function calculateTotalValue(items) {
  return items.reduce((total, item) => {
      return total + (item.quantity * item.price);
  }, 0);
}

// Example usage:
const shoppingCart = [
  { quantity: 2, price: 10.00 },
  { quantity: 1, price: 15.50 },
  { quantity: 4, price: 7.25 },
  { quantity: 3, price: 5.99 }
];

const totalValue = calculateTotalValue(shoppingCart);
console.log(`The total value of the shopping cart is $${totalValue.toFixed(2)}.`);


// 13. task : leap year
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// Test the function
const years = [1900, 2000, 2004, 2019, 2020];

years.forEach(year => {
  console.log(`${year} is a leap year: ${isLeapYear(year)}`);
});

// 14. task: result sheet


const studentsOfGrade = [
  { name: 'Alice', scores: { math: 85, english: 92, science: 78 } },
  { name: 'Bob', scores: { math: 75, english: 89, science: 94 } },
  { name: 'Charlie', scores: { math: 90, english: 87, science: 88 } },
];

// Step 2: Calculate total and average
studentsOfGrade.forEach(student => {
  const scores = student.scores;
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const average = total / Object.values(scores).length;
  student.total = total;
  student.average = average.toFixed(2);
});

// Step 3: Assign grades
studentsOfGrade.forEach(student => {
  const average = student.average;

  if (average >= 90) {
    student.grade = 'A';
  } else if (average >= 80) {
    student.grade = 'B';
  } else if (average >= 70) {
    student.grade = 'C';
  } else if (average >= 60) {
    student.grade = 'D';
  } else {
    student.grade = 'F';
  }
});



// Step 4: Display the results
console.log('Result Sheet:');

studentsOfGrade.forEach(student => {
  console.log(`Name: ${student.name}`);
  console.log(`Scores: Math - ${student.scores.math},  English - ${student.scores.english}, Science - ${student.scores.science}`);
  console.log(`Total: ${student.total}`);
  console.log(`Average: ${student.average}`);
  console.log(`Grade: ${student.grade}`);
});

// 15 task : inch to feet
// Function to convert inches to feet
function inchesToFeet(inches) {
  // There are 12 inches in a foot
  const feet = inches / 12;
  return feet;
}

// Example usage
const inches = 36;
const feet = inchesToFeet(inches);
console.log(`${inches} inches is equal to ${feet} feet.`);

// 16 task : convert text to number
function convertToNumber(text) {
  const number = Number(text);
  if (isNaN(number)) {

      console.error("Invalid input: cannot convert to number.");
      return null;
  }
  return number;
}

const validText = "123";
const invalidText = "abc";

console.log(convertToNumber(validText));  // Output: 123
console.log(convertToNumber(invalidText));  // Output: Invalid input: cannot convert to number. null

// 1. Array Manipulation
// Problem: Finding the Largest Number in an Array
function findLargestNumber(arr) {
  return Math.max(...arr);
}

const numbs = [10, 20, 30, 40, 50];
console.log(findLargestNumber(numbs)); // Output: 50

// Problem: Removing Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const nus = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(nus)); // Output: [1, 2, 3, 4, 5]


// Problem: Reversing a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

const inputs = "Hello, World!";
console.log(reverseString(input)); // Output: "!dlroW ,olleH"

// Problem: Checking for Palindrome
function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  return cleaned === cleaned.split('').reverse().join('');
}

const input = "A man, a plan, a canal, Panama";
console.log(isPalindrome(input)); // Output: true

// Problem: Cloning an Object
function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = { a: 1, b: 2 };
const clone = cloneObject(original);
console.log(clone); // Output: { a: 1, b: 2 }

// Problem: Merging Two Objects
function mergeObjects(obj1, obj2) {

  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = mergeObjects(obj1, obj2);
console.log(merged); // Output: { a: 1, b: 3, c: 4 }


// Problem: Fibonacci Sequence
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const no = 10;
console.log(fibonacci(no)); // Output: 55

// Problem: Factorial of a Number

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const nob = 5;
console.log(factorial(nob)); // Output: 120

// Problem: Using map to Transform an Array
const ns = [1, 2, 3, 4, 5];
const squared = ns.map(num => num ** 2);
console.log(squared); // Output: [1, 4, 9, 16, 25]

// Problem: Using filter to Filter an Array
const evens = ns.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// Implementing a Queue
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) return "No elements in Queue";    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // Output: 10
console.log(queue.front()); // Output: 20

// 1. Graph Algorithms
// Problem: Finding the Shortest Path Using Dijkstra's Algorithm
class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 1; i <= this.collection.length; i++) {
        if (element[1] < this.collection[i - 1][1]) {
          this.collection.splice(i - 1, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }
  dequeue() {
    return this.collection.shift();
  }
  isEmpty() {
    return this.collection.length === 0;
  }
}

function dijkstra(graph, startNode) {
  let distances = {};
  let pq = new PriorityQueue();

  pq.enqueue([startNode, 0]);
  distances[startNode] = 0;

  for (let node in graph) {
    if (node !== startNode) {
      distances[node] = Infinity;
    }
  }

  while (!pq.isEmpty()) {
    let shortestStep = pq.dequeue();

    let currentNode = shortestStep[0];
    let currentDistance = shortestStep[1];

    for (let neighbor in graph[currentNode]) {
      let weight = graph[currentNode][neighbor];
      let distance = currentDistance + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        pq.enqueue([neighbor, distance]);
      }
    }
  }

  return distances;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

console.log(dijkstra(graph, 'A')); // Output: { A: 0, B: 1, C: 3, D: 4 }

// 2. Dynamic Programming
// Problem: Solving the Knapsack Problem
function knapsack(values, weights, capacity) {
  const n = values.length;
  const dp = Array(n + 1)
    .fill()
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;

console.log(knapsack(values, weights, capacity)); // Output: 220


// 3. Asynchronous Programming
// Problem: Implementing Promises and Async/Await
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://api.example.com/data') {
        resolve({ data: 'Sample Data' });
      } else {
        reject(new Error('Invalid URL'));
      }
    }, 1000);
  });
}

async function getData() {
  try {
    const response = await fetchData('https://api.example.com/data');
    console.log(response.data); // Output: Sample Data
  } catch (error) {
    console.error(error.message);
  }
}

getData();

// 4. Recursion
// Problem: Solving the N-Queens Problem
function solveNQueens(n) {
  const board = Array(n).fill().map(() => Array(n).fill('.'));
  const res = [];

  function isValid(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      res.push(board.map(row => row.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) continue;
      board[row][col] = 'Q';
      backtrack(row + 1);
      board[row][col] = '.';
    }
  }

  backtrack(0);

  return res;
}

console.log(solveNQueens(4));
// Output: 
// [
//   '.Q..',
//   '...Q',
//   'Q...',
//   '..Q.'
// ]



// 5. Complex Data Structures
// Problem: Implementing a Binary Search Tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const bst = new BST();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMin()); // Output: 3
console.log(bst.findMax()); // Output: 22
console.log(bst.isPresent(4)); // Output: true

// 5. Throttle Function
// Problem: Throttle Function to Limit Execution
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const log = () => console.log('Throttle');
const throttledLog = throttle(log, 2000);
window.addEventListener('resize', throttledLog);


// Debouncing Function
// Debouncing limits the rate at which a function can fire.
function debounce(func, delay) {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

const logs = () => console.log('Debounce');

const debouncedLog = debounce(logs, 2000);
window.addEventListener('resize', debouncedLog);

// 2. Deep Flatten Array
// Flatten a nested array.
function deepFlatten(arr) {
  
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val), []);
}

console.log(deepFlatten([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]

// 3. Currying
// Transform a function with multiple arguments into a series of functions.
function curry(func) {
  return function curried(...args) {
  
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {

        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // Output: 6


// 4. Intersection of Two Arrays
// Find the intersection of two arrays.
function intersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}

console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

// 5. Promise All Polyfill
// Implement Promise.all.
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          results[index] = result;
          completed += 1;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(error => reject(error));
    });
  });
}

const p1 = Promise.resolve(3);
const p2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));
const p3 = 42;

promiseAll([p1, p2, p3]).then(values => console.log(values)); // Output: [3, 'foo', 42]


// Deep Merge Objects
// Deep merge two objects.
function deepMerge(target, source) {

  for (let key in source) {
    if (source[key] instanceof Object && key in target) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }
  Object.assign(target || {}, source);
  return target;
}

const obj12 = { a: 1, b: { c: 2 } };
const obj22 = { b: { d: 3 } };
console.log(deepMerge(obj12, obj22)); // Output: { a: 1, b: { c: 2, d: 3 } }

// 8. Memoization
// Cache the results of function calls.
function memoize(func) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const add = (a, b) => a + b;

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3 (cached)

// 9. Binary Search

// Efficiently search for an element in a sorted array.
function binarySearch(arr, target) {

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {

    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(array, 4)); // Output: 3


// 10. Event Delegation
// Efficiently handle events for multiple child elements.
document.querySelector('#parent').addEventListener('click', function(event) {
  if (event.target && event.target.matches('button.child')) {
    console.log('Button', event.target.textContent, 'clicked');
  }
});

// Sum of an Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// Factorial of a Number
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Check if a String is a Palindrome
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"

// Find the Largest Number in an Array
function largestNumber(arr) {
  return Math.max(...arr);
}
console.log(largestNumber([1, 2, 3, 4, 5])); // 5

// Count Vowels in a String
function countVowels(str) {
  const vowels = 'aeiou';

  return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels("hello world")); // 3

// Merge Two Sorted Arrays
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]

// Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
