(function () {
  var app = angular.module('app', []);

  app.controller('RandomController', [
    '$scope',
    '$http',

    function ($scope, $http) {
      var choices = [];

      $scope.choose = function () {
        var num = Math.floor(Math.random() * choices.length);

        $scope.className = 'Skin--' + num % 3;
        $scope.choice = choices[num];
      };

      $scope.keyChoose = function ($event) {
        if ($event.charCode === 32) { // Space bar
          $scope.choose();
        }
      };

      $http.get('api/data.json').success(function (data) {
        choices = data;
        $scope.choose();
      });
    }
  ]);
})();
