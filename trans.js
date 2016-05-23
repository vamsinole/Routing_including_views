var app = angular.module("myApp",['pascalprecht.translate']);

app.config(function ($translateProvider) {
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
});

app.controller('translateCtrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
});