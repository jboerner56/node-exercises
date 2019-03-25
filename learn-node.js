// #1 print hello world with node.
// console.log('HELLO WORLD');

// #2 return the sum of the numbers given, for any amount given as arguement
// for loop to go through each of the numbers given
// for (i=2, sum = 0; i < process.argv.length; i++){
    // adds each number to the sum from each index
//     sum += + process.argv[i];
// };
// console.log(sum);

// #3 Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines 
// loads global 'fs' module so it can be used in the function
let fs = require('fs');
// sets the actual file path to a variable so it an be easily used.
let filePath = process.argv[2];
// uses the 'fs' module and included readFileSync to return the complete contents of the file.
let outPut = fs.readFileSync(filePath);
// takes the outputed file contents and coverts it to a string so it can be split.
// the split happens when the \n (new line) is encountered in the file
outPut = outPut.toString().split('\n');

// log the length of output. needs to be minus 1 because there is a line break after the last line in the file. if we do not subtract one from outPut it will give us an incorrect length.
console.log(outPut.length -1);


// #4
