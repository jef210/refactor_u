// Requirements
// For each problem below, write a loop that prints the given output. Some of the problems will require you to write an if statement in the loop. Assume a global array called students is defined as follows:

var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];


// For example:

// Problem:


// Liz
// Meghan
// Trent
// Chelsea
// Amir

// example:
// for(var i=0; i<students.length; i++) {
//  console.log(students[i].name);
// }

console.log('#1');

for(var i = 0; i < students.length; i++) {
	console.log(students[i].age);
};

console.log('#2');

for(var i = 0; i < students.length; i++) {
	console.log(students[i].name + ', ' + students[i].city);
};

console.log('#3');
for(var i = 0; i < students.length; i++){
	if(students[i].city === 'Boulder'){
		console.log(students[i].name + ' is from ' + students[i].city);
	}
};

console.log('#4');

for (var i = 0; i < students.length; i++) {
	if (students[i].age > 25) {
		console.log(students[i].name + ' is older than 25')
	};
};




// $(document).on('ready', function() {
  
// });