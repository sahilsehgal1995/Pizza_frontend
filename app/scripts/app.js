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
        .state('PIZZA', {
            templateUrl: "views/main.html",
            url: "",
            abstract: true,
            controller: 'MainCtrl as vm'
        })
        .state('PIZZA.HOME', {
            templateUrl: "views/home/home.html",
            controller: "HomeCtrl as vm",
            url: "/home"
        })
        .state('PIZZA.ORDER', {
            templateUrl: "views/cart/order.html",
            controller: "CartOrderCtrl as vm",
            url: "/cart"
        });
  });
