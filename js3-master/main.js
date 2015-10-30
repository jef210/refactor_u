//  PHONE NUMBER

// var phoneNumber = prompt("Enter your phone number with dashes below. Don't worry we won't spam you.");
// var validDash = (phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-");
// if(validDash) {
// 	alert("Great Job!");
// }
// else {
// 	alert("Why didn't you follow directions?");
// }


// BIRTHDAY

// var bDay = prompt("Enter your birthday with slashes below");
// var validSlash = (bDay.charAt(2) === "/" && bDay.charAt(5) === "/");
// if(validSlash) {
// 	alert("Great Joerb!");
// }
// else {
// 	alert("Hey C'mon!");
// }



// POSTAL CODE

// var postCode = prompt("Enter your Postal Code below. Acceptable formats are: XXXXX or XXXXX-XXXX");
// var validPostCode = (postCode.length === 5 || postCode.length === 10 && postCode.charAt(5));
// if(validPostCode) {
// 	alert("You're so rad for following directions!");
// }
// else {
// 	alert("Why you no do what I tell you to do? Why I ask?");
// }




// STATE ABBREVIATION

// var stateCode = prompt("Enter your 2 letter state abbreviation.");
// stateCode = stateCode.toUpperCase();
// var isNumber = function(n) {
//  return !isNaN(parseFloat(n)) && isFinite(n);
// };
// var validStateCode = (stateCode.length === 2 && !isNumber(stateCode));
// if(validStateCode) {
// 	alert("Total!")
// }
// else {
// 	alert("Fail!")
// }
// console.log(stateCode);

// Notes 
// stateCode = stateCode.toUpperCase(); - needed to be included because I hadn't told it that stateCode needed to be updated to toUpperCase
// checking if it is a number I needed to add the !isNumber to the validation to invert it to check for it being a letter not a number.



// MARRIED

var married = prompt("Are you married? Yes or No");
if (married.toUpperCase() === "YES"){
	alert("Congrats!");
}
else {
	alert("Alrighty then");
}
console.log(married);

// Notes
// I had some syntax problems with the first if statement
// by changing the variable to uppercase if eliminates the need to check for the other conditions of capitalization












