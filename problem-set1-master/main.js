 
// Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. You can assume that words in the input string will be separated by only one space.


console.log('#1');

// create the string
var words = ('stuff, things, also');

// define the function
var letterCapitalize = function(str) {
  // used to add methods in the function to the param being called? invoked? not sure what that's called when I use a parameter in a function
  return str
  // chop up the string into individual words
    .split(' ')
    // using map instead of a for loop calling the function
    .map(function(words) { 
      // taking in the string at index 0 transforming it to uppercase then slicing off the rest of the word starting and index of 1 in that word each time 
      return words[0].toUpperCase() + words.slice(1);
    })
    // joining the string back together
    .join(' ');
}
// calling the function
console.log(letterCapitalize(words));





// Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input string will be separated by only one space.
console.log('#2');

// declare the string variable
var x = ('Noone Ever Sees Waldo');
// declare the function
function wordCount(){
  // return the variable with the split method which splits up the words in the string then for each word in the string get the length proprty
  return x.split(' ').length;
};
// call the function result to the console
console.log(wordCount(x));


// Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. The range will be between 1 and 216.

console.log('Bonus');

function primeTime(){

  

};

console.log(primeTime);





// $(document).on('ready', function() {


// });


















