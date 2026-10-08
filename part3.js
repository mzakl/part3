// File  : part3.js
// Desc  : provide answers for part2 of JSAT2
// Author: Mohamad Akl
// Date  : 09/10/2026

// Define strings
let myString = 'This is a string';
let anotherString = '   Another string';
let hello = 'Hello there!';
let myName = 'Mohamad';

// console.log(`myString      = ${myString}`);
// console.log(`anotherString = ${anotherString}`);
// console.log(`hello         = ${hello}`);
console.log(`myName        = ${myName}`);

//===================================================================================

// Using utility function to find information

// Finding length of myString
// let myStringLength = myString.length;
// console.log(`The length of myString: ${myStringLength}`);

// Finding the first character of myString
// let myString1stChar = myString.charAt(0);
// console.log(`The first character of myStrig: ${myString1stChar}`);

// Finding the 11th character of myString// let myString11thChar = myString.charAt(10);
// console.log(`The 10th character of myString: ${myString11thChar}`);

//===================================================================================

// slice and substring functions

// Slice "is a" from myString
// let stringSlice = myString.slice(5, 9);
// console.log(`Slicing "is a" from myString: ${stringSlice}`);

// Use substring to get "the" from anotherString
// let stringSubstring = anotherString.substring(6, 9);
// console.log(`Getting "the" from antherString: ${stringSubstring}`);

//===================================================================================

// Change the case of myName string

// Change myName to upper case
let myNameUpperCase = myName.toUpperCase();
console.log(`Changing myName to upper case: ${myNameUpperCase}`);

// Change myName to lower case
let myNameLowerCase = myName.toLowerCase();
console.log(`Changing myName to lower case: ${myNameLowerCase}`);
