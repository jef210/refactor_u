// Write a program that takes a color and returns the luminosity of that color using the following formula: luminosity = 0.2126*r + 0.7152*g + 0.0722*b

// $ node luminosity.js 255 239 213
// // 240.52439999999999
// $ node luminosity.js 50 15 25
// // 23.163


// Part I a.
// var lumNum = function(r, g, b){
//   return 0.2126 * r + 0.7152 * g + 0.0722 * b;
// };

// console.log(lumNum(process.argv[2], process.argv[3], process.argv[4]));


// Part I b.
var lumNumLight = function(r, g, b){
var lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
if(lum > 155){
  console.log('light');
}
else {console.log('dark')}
};

lumNumLight();



// Part II

// var colorUtil = require('./colorutil.js');



// console.log(colorUtil.luminosity(process.argv[2], process.argv[3], process.argv[4]));











