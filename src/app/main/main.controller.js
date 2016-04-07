(function() {
  'use strict';

  angular
    .module('classApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1459661127236;
    vm.showToastr = showToastr;

    vm.weekList = [
      {week:1, description:"Quick overview of Angular, MVC/MV*, and initial your first Angular app"},
      {week:2, description:"TBA"},
      {week:3, description:"TBA"},
      {week:4, description:"TBA"},
      {week:5, description:"TBA"},
      {week:6, description:"TBA"}

    ]


    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
