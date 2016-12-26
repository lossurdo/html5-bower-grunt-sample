angular.module('MyModule', ['AppModule'])

.controller('MyController', ['$scope', function($scope) {
	
	$scope.hello = 'Hello World from $scope!';

}]);