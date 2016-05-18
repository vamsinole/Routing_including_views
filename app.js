var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

            .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
            })

            .state('home.paragraph', {
            url: '/paragraph',
            template: 'This is a paragraph.'
            })

        .state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'partial-about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { templateUrl: 'nole.html' },

            // for column two, we'll define a separate controller
            'columnTwo@about': {
                templateUrl: 'table-data.html',
                controller: 'scotchController'
            },
            'columnThree@about' : {
                templateUrl : 'three.html'
            }
        }

    });


});

routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Vamshi',
            salary: 25000
        },
        {
            name: 'Ankur',
            salary: 25000
        },
        {
            name: 'Tarang',
            salary: 25000
        }
    ];

});