(function() {
  'use strict';

  angular
    .module('classApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('1', {
        url: '/week1',
        templateUrl: 'app/weekPages/week.1.html',
      })
      .state('2', {
        url: '/week2',
        templateUrl: 'app/weekPages/week.2.html',
      })
      .state('3', {
        url: '/week3',
        templateUrl: 'app/weekPages/week.3.html',
      })
      .state('4', {
        url: '/week4',
        templateUrl: 'app/weekPages/week.4.html',
      })
      .state('5', {
        url: '/week5',
        templateUrl: 'app/weekPages/week.5.html',
      })
      .state('6', {
        url: '/week6',
        templateUrl: 'app/weekPages/week.6.html',
      });




    $urlRouterProvider.otherwise('/');
  }

})();
