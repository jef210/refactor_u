var result = prompt("I pity the foo who don't enter somethin below!");
console.log(result);
alert("You entered: " + result + "\nThere are " + result.length + " characters in the word." + "\nThe third character is \'" + result.charAt(3) + "\'" + "\nLowercase: " + result.toLowerCase() + "\nUppercase: " + result.toUpperCase() + "\nExample: I try to always " + result + " before I jump the shark." + "\nSubword: " + result.slice(1,4));

// Notes
// * not a for loop
// \n will line break the string
// "\nThe third character is \'" + result.charAt(3) + "\'" - was how I got the single quotes 
// slice needed values (1,4) to work, I didn't have the index right at first