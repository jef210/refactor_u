// class/constructor
var Scale = function (name, note){
  this.name = name;
  this.note = note;
  this.notes = [];
};

Scale.prototype.render = function(){
  var padQuad =  $("<div>")
    .addClass("col-xs-6 scale")
    .append("<h1> " + this.name + " </h1>");
    console.log(this.name);
  return padQuad;
};




// class/constructor
var Note = function (note, volume){
  this.note = note;
  // passing default volume
  this.volume = volume || 0.2;
};



var Track = function(){
  this.notes = [];
};

Track.prototype.addNote = function ()



// instances
var dorian = new Scale ('dorian', 'f_sharp_minor_pad.mp3' );
var lydian = new Scale ('lydian', 'c_sharp_major_pad.mp3');
var aeolian = new Scale ('aeolian', 'c_sharp_minor_pad.mp3');
var ionian = new Scale ('ionian', 'f_sharp_major_pad.mp3');
// instances
var note_a = new Note ('a_aeolian.mp3');
var note_b = new Note ('b_aeolian.mp3', 1);

// adding instances to notes property of scale instance
dorian.notes.push(note_a, note_b)

console.log(dorian);

// instances
var note_c = new Note ('c_lydian.mp3');
var note_f = new Note ('f_lydian.mp3');

lydian.notes.push(note_c, note_f);

console.log(lydian);


$(".instrument-container").append(ionian.render());

$(".instrument-container").append(lydian.render());

$(".instrument-container").append(aeolian.render());

$(".instrument-container").append(dorian.render());