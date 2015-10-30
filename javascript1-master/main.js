// alert('Hello Boulder!');


// exercise JS1
// var personName = prompt("Enter your name");
// alert("Hello " + personName);



// exercise loop practice #1
console.log("number 1:");
// #1
for(var i = 0; i<600; i+=100) {
	console.log(i);
}

// #1 alt
// for(var i=0; i<6; i++) {
// 	console.log(i + "00")
// }

console.log("number 2:");
// #2
for(var i = 1; i <= 64; i *= 2) {
	console.log(i);
}
console.log("number 3:");
// #3
for(var i = 1; i <= 3; i++) {
	for(var j = 1; j <= 3; j++) {
		console.log(i,' ',j);
	}
}
// make note of the nested loop working as var j the ' ' 
// works to show separation between the 2 variables

// the way I had it written before I got help was 
// for(var i = 1; i <= 3 i++) {
// 	console.log(i);
// 	console.log(i);
// 	console.log(i);
// }

// anytime I'm writing things more than once I need to think 
// about how to write it better


console.log("number 4:");
// #4
for(var i = 0; i <= 10; i += 2) {
	console.log(i);
}

console.log("number 5:");
// #5
for(var i = 3; i <= 15; i += 3) {
	console.log(i);
}


console.log("number 6:");
// #6
for(var i = 9; i >= 0; i--) {
	console.log(i);
}

console.log("number 7:");
// #7
for(var i = 0; i < 3; i++) {
	for(var j = 0; j <= 3; j++) {
		console.log(j);
	}
}

// I hadn't set the correct index # on var i. 
// Had it set as:

// for(var i = 0; i <= 3; i++) {
// 	for(var j = 0; j <= 3; j++) {
// 		console.log(j);
// 	}
// }

// changed to i < 3


























