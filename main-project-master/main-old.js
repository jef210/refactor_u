// var UserSession = function(){

// };



// var noteClickTimer = new NoteSound();
// var padEnterTimer = new PadSound();
// var padLeaveTimer = new PadSoundStop();
// var userEnterMood = new EnterMood();
// var userExitMood = new ExitMood();
// var userEnterGoal = new UserGoal();
// var userExitRoadblock = new UserRoadblock;


// enter-mood, goal, noteclicks, pad-events, exit-mood, roadblock 
// find an example of OOP to start plugging into my function

                  ////// PAD SOUNDS //////

var fSharpMajorPad = new Howl({
  urls: ['pads/f_sharp_major_pad.mp3']
});

var cSharpMajorPad = new Howl({
  urls: ['pads/c_sharp_major_pad.mp3']
});

var cSharpMinorPad = new Howl({
  urls: ['pads/c_sharp_minor_pad.mp3']
});

var fSharpMinorPad = new Howl({
  urls: ['pads/f_sharp_minor_pad.mp3']
});




                  ////// NOTE SOUNDS //////

        /// TOP LEFT QUAD | F# MAJOR PAD | IONIAN MODE ///

var fSharpIonianNote = new Howl({
  urls: ['note_sounds_mp3/f_sharp_ionian.mp3']
});

var gSharpIonianNote = new Howl({
  urls: ['note_sounds_mp3/g_sharp_ionian.mp3']
});

var aSharpIonianNote = new Howl({
  urls: ['note_sounds_mp3/a_sharp_ionian.mp3']
});

var bIonianNote = new Howl({
  urls: ['note_sounds_mp3/b_ionian.mp3']
});

var cSharpIonianNote = new Howl({
  urls: ['note_sounds_mp3/c_sharp_ionian.mp3']
});

var dSharpIonianNote = new Howl({
  urls: ['note_sounds_mp3/d_sharp_ionian.mp3']
});

var fIonianNote = new Howl({
  urls: ['note_sounds_mp3/f_ionian.mp3']
});

var fSharpIonianNoteOct = new Howl({
  urls: ['note_sounds_mp3/f_sharp_ionian_oct.mp3']
});

var gSharpIonianNoteOct = new Howl({
  urls: ['note_sounds_mp3/g_sharp_ionian_oct.mp3']
});



        /// TOP RIGHT QUAD | C# MAJOR PAD | LYDIAN MODE ///

var cSharpLydianNote = new Howl({
  urls: ['note_sounds_mp3/c_sharp_lydian.mp3']
});

var dSharpLydianNote = new Howl({
  urls: ['note_sounds_mp3/d_sharp_lydian.mp3']
});

var fLydianNote = new Howl({
  urls: ['note_sounds_mp3/f_lydian.mp3']
});

var gLydianNote = new Howl({
  urls: ['note_sounds_mp3/g_lydian.mp3']
});

var gSharpLydianNote = new Howl({
  urls: ['note_sounds_mp3/g_sharp_lydian.mp3']
});

var aSharpLydianNote = new Howl({
  urls: ['note_sounds_mp3/a_sharp_lydian.mp3']
});

var cLydianNote = new Howl({
  urls: ['note_sounds_mp3/c_lydian.mp3']
});

var cSharpLydianNoteOct = new Howl({
  urls: ['note_sounds_mp3/c_sharp_lydian_oct.mp3']
});

var dSharpLydianNoteOct = new Howl({
  urls: ['note_sounds_mp3/d_sharp_lydian_oct.mp3']
});



        /// BOTTOM LEFT QUAD | C# MINOR PAD | AEOLIAN MODE ///

var cSharpAeolianNote = new Howl({
  urls: ['note_sounds_mp3/c_sharp_aeolian.mp3']
});

var dSharpAeolianNote = new Howl({
  urls: ['note_sounds_mp3/d_sharp_aeolian.mp3']
});

var eAeolianNote = new Howl({
  urls: ['note_sounds_mp3/e_aeolian.mp3']
});

