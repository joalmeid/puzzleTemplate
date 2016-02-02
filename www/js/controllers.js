angular.module('starter.controllers', [])

.controller('GameCtrl', function($scope) {})

.controller('ImagesCtrl', function($scope, Images) {

  $scope.images = Images.all();
  $scope.remove = function(image) {
    Images.remove(image);
  };
})

.controller('ImageDetailCtrl', function($scope, $stateParams, Images) {
  $scope.image = Images.get($stateParams.imageId);
})

.controller('SettingsCtrl', function($scope) {
  $scope.allowedDims = [3,4,5,6,7,8,9];
});
