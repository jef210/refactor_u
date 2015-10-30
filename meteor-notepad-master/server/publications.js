Meteor.publish('notes', function() {
  return Notes.find();
});

Meteor.publish('images', function() {
  return Images.find();
});