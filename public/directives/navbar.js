angular.module("myApp");

app.controller("myCtrl", ["$scope", function () {

    $(document).ready(function () {
        $('#nav-icon4, #navLeave').click(function () {
            $(this).toggleClass('open');
        }).mouseleave(function () {
            $(this).toggleClass('open');
        });
    });

}]);


app.directive("myNav", function () {
    return {
        restrict: "E",
        templateUrl: "/directives/navbar.html"

    }
})
