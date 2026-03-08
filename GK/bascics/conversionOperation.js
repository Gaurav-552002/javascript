let score = "20"
console.log(typeof score);
console.log(typeof(score));


let valueInNumbr = Number(score);     //valueInNumbr is bilt in function which is used to convert string into number
console.log(typeof valueInNumbr);

// "33" => 33
// "33abc" => NaN (Not a Number)
// "abc33" => NaN (Not a Number)
// true => 1
// false => 0



let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)   //Boolean is a built in function which is used to convert number into boolean
console.log(booleanIsLoggedIn);