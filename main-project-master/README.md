PROJECT OUTLINE:

- Objective 1 (Midterm): to make an interactive musical instrument using javascript, css, html, jquery. Have it track data and spit it into a graphical representation of how the user interacts witht the device.
- Objective 2 (Final): To fully integrate the user profile with backend technologies so the user can save and monitor their data for future use


MIDTERM OUTLINE:

////// HTML //////
- adding necessary elements and images to the page
- use jquery to add to the page when needed



////// CSS //////
- styling the elements
- hexagonal blocks - not sure how I'd to anmiate the colors on the mouse over effect
- basic quadrants
- hexagons in the quadrants
- key frame animations
- 


////// JQUERY ///////
- interactive functionality
- mouseenter and mouseleave tracking
- color changing focus and blur effects on the event of hover or click
* somesort of mouse animation that traces their motions 
- click event tracking along x y coordinates 
- DOM creation of the user generated data sets (graphs, data entry sets per date )
- 



///////   JAVASCRIPT //////
- functions to track to the data being tracked by the mouse handler
- linking to the wad
- using the sqaures as the pad for each quadrant and the hexagons as the notes of the mode
- stylizing the sounds from the library
- charting the %'s of time spent on each part of the instrument
- displaying the data in the profile section
- object oriented approach





////// SECTIONS: //////

1. Splash entry point - meeting them where they're at
- user is prompted to click on a spectrum of colors that correspond to emmotional state at that point in time. 
- Links to profile page and an about section.
- 

2. Instrument - user drags around the instrument for a set amount of time then is prompted their emotional state upon completion of the instrument section.
- timer - they can do it for a s long as they want
- 

3. Profile - displays charts of the data the user has created. links to various other sections of the application
- high charts or D3 or charts.js

4. Goal Tracker - based on relational frame theory
- included on profile page 
- uses propmted data to build the 


////// USER EXPERIENCE (SEQUENCE) //////

1. Entry Splash Page 
- link to profile and about page
- prompt to enter initial data point - emotional state
- prompt to enter a personal goal they are working towards
- link to go directly to the instrument

2. Instrument
- user interacts with instrument
- each quadrant plays the sound while they are active in that quadrant
- each button plays a tone over the sound for that quadrant
- each click event creates a data point that can be graphed
- each section corresponds to an emotional state


- user selects to exit the instrument

3. Exit Splash Page
- includes link to go directly to profile
- prompt to enter how they feel
- prompt to enter something that holds them back from their goals (dropdown or text)
- 

4. PROFILE
- displays graph of the current session
- displays link to graph of their average behavior overall
- displays link to play their last session
- displays link to their track overall
- displays most recent arrival emotional state
- displays most recent exit emotional state
- ranking for things that help the most and goals


| _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
| _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 | 
| _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
| _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 | 
| _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ | _ _ _ _ _ _ _ _ |



- notes in F#9 chord

  F# A# C# E G#

- notes in F# Ionian

  F# G# A# B C# D# E#

- notes in F# Dorian

  F# G# A# B C# D# E

- notes in F# Natural Minor

  F# G# A B C# D E

- notes in F# mixolydian

  F# G# A# B C# D# E 

- notes in F# lydian

  F# G# A# B# C# D# E#

- notes in F# phrygian

  F# G A B C# D E 

- notes in F# locrian

  F# G A B C D E



plink music game - example of how they use a grid to trigger their audio files (.oop)

.mp3 works on all browsers

- might want to use modes based on the quadrant root note



 _ _
/   \
\_ _/

////// PHASE 1 SCOPE //////





////// INSTRUMENT FUNCTIONALITY //////

- mouseover and hover events doesn't work on mobile

- quadrants have unique id's

- when it's clicked or tapped including the buttons within it - check if it's active quadrant

- if active do nothing else set the quadrant to the active quadrant, stop the old file, play the new file

- .on'click'{ if (this) }

- quadrant has class > attach click event to each quadrant that way it's the same click event attached to all 4

- only need 1 click event

- will appply to all elements with that class

- each quadrant has a unique id attribute

- that id is what I use to keep track of the active quadrant and check to see if the currently clicked quadrant is active or not

- click eveents for all individual note buttons - hex buttons

- give hexbtns a common class that is used to play the audio file

- give each note-btn needs own unique data attribute

- custom data attributes in jQuery

- pseudo code <div class='note-btn' data-note='C#.mp3'>

- notes should start on the click event but gradually begin to decrease in volume 

- automatic transitional fade out when user clicks on the next note button

- pseudo code $('hex-btn').on('click', function(){
  var $el = $(this);
  $el.data('note') -----> 'C#.mp3' 
});

- pseudo code - webaudio.play($el.data('note')) - says this is the file to play

- string concat file system traversal

- pseudo code webAudio.play('/public/music/' + $(this).data('note'));



/////// Notes with Chris //////


media player js

howler js - http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library
http://www.javascriptoo.com/howler-js

every click record time of the time push into array that says what note they clicked and time it was clicked at

set timeout

if i know what time it was I can know the duration of the wait

taking current item and subr=tracting from the start note

get notes to play

get array of recorded points

get array to fill up

then special call to play back the array

class that defines the note which is toime and note

