/**
 * Now that you can "try" executing code and "catch" errors, implement a try
 * catch block into your temperature converter that processes the large object.
 * You will find another version of the weather.json file in this folder, except
 * that this version has mistakes. There are some spelling errors and format
 * errors. Your script should ignore these entries. Try running your existing
 * script and see what happens. Once you get an error, try and implement the
 * try-catch block somewhere in your code to effectively skip over that entry.
 *
 * Your error proof function should run the following commands while outputting:
 *  1. The averages.
 *  2. The number of entries that were not counted due to errors.
 */



let vancouverData = getAvgTemp("Vancouver", "C");
let jerusalemData = getAvgTemp("Jerusalem", "F");

console.log(vancouverData);
console.log(jerusalemData);