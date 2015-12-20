angular.module('starter.services', [])

.factory('Books', function($http) {

  return {
    all: function() {
      return $http.get('http://crud-api-mcd-1.herokuapp.com/books');
    },
    remove: function(id) {
      $http.delete('http://crud-api-mcd-1.herokuapp.com/books/' + id);
    },
    get: function(bookId) {
      for (var i = 0; i < books.length; i++) {
        if (books[i].id === parseInt(bookId)) {
          return books[i];
        }
      }
      return null;
    }
  };

})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'Did you get the pizza yet?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Yeah, but I got anchovies and pineapple.',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I\'d rather eat a shoe.',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Did you hear the one about the pizza?',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'No.',
    face: 'img/mike.png'
  }, {
    id: 5,
    name: 'Perry Governor',
    lastText: 'I probably shouldn\'t tell you, it\'s kind of cheesy.',
    face: 'img/perry.png'
  }, ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
