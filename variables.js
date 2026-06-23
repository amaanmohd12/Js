const accountId = 14456
let accountEmail = "amaaan@yahoo.com"
var accountPassword = "12345"
accountCity = "Bareilly"
let aaccountState

// accountId = 2//   not allowed

accountEmail = "yc@gmail.com"
accountPassword = "1237655"
accountCity = "Lucknow"


/* prefer not to use var 
because of issue in block scope and functional scope */

console.table([accountId, accountEmail, accountPassword, accountCity, aaccountState])
