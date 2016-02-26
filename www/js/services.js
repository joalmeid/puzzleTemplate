angular.module('starter.services', [])

.factory('Images', function() {
  var images = [{
    id: 0,
    name: 'Angry Admin',
    lastText: 'Your real job admin isn’t paid to take messages, schedule meetings, or perform any clerical work for your side gig.  Therefore, it is just plain wrong to expect them to do any of those things.',
    face: 'img/oreilly_admin.jpg'
  }, {
    id: 1,
    name: 'Web Development with Assembly',
    lastText: 'What about ASM.js? :)',
    face: 'img/oreilly_asm.png'
  }, {
    id: 2,
    name: 'Killer Game Programming',
    lastText: 'The art of good game development, all inside a single book. Viral?',
    face: 'img/oreilly_cat.gif'
  }, {
    id: 3,
    name: 'Coding Drunk',
    lastText: 'Coding drunk is yet to be tested taking into account all the profit of working with a disinhibited mind.',
    face: 'img/oreilly_drunkcode.jpg'
  }, {
    id: 4,
    name: 'Ursine Living',
    lastText: 'Help the Hirsute Home.',
    face: 'img/oreilly_isnoop_bear.jpg'
  }, {
    id: 5,
    name: 'LOL Code',
    lastText: 'The comprehensive guide: Includes updated GIMMEH scripts and CAN HAS samples.',
    face: 'img/oreilly_lolcode.jpg'
  }, {
    id: 6,
    name: 'Pointless Meetings',
    lastText: 'How to survice all the pointless meetings.',
    face: 'img/oreilly_meetings.jpg'
  }, {
    id: 7,
    name: 'Oh Fuck',
    lastText: 'Oh Fuck : The acid is kicking in! Jesus Christ the walls are melting.',
    face: 'img/oreilly_ohfuck.jpg'
  }, {
    id: 8,
    name: 'Javascript for the Millenials',
    lastText: 'I heard react is good...',
    face: 'img/oreilly_react.png'
  }, {
    id: 9,
    name: 'Beggining Regular Expressions',
    lastText: 'Love the intringing face of a RegExp expert. How can someone draft a smile at this topic?',
    face: 'img/oreilly_regexp.png'
  }, {
    id: 10,
    name: 'Windows Vista Annoyances',
    lastText: 'This book was probably an all 24 chapter volume with tips and tricks.',
    face: 'img/oreilly_vista.gif'
  }];

  return {
    all: function() {
      return images;
    },
    remove: function(image) {
      images.splice(images.indexOf(image), 1);
    },
    add: function(image) {
        images.push(image);
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