also hava a class for track which has the array of notes and the date and time the track was started

also mood and goal which will be part of the track






////// CHARTING AND TRACKING DATA //////

- tracking the user click events

- quadrants and buttons

- tracking can inside the buttons

- might want to time stamp the click event - momentjs - powerful and easy to use

- pushing to an array or an object 

- use functions to extract my data points for the graphing







////// ABOUT / SIGNIFICANCE //////

- key that relates the notes in the mode/ color/ to the emotional state

- relate the tones in the modes to moods/ emotions

- Let the user know what this is all about and what they are trying to accompish by interacting with this instrument

- explain what modes are and why they matter to the context of the chord they are active on at given point in time (how the notes relate to the chord)

- explain that the data collected is merely representation of their intuitive styling and by ne means is a concrete representation of their emotional well being

- The data generated during interaction with the instrument is useful to gain an understanding of the inuitive nature of their musical selections. 

- By using the relational synth you are beginning to associate tones and colors with emotional states. The user is generating data that they can go back to and see what they were thinking and feeling and have an abstraction of their frame of mind at that point in time

- Bottom half are minor modes signifying melancholy top half is major modes signifying joyousness








////// WISH LIST //////
- ability to change the key of each quadrant (based on an actual chord not just anything)
- ability to change mode of each mode over each quadrant
- ability to share on social networks
- private or public setting
- create beats and integrate them weit their sessions
- user has the ability to choose the color and meaning of each quadrant
- hexagonal note buttons - http://jtauber.github.io/articles/css-hexagon.html




////// TUESDAY 2/10 //////

- Main Page
  - show and hide different sections

- Home Page
  X - mood entry point 
  - click event tracker print to array
  X - goal statement 
  - print goal statement to array
  X - link to profile section
  X - link to about section

- Event handler for click on screen
 
  X - log timestamped events
  - uses the timestamped events data for the playback sequence
  - push click event coordinates data, entered user data ( mood, goal, exit mood, roadblocks) to instance array

- Profile Array
  - each entry point entered into profile array
  - needs to be accessable by other arrays
  - needs data set for each 

X - home page entry fields

- profile display sections
  - set up chart display area
  - set up 

- Sounds for instrument (at home)
  - start with general pad sounds (F#9, A#, C#, G#)
  - modes based on root major(ionian, lydian) minor(nat minor, dorian)

- 

AFTERNOON LIST
X - add mood boxes to the mood chooser (colored divs with words)
X - add submit button to the goal ( bootstrap )
X - set click handler for the mood chooser
X - click handler for the mood divs





BASIC EMOTIONS
Happy: Fulfilled, Contented, Glad, Complete, Satisfied, Optimistic, Pleased
Excited: Ecstatic, Energetic, Aroused, Bouncy, Nervous, Perky, Antsy
Tender: Intimate, Loving, Warm-Hearted, Symapathetic, Touched, Kind, Soft
Scared: Tense, Nervous, Anxious, Jittery, Frightened, Panic-Stricken, Terrified
Angry: Iritated, Resentful, Miffed, Upset, Mad, Furious, Raging
Sad: Down, Blue, Mopey, Grieved, Dejected, Depressed, Heartbroken

Expanded Emotions:
Ecstacy > joy > serenity
 /// Love
Admiration > trust > acceptance
 /// submission
terror > fear > apprehension
 /// awe
amazement > surprise > distraction
 /// disapproval
grief > sadness > pensiveness
 /// remorse
loathing > disgust > boredom
 /// contempt
rage > anger > annoyance
 /// aggressiveness
vigilance > anticipation > interest 
 /// optimism 

based on this image: http://en.wikipedia.org/wiki/Emotion#mediaviewer/File:Plutchik-wheel.svg




//////// Wednesday 2/11 To Do //////

X - add exit mood and roadblocks after exiting the instrument sequence
- begin object oriented approach for my user profile data sets
X - add audio to note buttons
X - add audio on hover
X - track specific audio clicks
- add specific audio clicks to array of objects
- create OOP classes and functions



python -m SimpleHTTPServer

localhost:8000
going to localhost will look for index.html
it just finds index.html so if that doesn't exist it won't find it




http://www.keybr.com/#!game

https://typing.io/lesson/javascript/jquery/traversing.js/1


/////// Saturday 2/21 To Do /////////

- add words to quads - Goals, values, shadow, destructive
- add new dropdown menus
- change colors of mood buttons
- change to "what are you thinking about now"
- add button to login
- start styling the profile
- start defining functions for data points
  - area of most time spent
  - length of session
  - frequency of clicks
  - willingness to participate
- mobile first display stuff  


Stuff I need to Do to Finish:
- begin to move to individual pages in jade
- begin to migration to node
- User data structure
- user roles: therapist > client, basic user
- intervals of clisk times to define the frequency
- timers
- track the clicks
- functions for score - handle the events that I already have set up add to a number that I instatiate in the beginning. whatever button I'm using i can access through each different button event and then add that to my object
- user login authentications - passportjs.org
- begin transfer to node and mongo
  - no idea on how I do this
- begin mobile first approach with PhoneGap and start to come up with ideas on how usability works on a phone
- set up model view controller structure in order to keep track of what goes where
















































