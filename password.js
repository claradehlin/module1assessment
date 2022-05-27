const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log ('Hi there! How about we get you set up with a strong password?')

reader.question("What would you like your password to be? ", function(input) {

let password = input
let passwordLength = password.length

if (passwordLength < 10) {
    console.log ('Oh no! Your password needs to have at least 10 characters to be accepted.')
} else if (passwordLength >= 10) {
    console.log ('Yay! that is a great password.')
}
reader.close()
})