Meteor.subscribe('images');
Meteor.subscribe('notes');

// Will change screen orientation as you rotate the screen
// screen.unlockOrientation();

  Template.notepad.helpers({
    notes: function(){
      return Notes.find({}, {sort: {time: -1}});
    }
  });

  Template.notepad.events({

    'change #note-input': function(e){
      var text = e.target.value;
      var newNote = Notes.insert({
        text: text,
        time: new Date()
      });

      $('#note-input').val('')

      navigator.geolocation.getCurrentPosition(function(success){
        Notes.update(newNote, { $set: {
          lat: success.coords.latitude,
          lng: success.coords.longitude
        }});


      });
    }

  });

  Template.note.helpers({
    moment: function(){
      return moment(this.time).fromNow()
    }
  });

  Template.note.events({

    'click .getPicture': function () {
      var note = this;
      MeteorCamera.getPicture(function(err, res){
        if(!err){
          var newImage = new FS.File(res)
          newImage.metadata = {imageId: this._id}
          newImage.once('uploaded', function(){
            setTimeout(function(){
              Notes.update(note._id, { $set: {
                picture: newImage.url()
              }})
            }, 1000);
          })
          Images.insert(newImage)
        }
      });
    },

    'click .getLocation': function (e) {
      var text = this.text;
      var location = {
        lat: this.lat,
        lng: this.lng
      };
      maps.addMarker(location, text);
    },

    'click .tts': function(e){

      tts.speak(this.text);
    },
    'click .delete': function(){

      Notes.remove(this._id);

      var imageId = Images.findOne({metadata: {imageId: this._id}})
      if (imageId) {
        Images.remove(imageId._id);
      };
    }
    


  
  });

Template.email.events({
    'click .email': function(){
      console.log(document.getElementById('emailInput').value);
      Meteor.call('sendEmail', this.emailInput);
      $('#emailInput').val('');
    }

  });