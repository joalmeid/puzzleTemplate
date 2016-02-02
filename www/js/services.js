angular.module('starter.services', [])

.factory('Images', function() {
  var images = [{
    id: 0,
    name: 'Taj Mahal',
    lastText: 'The Taj Mahal of Agra, India. I have been there!',
    face: 'img/taj.jpg'
  }, {
    id: 1,
    name: 'Opera House',
    lastText: 'The magnificent opera house in Sydney, Australia',
    face: 'img/sydney.jpg'
  }, {
    id: 2,
    name: 'Space Needle',
    lastText: 'The towering space needle in Seattle, USA',
    face: 'img/space.jpg'
  }, {
    id: 3,
    name: 'Egyptian Pyramids',
    lastText: 'Look at the grand pyramids of Egypt',
    face: 'img/pyramids.jpg'
  }, {
    id: 4,
    name: 'Eiffel Tower',
    lastText: 'The spectacular eiffel tower in Paris, France',
    face: 'img/eiffel.jpg'
  }];

  return {
    all: function() {
      return images;
    },
    remove: function(image) {
      images.splice(images.indexOf(image), 1);
    },
    get: function(imageId) {
      for (var i = 0; i < images.length; i++) {
        if (images[i].id === parseInt(imageId)) {
          return images[i];
        }
      }
      return null;
    }
  };
});
