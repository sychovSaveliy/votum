var data_page = {
    logo: {
        url: "http://pngimg.com/upload/car_logo_PNG1667.png"
    },
    menu: {
        item1: {
            name: "Главная",
            url: "#",
            src: "views/content/mainContent.html"
        },
        item2: {
            name: "Проекты",
            url: "#",
            src: "views/content/projectContent.html"
        },
        item3: {
            name: "Команда",
            url: "#",
            src: "views/content/teamContent.html"
        }
    }
};


var myApp = angular.module('myApp');
myApp.controller('headerCtrl', function ($scope) {

    $scope.model = data_page;

    $scope.clickHandler = function (url) {
        $scope.$emit("changeMenu", url);
    }

});