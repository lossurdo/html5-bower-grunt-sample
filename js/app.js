angular.module('AppModule', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {     
    $routeProvider.
        when('/one', {
            templateUrl: 'partials/partial-one.html',
            controller: 'MyController'
        }).
        when('/two', {
            templateUrl: 'partials/partial-two.html',
            controller: 'MyController'
        }).
        otherwise({
            redirectTo: '/'
        });
}])


.controller('AppController', ['$scope', function($scope){
	
}])


.directive('myDirective', function(){
	return {
		scope: {
			text: '@'
		},
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'templates/my-directive.html'
	};
})

;