const accountId = 654321
let accountEmail = "gmkulkarni@gamil.com"
var accountPassword = "1234"
accountCity = "Nashik"
let accountState;


// accountId = 5 Not allowed because accountId is declared with const
// console.log(accountId);

accountEmail = "abc@gamil.com"
accountPassword = "5678"
accountCity = "Pune"    

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
perfer not to use var because of its function scope and hoisting issues.
*/


