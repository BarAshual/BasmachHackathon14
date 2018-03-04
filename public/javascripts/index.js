var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "/views/home.html",
            controller: "homeCtrl"
        })
        .when("/branches", {
            templateUrl: "/views/branches.html",
            controller: "branches"
        })
        .when("/stories", {
            templateUrl: "/views/stories.html"
        })
        .when("/contact", {
            templateUrl: "/views/contact.html"
        })
        .when("/gifts", {
            templateUrl: "/views/gifts.html"
        })
        .otherwise({redirect:"/home"});
});