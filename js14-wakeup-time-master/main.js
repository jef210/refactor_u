$(document).on('ready', function() {
  
  var outerShell = $('<div class="outer-shell"></div>');
  var innerShell = $('<div class="inner-shell"></div>');
  var leftAmPm = $('<div class="left-am-pm"><h2>pm</h2></div>');
  var clockScreen = $('<div class="clock-screen"></div>');
  var clockText = $('<div class="clock-text"><p>02:10</p></div>');
  var radioBar = $('<div class="radio-bar"></div>');
  var amFreq = $('<div class="am-freq"><ul class="horizontal-list"><li>am</li><li>53</li><li>60</li><li>70</li><li>90</li><li>110</li><li>140</li><li>170</li></ul></div>');
  var fmFreq = $('<div class="fm-freq"><ul class="horizontal-list"><li>fm</li><li>88</li><li>92</li><li>96</li><li>102</li><li>106</li><li>108</li></ul></div>');





clockScreen.append(clockText);
innerShell.append(clockScreen);
radioBar.append(amFreq);
radioBar.append(fmFreq);
innerShell.append(radioBar);
innerShell.append(leftAmPm);
outerShell.append(innerShell);
$('body').append(outerShell);

});