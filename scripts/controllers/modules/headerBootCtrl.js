var myApp = angular.module('myApp');
myApp.controller('headerBootCtrl', function ($scope) {
    $scope.header_cont_url = "views/header/index.html"
    $scope.content_url = "views/content/mainContent.html"
})
