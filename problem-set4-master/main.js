console.log('#1');

// split the string
// differentiate between single numbers and numbers of greater digits
// grab only numbers
// add the numbers
// log the result


var strEnter = "88world3";
var otherStr = "55world5heyo66";
var yetanother = "44blah3"


var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};

var addNumbers = function(str) {
  var total = 0;
  var curNum = "";
  for (var i = 0; i <= str.length; i++) {
    var charAt = str[i];
      if (isNumber(charAt)){
        curNum += charAt;
        // console.log(curNum);
      }
      else {
        if(isNumber(curNum)){
          total += parseInt(curNum);
          curNum = "";
        };
      };
    };
    return total;
 };


console.log(addNumbers(strEnter));
console.log(addNumbers(otherStr));  
console.log(addNumbers(yetanother));   



console.log('#2');

// take in a string
// find the length of the string
// if there's 2 words of the same length return the first word
// ignore punctuation as characters and don't worry about an empty string
// 

var str1 = "how can i eat soup without an envelope?"
var str2 = "hey you pal"

var longestWord = function(str){
  var word = "";
  var words = str.split(' ');
  
  for (var i = 0; i < words.length; i++) {
    if(words[i].length > word.length){
      word = words[i];
    }
  };
  return word;
};

console.log(longestWord(str1));
console.log(longestWord(str2));


// doing it with a forEach

// words.forEach(function(eachWord){
//   if(eachWord.length > word.length){
//     word = eachWord;
//   }
// })

console.log('Bonus');



var averageStringNumbers = function(str){

};

































$(document).on('ready', function() {
  
});