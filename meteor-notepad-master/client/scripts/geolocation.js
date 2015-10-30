// Template.map.helpers({
//   location: function(){
//     return Geolocation.latLng() || {lat: 0, lng: 0}; 
//   },
//   error: Geolocation.error
// });

maps = {

  map: null,

  initialize: function() {
          var mapOptions = {
              zoom: 12,
              center: new google.maps.LatLng(40.016971, -105.220098)
          };
   
          this.map = new google.maps.Map(
              document.getElementById('mapcanvas'),
              mapOptions
          );
   
          // global flag saying we intialized already
          Session.set('map', true);
      },

  addMarker: function(location, title) {
    var marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: title,
      icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'      
    });
    // console.log("Added marker");
    return marker;
  }

};

Template.map.rendered = function() {
  if (!Session.get('map')) {
    maps.initialize();
  }
};



