
function calculator(p,r,t){
                this.p=p;
                this.rate=r;
                this.time=t;
                this.emi=function (){

                //dividing r by 1200 so that we can get the tenure percentage in months.

                r=r/(1200);
                var c=Math.pow((1+r),t);
                var e=p*r*c;
            e=e/(c-1);
            return(e);
           };

    }



/**
function for tabular display.
*/


 function tableDisplay()
 {
     this.tablecreate=function (e) {
        //body reference
        var d=new Date();
        var f=e;


        /**
        Array for months.
        */

        var months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
        var interest=(this.p)*(this.rate)/1200;
       var prin=f-interest;
        var loanpaid=(prin/(this.p))*100;
        var body = document.getElementsByTagName("body")[0];

        // create elements <table> and a <tbody>
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");

        // cells creation
        for (var j = 0; j <= this.time; j++) {
            // table row creation
            var row = document.createElement("tr");

            for (var i = 0; i < 6; i++) {
                // create element <td> and text node
                //Make text node the contents of <td> element
                // put <td> at end of the table row
             var cell = document.createElement("td");
                  if(i==0)
                  {
                      if(j==0)
                    {var cellText = document.createTextNode("Month");}
                    else
                    {var cellText = document.createTextNode(months[d.getMonth()]);
                      // setting the month.
                   d.setMonth( d.getMonth() + 1)}
                  }
                  else if (i==1)
                     { if(j==0)
                    {var cellText = document.createTextNode("Principal");}else {

                    //to display the principal amount
                      var cellText = document.createTextNode((prin).toFixed(2));}}
                   else if(i==2)
                     { if(j==0)
                    {var cellText = document.createTextNode("Interest");}
                      else
                        //to display the interest
                          var cellText = document.createTextNode((interest).toFixed(2));
                      }
                   else if(i==3)
                     { if(j==0)
                    {
                      var cellText = document.createTextNode("Principal + Interest");}
                      else
                        //to display the sum of principal amount and interest.
                      var cellText = document.createTextNode((prin + interest).toFixed(2));
                    }
                   else if(i==4)
                    {
                      if(j==0)
                        var cellText = document.createTextNode("Balance");
                        else
                    {
                      //this is to display the balance.
                      var cellText = document.createTextNode((this.p-prin).toFixed(2));this.p=this.p-prin;}
                    }
                   else
                     {if(j==0)
                      var cellText = document.createTextNode("loanpaid");
                      else
                     var cellText = document.createTextNode(loanpaid.toFixed(2));
                      }
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
              interest=(this.p)*(this.rate)/1200;
            prin=f-interest;
            //row added to end of table body
            tblBody.appendChild(row);
            loanpaid=(prin/(this.p))*100;

        }

        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        body.appendChild(tbl);
        // tbl border attribute to
        tbl.setAttribute("border", "2");
    }
  }



        function myFunction()
        {

            /**
            getting the user entered values.
            */

            var entered_loan_amount = parseFloat(document.getElementById("loan_amount").value);
            var entered_rate = parseFloat(document.getElementById("rate").value);
            var entered_term = parseFloat(document.getElementById("loan_term").value);

            /**
            checking wheather user enterd correct values or not.
            */
            if(!entered_loan_amount || !entered_rate || !entered_term ){
              document.getElementById("error").innerHTML = "Please enter correct values";
            }

            else {

            document.getElementById("error").innerHTML = "";
            var first=new calculator(entered_loan_amount,entered_rate,entered_term);
            var e=first.emi();

            //printing the values.

            document.getElementById("emi_show").innerHTML=e.toFixed(2);
            document.getElementById("total_show").innerHTML=((e*first.time)-first.p).toFixed(2);
            document.getElementById("interest_show").innerHTML=(e*first.time).toFixed(2);


      var inheritsFrom = function (child, parent) {
          child.prototype = new parent(entered_loan_amount,entered_rate,entered_term);
          };


      //console.log(b.p);
      inheritsFrom(tableDisplay, calculator);
      var b = new tableDisplay();
      b.tablecreate(e);

    }
  }


var routerApp = angular.module('routerApp', ['ui.router','pascalprecht.translate']);

routerApp.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

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

        .state('if',{
            url: '/if',
            templateUrl: 'if.html'
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

routerApp.controller('ctrl', ['$scope', '$translate', function ($scope, $translate) {
  $scope.changeLang = function (key) {
    $translate.use(key);
  };
}]);

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
