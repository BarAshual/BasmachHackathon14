var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home.html", {
            templateUrl: "home.html",
            controller: "homeCtrl"
        })
        .when("/branches", {
            templateUrl: "/branches.html",
            controller: "branches"
        })
        .when("/stories", {
            templateUrl: "stories.html"
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })
        .when("/gifts", {
            templateUrl: "gifts.html"
        })
        .otherwise({
        redirect:"home.html"
    })
});

app.controller('homeCtrl', function($scope) {
    $scope.showHome = true;
    
    $scope.home = function(bool){
        $scope.showHome = bool;
    };
});