// // Create a Javascript application (A Javascript-driven web page. Just set up your basic HTML and a script tag that will run your script on page load.) that allows the user to match people in need with volunteers during a disaster relief effort.
// 1
// First prompt the user to ask how many disaster victims they wish to enter.
// done

// 2
// For each disaster victim that will be added, 
// prompt the user to enter their name, 
// phone number, 
// and street. 
// You don't need to validate the information. 
// Add each newly entered user to three arrays, one for each piece of information, using array.push.

// // 2a
// // Think! How will you know how many times to prompt the user for a name/phone/street? How can you make this dynamic so that it works for any number of people?


// // 3
// // Repeat steps 1 and 2, but this time you are asking for volunteers. You'll need a separate set of arrays.

// 3a
// Note: There is an easier way to store this info than in 3 separate arrays for each set of people. We'll learn how to do that when we cover objects. Bonus: Implement this exercise using only 2 total arrays of objects.


// 4
// At the end, print out, in a single alert, the number of persons in need, the number of volunteers, and a list of all persons in need and all volunteers. You may format this in any way that looks reasonable.

var victimNum = prompt("How many people have been affected by this disaster?");


var victimData = [ ]

for(i = 0; i < victimNum; i++){
  var newVictim = { };
  newVictim.victimName = prompt("Enter your name");
  newVictim.vicPhoneNum = prompt("Please enter your phone number");
  newVictim.vicAddress = prompt("Please enter your address"); 
  victimData.push(newVictim); 
  console.log(i, victimData)
}
// console.log(victimData)

var volunteerNum = prompt("How many volunteers should we expect?");


var volunteerData = [ ]
for(i = 0; i < volunteerNum; i++){
  var newVolunteer = { }; 
  // this creates an empty object in my loop
  newVolunteer.volunteerName = prompt("Volunteers enter your name");
  newVolunteer.volPhoneNum = prompt("Please enter your phone number");
  newVolunteer.volAddress = prompt("Please enter your address"); 
  volunteerData.push(newVolunteer); 
  // this pushes it to my array
}

// victim.length gets the number of objects in the array

var print = "number of victims: " + victimData.length + "\nNames:" 
for(var i = 0; i<victimData.length; i++){
  // print += victimData[i].victimName + ", "
  if(i === victimData.length-1){
     print += victimData[i].victimName;`
     console.log("no comma", victimData[i].victimName);
  }
  else{
     print += victimData[i].victimName + ", ";
    console.log("with comma");
  }
}

// I can add to the string

print += "\nnumber of volunteers: " + volunteerData.length + "\nNames: "

for(var i = 0; i<volunteerData.length; i++){
   if(i === volunteerData.length-1){
     print += volunteerData[i].volunteerName;
     console.log("no comma");
  }
  else{
     print += volunteerData[i].volunteerName + ", ";
    console.log("with comma");
  }

}






alert(print)


// Read up on:
// dot notation - object.key 
// bracket notation - object['key'] & object[variable]
// for loops with blank objects
// arrays and pushing 
// data organization


// var victimNum = prompt("How many people have been affected by this disaster?");

// EXAMPLE WITH CHRIS

 // var data = [
 //   {
 //    name: 'Jeff',
 //     color: 'green'
 //   },
 //   {
 //     name: 'Chris',
 //     color: 'blue'
 //   }
 // ];

 // // data[1].name
 // // data[0].color


 // // GOAL: Jeff (green), Chris (blue),
 // var currentOutput = "";
 // for (var i = 0; i < data.length; i++) {
 //   // console.log(data[i].name);
 //   currentOutput += data[i].name + " (" + data[i].color + "), ";
 //   console.log(currentOutput);
 // }

 // console.log(currentOutput);



































