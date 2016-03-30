angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MountainsCtrl', function($scope, Mountains) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.mountains = Mountains.all();
  $scope.remove = function(mountain) {
    Mountains.remove(mountain);
  };
})

.controller('MountainDetailCtrl', function($scope, $stateParams, Mountains) {
  $scope.mountain = Mountains.get($stateParams.mountainId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
