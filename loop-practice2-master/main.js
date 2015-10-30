// $(document).on('ready', function() {
  
// });

	// For each problem below, write a loop that prints the given output. Assume a global array called animals is defined  as follows:



console.log('#1');

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

for(var i = 1; i < animals.length; i++) {
	console.log(animals[i-1]);
};

// why doesn't this take the index at 0?

console.log('#2');

for(var i = 0; i<animals.length; i++) {
	if(i % 2 === 0){
	console.log(animals[i]);
	};
};

// I was trying this
// if(i%2 === 0){
// 		return false  --- it didn't work :p


console.log('#3');

for(var i = 5; i >= 0; i--){
	console.log(animals[i]);
};

// why is this returning undefined at index 0?

console.log('#4');

for(var i = 0; i < animals.length; i++) {
	

};

// having trouble with the logic on this one.
// how do i target the first and last strings in my array?
// also how do i double the results in the middle of the array while not affecting the first and last items