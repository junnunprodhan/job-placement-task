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



  