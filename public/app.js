var app = angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/intro", {
            templateUrl: "routing/components/home/home.html",
            controller: "homeController"
        })
        .when("/contact", {
            templateUrl: "routing/components/contact/contact.html",
            controller: "contactController"
        })
        .when("/projects", {
            templateUrl: "routing/components/projects/projects.html",
            controller: "projectsController"
        })
        .otherwise({
            redirectTo: "/intro"
        });
}])
