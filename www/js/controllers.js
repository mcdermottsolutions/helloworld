angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Books) {

  Books.all().success(function(data){
    $scope.books = data;
  });

  $scope.reset = function(array,index,id) {
    Books.reset();
    Books.all().success(function(data){
      $scope.books = data;
    });
  };

  $scope.delete = function(array,index,id) {
    Books.remove(id);
    array.splice(index, 1);
  };

  $scope.add = function(inputs) {
    var title = inputs.title;
    var author = inputs.author;

    var addPromise = Books.add(title,author);
    addPromise.then(function(){
      Books.all().success(function(data){
        $scope.books = data;
        inputs.title = "";
        inputs.author = "";
      });
    });

    // Books.add(title,author);

    // addPromise.then(function(id){
    //   console.log(id);
    // });

    // addPromise.then(function(){
    //   console.log('after');
    // });

    // Books.all().success(function(data){
    //   $scope.books = data;
    // });

  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
