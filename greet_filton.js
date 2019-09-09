// import the greet module that is in the current folder
// const greet = require('./greet');

// console.log(greet('Filton'));

const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgBlue.black(greet('Filton'));
console.log(styledMessage)

// using figlet
const figlet = require('figlet');

figlet('Filton!', function(errorMsg, data) {
    if (errorMsg) {
        console.log('Something went wrong...');
        console.dir(errorMsg);
        return;
    }
    console.log(data)
});