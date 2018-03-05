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
        .when("/luz", {
            templateUrl: "/views/luz.html",
            controller: "luzCtrl"
        })
        .otherwise({
            redirect: "/home"
        });
});

app.controller("index", function () {
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }
});
