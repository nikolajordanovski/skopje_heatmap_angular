var myApp = angular.module('myApp', [
	'ngRoute']).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix();
    $routeProvider.when('/', {
        templateUrl: 'partials/index_partal.html'
    });
    $routeProvider.when('/about_us', {
        templateUrl: 'partials/index_partal.html'
    });
    $routeProvider.when('/heatmap', {
        templateUrl: 'partials/heatmap.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });

	}]);
myApp.controller('SlideController', ['$scope', '$location', function ($scope, $location) {
    $scope.go = function (hash) {
        $location.path(hash);
    }
}]);

function MainControler($scope) {}