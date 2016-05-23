var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider,$translateProvider) {


     $translateProvider.translations('en', {
    TITLE: 'Hello',
    FOO: 'This is a paragraph.A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea.',
    BUTTON_LANG_EN: 'English',
    BUTTON_LANG_HI: 'Hindi',
    BUTTON_LANG_TE: 'Telugu'
      });
      $translateProvider.translations('hi', {
        TITLE: 'नमस्ते',
        FOO: 'यह एक पैरा है एक पैरा संबंधित वाक्य एक केंद्रीय विचार के विकास की एक श्रृंखला है , विषय का आह्वान किया। विषयगत एकता के मामले में पैराग्राफ के बारे में सोचने के लिए प्रयास करें: एक पैरा एक वाक्य या एक केंद्रीय , एकीकृत विचार का समर्थन करता है कि वाक्य का एक समूह है।',
        BUTTON_LANG_EN: 'अंग्रेज़ी',
        BUTTON_LANG_HI: 'हिंदी',
        BUTTON_LANG_TE: 'तेलुगु'
      });
      $translateProvider.translations('te', {
        TITLE : 'హలో',
        FOO : 'ఈ ఒక పేరా ఉంది.పేరా సంబంధిత వాక్యాలు కేంద్ర ఆలోచన అభివృద్ధి సిరీస్, విషయం అని. నేపథ్య ఐక్యత పరంగా పేరాలు గురించి ఆలోచించడం ప్రయత్నించండి : ఒక పేరా ఒక వాక్యం లేదా ఒక కేంద్ర , ఏకీకృత ఆలోచన మద్దతిచ్చే వాక్యాల సమూహం.',
        BUTTON_LANG_EN: 'ఇంగ్లీష్',
        BUTTON_LANG_HI: 'హిందీ',
        BUTTON_LANG_TE: 'తెలుగు'
      })
      $translateProvider.preferredLanguage('en');

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

        .state('rankings',{
            url: '/rankings',
            templateUrl: 'tennis-rankings.html',
            controller: 'Ctrl'
        })

        .state('form',{
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formCtrl'
        })
        .state('translator',{
            url: '/translator',
            templateUrl: 'translate.html'
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


routerApp.controller('Ctrl', ['$http','$scope', function($http,$scope){

    $http.get("players.json").success(function(data){

            $scope.players = data;
        });

        $scope.orderProp = 'rank';
    
}]);


routerApp.controller('formCtrl', ['$scope', function($scope){

    $scope.submitForm = function(isValid){
        if (isValid) {
      document.getElementById('result').innerHTML = "Your Form is Amazing";
    }
    }
    
}]);

routerApp.controller('Ctrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
});