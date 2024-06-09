const accountID = 144553
let accountEmail = "abhiuditpandit@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 2 // not allowed
accountEmail = "dh@idn.com"
accountPassword = "23456"
accountCity = "Ajmer"
/*
Prefer not o use var
because of issue in block scope and functional scope
*/


console.log(accountID);
console.table([accountEmail, accountID, accountPassword, accountCity, accountState]);


