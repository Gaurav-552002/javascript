const score= 200
console.log(score);

/*
const balance = new Number(100)   //Number is a built in function which is used to convert number into object
console.log(balance);
console.log(typeof balance);
*/
/*
console.log(balance.toString());   //toString is a method which is used to convert number into string
console.log( balance.toString().length);   //toString is a method which is used to convert number into string and length is a property which is used to get the length of the string
console.log(balance.toFixed(2));   //toFixed is a method which is used to convert number into string with fixed decimal points
console.log(typeof balance.toFixed(2));
*/
/*
const otherNumber = 100.56789
console.log(otherNumber.toPrecision(3));   //toPrecision is a method which is used to convert number into string with fixed number of significant digits


const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));   //toLocaleString is a method which is used to convert number into string with local specific formatting    
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++mathas++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
console.log(Math);
console.log(Math.abs(-5));   //abs is a method which is used to get the absolute value of a number
console.log(Math.round(4.6));   //round is a method which is used to round a number to the nearest integer
console.log(Math.ceil(4.2));   //ceil is a method which is used to round a number up to the nearest integer
console.log(Math.floor(4.8));   //floor is a method which is used to round a number down to the nearest integer
console.log(Math.min(4, 5, 1, 2));   //min is a method which is used to get the minimum value from a list of numbers
console.log(Math.max(4, 5, 1, 2));   //max is a method which is used to get the maximum value from a list of numbers
*/


console.log(Math.random());   //random is a method which is used to get a random number between 0 and 1
console.log((Math.random() * 10)+ 1);   //to get a random number between 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);   //to get a random number between min and max