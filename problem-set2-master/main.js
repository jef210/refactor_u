// Requirements
// 1. Write a function firstReverse that takes a single string parameter and returns the string in reverse order.

console.log('#1');

var str1 = ('stuff, things, also')

var firstReverse = function(str){
 return str.split('').reverse().join(' ');
};

console.log(firstReverse(str1));




// 2. Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.

console.log('#2');

var str1 = "Hello World";

var swapCase = function(str){
  var swapWord = "";
  var words = str.split('');
  // var firstLetter = words.splice(0,1);
  for (var i = 0; i < words.length; i++) {
    if(words[i] === words[i].toLowerCase()){
     swapWord += words[i].toUpperCase();
    } else { 
      swapWord += words[i].toLowerCase();
    };
  };
  return swapWord;
  };
  
console.log(swapCase(str1));


console.log('Bonus:')

// Write a function letterCount that takes a single string parameter and returns the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by single spaces.

var str1 = "this is a totally great string";

var letterCount = function(str){
  var word = "";
  var wordSplit = str.split(' ');
  // console.log(wordSplit);
  for (var i = 0; i < if(wordSplit.length; i++) {
    if(wordSplit[i] === wordSplit[i]){
      word += wordSplit;
    }
  };
  return word
};



console.log(letterCount(str1));









