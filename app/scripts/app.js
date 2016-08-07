'use strict';

/**
 * @ngdoc overview
 * @name finalApp
 * @description
 * # finalApp
 *
 * Main module of the application.
 */
angular
  .module('finalApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'

      })
      .when('/page2',{
        templateUrl: 'views/page2.html',
        
      })

      .when('/page3',{
        templateUrl: 'views/page3.html',
      })

      .when('/page4',{
        templateUrl: 'views/page4.html',
      })

      .when('/acerca', {
        templateUrl: 'views/acerca.html',
      })

      .when('/contacto', {
        templateUrl: 'views/contacto.html',
      })



      .otherwise({
        redirectTo: '/'
      });
  });
