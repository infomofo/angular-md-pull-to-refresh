'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngTouch',
    'ngMaterial',
    'infomofo.angularMdPullToRefresh'
])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
          .primaryPalette('green')
          .accentPalette('orange');
    });