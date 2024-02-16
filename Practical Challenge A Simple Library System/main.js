/* In this practical challenge, students will create a simple 
library system to manage books and authors. This challenge will 
help them practice working with objects, constructors, and methods. */

// Outputs a heading for the program and skips a line
console.log("TOP TWO BEST SELLING BOOKS: ");
console.log("\n");

/* The Book constructor function that 
takes the following parameters: title, author, 
and year.*/
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

/* The Author constructor function 
that takes the following parameters: 
firstName, lastName. */
function Author(firstName, lastName) {
    this.books = [];    
    this.firstName = firstName;
    this.lastName = lastName;
}

/* Adds a method to the Author prototype to 
add a book to the author's collection  */
Author.prototype.addBook = function (Book) {
    this.books.push(Book);
  };

/* Creates the first instance of Author 
and a corresponding Book instance
adds the book to the author's collection */
const authorOne = new Author("John Ronald", "Reuel Tolkien");
const bookOne = new Book("The Hobbit, or There and Back Again", authorOne, 1937);
authorOne.addBook(bookOne);

// Outputs the first details of the author and book
console.log("NO.1 Best Selling Book in World: ");
console.log("Author - " + authorOne.firstName + " " + authorOne.lastName + "\n");
console.log("Book Title - " + bookOne.title);
console.log("Release Year - " + bookOne.year);  

// Prints a blank line in the console output
console.log("\n");

/* ------------------------------------- */

/* Creates another instance of Author 
and a corresponding Book instance
adds the book to the author's collection */
const authorTwo = new Author("Joanne", "Rowling");
const bookTwo = new Book("Harry Potter and the Philosopher's Stone", authorTwo, 1997);
authorTwo.addBook(bookTwo);

// Outputs the details of the second author and book
console.log("NO.2 Best Selling Book in World: ");
console.log("Author - " + authorTwo.firstName + " " + authorTwo.lastName + "\n");
console.log("Book Title - " + bookTwo.title);
console.log("Release Year - " + bookTwo.year);