'use strict';

/**
 * @ngdoc overview
 * @name pizzaApp
 * @description
 * # pizzaApp
 *
 * Main module of the application.
 */
angular
  .module('pizzaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ui.router',
    'ngMaterial'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('SPOT', {
            templateUrl: "views/main.html",
            url: "",
            abstract: true,
            controller: 'MainCtrl as vm'
        })
        .state('SPOT.HOME', {
            templateUrl: "views/home/home.html",
            controller: "HomeCtrl as vm",
            url: "/home"
        });
  });
