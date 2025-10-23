const accountId = 1444553
let accountEmail = "dixit@gmail.com"
var accountPassword = "12345"
accountCity = "Botad"

let accountState;
 //accountId = 3 // not allowed this change value 

console.log(accountId);
accountEmail = "jaydip@gmail.com"
accountPassword = "52345"
accountCity = "ahmadadad"
/* 
    prefer not to use var
    because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])