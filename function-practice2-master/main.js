// $(document).on('ready', function() {
  


// Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
// getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

console.log('#1');

var names = { name: 'Luisa', age: 25 };
var getNames = function(){
	console.log(names.name);
};
	
getNames();


// Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

console.log('#2');

var str1 = ['javascript', 'is', 'awesome'];
var str2 = ['what', 'happened', 'to', 'my', 'function'];

var totalLetters = function(arr) {
	var finalTotal = 0;
	for (var i = 0; i < arr.length; i++) {
	 finalTotal = finalTotal + arr[i].length;
	 // console.log(finalTotal);
	};
	return finalTotal;
};
console.log(totalLetters(str1));
console.log(totalLetters(str2));

// Write a function called 'keyValue' which takes two arguments and returns an object with a key of the first argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}


console.log('#3');

// var obj = {'city': 'Denver'};

var keyValue = function(key, value){
	var obj = {};
	obj[key] = value;
	// obj[value] = 'Denver';
	return obj;
};

keyValue('city', 'Denver');
console.log(keyValue('city', 'Denver'));



// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

console.log('#4');

function negativeIndex(arr, num){
	// using the console to show the values of the array I created
	// console.log(arguments);
	
	// for(var i = 0; i >= arr; i--){ // didn't need the for loop
	// };
	return arr[arr.length+num];
};

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -4, 'dog', 3));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));

// returning the value from this function and printing to the DOM
// using jQuery to style css on the page

// $('#my-name').text(negativeIndex(['jerry', 'sarah', 'sally'], -2));
// $('#my-name').addClass('my-name-class');


// Write a function called 'removeM' which takes a single string argument and removes all 'm' characters from the string. The function should return the new string.
// removeM('family') should return 'faily'
// removeM('memory') should return 'eory'

console.log('#5');
// what I know so far
// I have 'm's in my strings
// I need to target my 'm's
// using strings
// m's live at different indexes
// can I use methods on the strings?


function removeM(str){
  // declare a new var string
  var stringNoM = "";
  // loop through the string
  for( var i = 0; i < str.length; i++){
    // check to see if current char is m
    console.log(str[i]);
    if(str[i] !== 'm'){
      // adding letter at i to the string
      stringNoM += str[i];
      console.log('not an \'m\''); //console.log("not an 'm'");
    };
  };
  // adding to the string and getting it back
  return stringNoM;
};

console.log(removeM('family'));
console.log(removeM('memory'));




// Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
// printObject({ a: 10, b: 20, c: 30 }) should print:
// a is 10
// b is 20
// c is 30
// printObject({ firstName: 'pork', lastName: 'chops' }) should print:
// firstName is pork
// lastName is chops

console.log('#6');

// I know the values of the keys in my object
// using key value pairs on the first one
// using stings on the sedond one
// .splice? .split? - these only work on arrays - might be able to use on strings


function printObject(obj){
  // structure to know it will loop over the object - "in" as the key word
  // order of keys on object are irrelevant. objects don't have length
  for(var key in obj){
    console.log(key + ' is ' + obj[key]);
  };
};
printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// console.log(Object.keys({ firstName: 'pork', lastName: 'chops' }));


// Write a function called 'vowels' which takes a string and returns an array of all the vowels in the string, including duplicates.

// vowels('alabama') should return ['a', 'a', 'a', 'a']
// vowels('What lets in youth?') should return ['a', 'e', 'i', 'o', 'u']

console.log('#7');

// I have vowles in my strings
// first string only has a's
// looks a lot like the problem removeM above where I target certain letters

function vowels (str){
  // declare a new var array
  var grabVowels = [];
  // loop through the string
  for( var i = 0; i < str.length; i++){
    // check to see if current char is a
    // console.log(str[i]);
    // added each instance of the loop
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      // adding letter at i to the array
      // add a value to an array needs a method
      grabVowels.push(str[i]);
      // console.log();
    };
  };
  // adding to the array and getting it back
  return grabVowels;
};

console.log(vowels('alabama'));
console.log(vowels('What lets in youth?'));



// Write a function called 'twins' which takes an array and returns true if every pair of items in the array is the same.
// twins(['a', 'a', 'b', 'b', 'c', 'c']) should return true
// twins(['a', 'a', 'b', 'z']) should return false
// twins(['a', 'a', 'b']) should return false
// twins(['a', 'a', 'b', undefined]) should return false

console.log('#8');

// what i know
// i have duplicate values in my array
// i need to return a boolean value for each 
// if length is odd return false
// evens look at element before to see if they're equal if not return false else return true

function twins (arr) {
  // for(var i = 0; i < arr.length; i++){
  if(arr.length % 2 !== 0){
    return false;
  } else {
    return true;
  }
  for( var i = 0; i < arr.length; i += 2){
    if(arr[i-1] === arr[i]){
    return true;
  } else {
    return false;
  }
  };
};

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', 'b']));
console.log(twins(['a', 'a', 'b', undefined]));




// Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.
// or([false, false, true, false]) should return true
// or([false, false, false]) should return false
// or([]) should return false



console.log('#9');

// I have an array
// I have values in the array that need to return boolean logic
// I need to set params that work on all the values I give it
// empty array is false
// once it determines it's true return true and not run anymore
// 



function or (arr){
  // var arr = [' '];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === true){
      return true;
    } 
};
return false;
};

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([])); 








// Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
// unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']

console.log('#10');

// I have duplicate values in the array
// needs to loop through the array
// needs to check for any duplicate values
// needs to return an array with string values
// needs to remove any duplicate values
// 

function unique () {
  for (var i = 0; i < Things.length; i++) {
    Things[i]
  };
};

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));





// }); // wraps my jquery testing












































