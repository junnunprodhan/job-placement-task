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

// Step 1: Define the data structure
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