var fSharpAeolianNote = new Howl({
  urls: ['note_sounds_mp3/f_sharp_aeolian.mp3']
});

var gSharpAeolianNote = new Howl({
  urls: ['note_sounds_mp3/g_sharp_aeolian.mp3']
});

var aAeolianNote = new Howl({
  urls: ['note_sounds_mp3/a_aeolian.mp3']
});

var bAeolianNote = new Howl({
  urls: ['note_sounds_mp3/b_aeolian.mp3']
});

var cSharpAeolianNoteOct = new Howl({
  urls: ['note_sounds_mp3/c_sharp_aeolian_oct.mp3']
});

var dSharpAeolianNoteOct = new Howl({
  urls: ['note_sounds_mp3/d_sharp_aeolian_oct.mp3']
});




      /// BOTTOM RIGHT QUAD | F# MINOR PAD | DORIAN MODE ///

var fSharpDorianNote = new Howl({
  urls: ['note_sounds_mp3/f_sharp_dorian.mp3']
});

var gSharpDorianNote = new Howl({
  urls: ['note_sounds_mp3/g_sharp_dorian.mp3']
});

var aDorianNote = new Howl({
  urls: ['note_sounds_mp3/a_dorian.mp3']
});

var bDorianNote = new Howl({
  urls: ['note_sounds_mp3/b_dorian.mp3']
});

var cSharpDorianNote = new Howl({
  urls: ['note_sounds_mp3/c_sharp_dorian.mp3']
});

var dSharpDorianNote = new Howl({
  urls: ['note_sounds_mp3/d_sharp_dorian.mp3']
});

var eDorianNote = new Howl({
  urls: ['note_sounds_mp3/e_dorian.mp3']
});

var fSharpDorianNoteOct= new Howl({
  urls: ['note_sounds_mp3/f_sharp_dorian_oct.mp3']
});

var gSharpDorianNoteOct = new Howl({
  urls: ['note_sounds_mp3/g_sharp_dorian_oct.mp3']
});


var noteClicks = [];
var mouseEnterPad = [];
var mouseLeavePad = [];




