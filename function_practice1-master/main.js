// Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
// tripleFive()
console.log('#1')

var tripleFive = 'Five!'
for(var i = 0; i<3; i++){
	console.log(tripleFive);
}

// Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
// lastLetter('hello') should return 'o'
// lastLetter('island') should return 'd'
console.log('#2:');


var lastLetter = function(str) {
	return str[str.length-1];
}
console.log(lastLetter('hello'));
console.log(lastLetter('island'));



// Write a function called 'square' which takes a single argument which is a number, and returns number * number.
// square(3) should return 9
// square(5) should return 25

console.log('#3');

var square = function(number) {
	return number * number;
}
console.log(square(3));
console.log(square(5));



// Write a function called 'negate' which takes a single number argument and returns the negative of that number.
// negate(5) should return -5
// negate(-8) should return 8

console.log('#4');

var negate = function(number) {
	return number + (-number) - number;
}

console.log(negate(5));
console.log(negate(-8));


// Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
// toArray(1, 4, 5) should return [1, 4, 5]
// toArray(8, 9, 10) should return [8, 9, 10]

console.log('#5');

var toArray = function(number) {
	if(number < 6){
	return [1,4,5]
}
else {
	return [8,9,10];
}
}

console.log(toArray(4));
console.log(toArray(7));



// Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
// startsWithA('aardvark') should return true
// startsWithA('bear') should return false


console.log('#6');

first cahnges




