$(document).on('ready', function() {




// MOOD CHOOSER CLICK EVENT
$(".mood-chooser-entry-click-box").on('click', function(event){
  console.log('clicked on ', $(this));
  console.log(event);
});

// GOAL ENTRY BOX
$(".goal-entry-box").on('click', function(event){
  console.log('clicked on ', $(this));
  console.log(event);
});










// INSTRUMENT FUNCTIONALITY





////// PAD EVENTS //////


// TOP LEFT QUAD MOUSE ENTER EVENT
$(".top-left-quad").on('mouseenter', function(event){
  fSharpMajorPad.fadeIn( .7, 2000 );
  console.log('mouseentered ', $(this));
  console.log(event);
  mouseEnterPad.push($(this).attr('id'));
  console.log(mouseEnterPad ,' mouseEnterPad');
});

    // TOP LEFT QUAD MOUSE LEAVE EVENT
    $(".top-left-quad").on('mouseleave', function(event){
      fSharpMajorPad.fadeOut(0, 1100);
      console.log('mouseleave ', $(this));
      console.log(event);
      mouseLeavePad.push($(this).attr('id'));
      console.log(mouseLeavePad ,' mouseLeavePad');
    });

// TOP RIGHT MOUSE ENTER HOVER EVENT
$(".top-right-quad").on('mouseenter', function(event){
  cSharpMajorPad.fadeIn( .7, 2000 );
  console.log('mouseentered ', $(this));
  console.log(event);
  mouseEnterPad.push($(this).attr('id'));
  console.log(mouseEnterPad ,' mouseEnterPad');
});

    // TOP RIGHT QUAD MOUSE LEAVE EVENT
    $(".top-right-quad").on('mouseleave', function(event){
      cSharpMajorPad.fadeOut(0, 1100);
      console.log('mouseleave ', $(this));
      console.log(event);
      mouseLeavePad.push($(this).attr('id'));
      console.log(mouseLeavePad ,' mouseLeavePad');
    });

// BOTTOM LEFT QUAD MOUSE ENTER EVENT
$(".bottom-left-quad").on('mouseenter', function(event){
  cSharpMinorPad.fadeIn( .7, 2000 );
  console.log('mouseentered ', $(this));
  console.log(event);
  mouseEnterPad.push($(this).attr('id'));
  console.log(mouseEnterPad ,' mouseEnterPad');
});

    // BOTTOM LEFT QUAD MOUSE LEAVE EVENT
    $(".bottom-left-quad").on('mouseleave', function(event){
      cSharpMinorPad.fadeOut(0, 1100);
      console.log('mouseleave ', $(this));
      console.log(event);
      mouseLeavePad.push($(this).attr('id'));
      console.log(mouseLeavePad ,' mouseLeavePad');
    });

// BOTTTOM RIGHT QUAD MOUSE ENTER EVENT
$(".bottom-right-quad").on('mouseenter', function(event){
  fSharpMinorPad.fadeIn( .7, 2000 );
  console.log('mouseentered ', $(this));
  console.log(event);
  mouseEnterPad.push($(this).attr('id'));
  console.log(mouseEnterPad ,' mouseEnterPad');
});

    // BOTTOM RIGHT QUAD MOUSE LEAVE EVENT
    $(".bottom-right-quad").on('mouseleave', function(event){
      fSharpMinorPad.fadeOut(0, 1100);
      console.log('mouseleave ', $(this));
      console.log(event);
      mouseLeavePad.push($(this).attr('id'));
      console.log(mouseLeavePad ,' mouseLeavePad');
    });


              ////// NOTES EVENTS //////

            /// NOTE BUTTON CLICK EVENT ///
$(".note-btn").on('click', function(event){
  console.log('clicked on ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

        /// TOP LEFT QUAD NOTES | F# IONIAN ///

// A#
$("#0").on('mousedown', function(event){
  aSharpIonianNote.fadeIn(.15, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

$("#0").on('mouseup', function(event){
  aSharpIonianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// G#
$("#1").on('mousedown', function(event){
  gSharpIonianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

$("#1").on('mouseup', function(event){
  gSharpIonianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// C#
$("#2").on('mousedown', function(event){
  cSharpIonianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

$("#2").on('mouseup', function(event){
  cSharpIonianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// D#
$("#3").on('mousedown', function(event){
  dSharpIonianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

$("#3").on('mouseup', function(event){
  dSharpIonianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// F#
$("#4").on('mousedown', function(event){
  fSharpIonianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

$("#4").on('mouseup', function(event){
  fSharpIonianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// B 
$("#5").on('mousedown', function(event){
  bIonianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

$("#5").on('mouseup', function(event){
  bIonianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// F
$("#6").on('mousedown', function(event){
  fIonianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

$("#6").on('mouseup', function(event){
  fIonianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// G# oct
$("#7").on('mousedown', function(event){
  gSharpIonianNoteOct.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

$("#7").on('mouseup', function(event){
  gSharpIonianNoteOct.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// F# Oct
$("#8").on('mousedown', function(event){
  fSharpIonianNoteOct.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

$("#8").on('mouseup', function(event){
  fSharpIonianNoteOct.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

            /// TOP RIGHT QUAD | C# LYDIAN ///

// C# Oct
$("#9").on('mousedown', function(event){
  cSharpLydianNoteOct.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#9").on('mouseup', function(event){
  cSharpLydianNoteOct.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// G#
$("#10").on('mousedown', function(event){
  gSharpLydianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

$("#10").on('mouseup', function(event){
  gSharpLydianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// D# Oct
$("#11").on('mousedown', function(event){
  dSharpLydianNoteOct.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#11").on('mouseup', function(event){
  dSharpLydianNoteOct.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// C#
$("#12").on('mousedown', function(event){
  cSharpLydianNote.fadeIn(.7, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#12").on('mouseup', function(event){
  cSharpLydianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// D#
$("#13").on('mousedown', function(event){
  dSharpLydianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#13").on('mouseup', function(event){
  dSharpLydianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// F
$("#14").on('mousedown', function(event){
  fLydianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#14").on('mouseup', function(event){
  fLydianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// G
$("#15").on('mousedown', function(event){
  gLydianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#15").on('mouseup', function(event){
  gLydianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// A#
$("#16").on('mousedown', function(event){
  aSharpLydianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#16").on('mouseup', function(event){
  aSharpLydianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// C
$("#17").on('mousedown', function(event){
  gLydianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#17").on('mouseup', function(event){
  gLydianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});





          /// BOTTOM LEFT QUAD | C# AEOLIAN ///
// C# Oct
$("#18").on('mousedown', function(event){
  cSharpAeolianNoteOct.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#18").on('mouseup', function(event){
  cSharpAeolianNoteOct.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// F#
$("#19").on('mousedown', function(event){
  fSharpAeolianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#19").on('mouseup', function(event){
  fSharpAeolianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// D# Oct
$("#20").on('mousedown', function(event){
  cSharpAeolianNoteOct.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#20").on('mouseup', function(event){
  cSharpAeolianNoteOct.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// D#
$("#21").on('mousedown', function(event){
  dSharpAeolianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#21").on('mouseup', function(event){
  dSharpAeolianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// C#
$("#22").on('mousedown', function(event){
  cSharpAeolianNote.fadeIn(.7, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#22").on('mouseup', function(event){
  cSharpAeolianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// E
$("#23").on('mousedown', function(event){
  eAeolianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#23").on('mouseup', function(event){
  eAeolianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// G#
$("#24").on('mousedown', function(event){
  gSharpAeolianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#24").on('mouseup', function(event){
  gSharpAeolianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// A
$("#25").on('mousedown', function(event){
  aAeolianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#25").on('mouseup', function(event){
  aAeolianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// B
$("#26").on('mousedown', function(event){
  bAeolianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#26").on('mouseup', function(event){
  bAeolianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});




          /// BOTTOM RIGHT QUAD | F# DORIAN ///

// F# Oct
$("#27").on('mousedown', function(event){
  fSharpDorianNoteOct.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#27").on('mouseup', function(event){
  fSharpDorianNoteOct.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// B
$("#28").on('mousedown', function(event){
  bDorianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#28").on('mouseup', function(event){
  bDorianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// G# Oct
$("#29").on('mousedown', function(event){
  gSharpDorianNoteOct.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#29").on('mouseup', function(event){
  gSharpDorianNoteOct.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// A
$("#30").on('mousedown', function(event){
  aDorianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#30").on('mouseup', function(event){
  aDorianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// F#
$("#31").on('mousedown', function(event){
  fSharpDorianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#31").on('mouseup', function(event){
  fSharpDorianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
// C#
$("#32").on('mousedown', function(event){
  cSharpDorianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#32").on('mouseup', function(event){
  cSharpDorianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// D#
$("#33").on('mousedown', function(event){
  dSharpDorianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#33").on('mouseup', function(event){
  dSharpDorianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// E
$("#34").on('mousedown', function(event){
  eDorianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#34").on('mouseup', function(event){
  eDorianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});

// G#
$("#35").on('mousedown', function(event){
  gSharpDorianNote.fadeIn(.2, 200);
  console.log('mousedown ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});
$("#35").on('mouseup', function(event){
  gSharpDorianNote.fadeOut(0, 750);
  console.log('mouseup ', $(this));
  console.log(event);
  noteClicks.push($(this).attr('id'));
  console.log(noteClicks ,' note clicks');
});



  
});


// functions
// push click events to array
// push user data to array

// timeout stuff
// setTimeout(function() {}, 10);


// media player js

// howler js - http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library
// http://www.javascriptoo.com/howler-js

// every click record time of the time push into array that says what note they clicked and time it was clicked at

// set timeout

// if i know what time it was I can know the duration of the wait

// taking current item and subr=tracting from the start note

// get notes to play

// get array of recorded points

// get array to fill up

// then special call to play back the array

// class that defines the note which is toime and note

// also hava a class for track which has the array of notes and the date and time the track was started

// also mood and goal which will be part of the track