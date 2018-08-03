'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile','ngLoadScript'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/ctci/1_2_reverse.py.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/ctci/1_3_duplicate_characters.py.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/ctci/1_4_anagrams.py.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/ctci/1_5_spaces.py.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/ctci/1_7_matrix_0.py.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/ctci/1_8_substring_rotation.py.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/ctci/20_1_custom_add.py.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/the_tuple.py.html'});
		$routeProvider.when('/view9',{templateUrl:'partials/3_2_stack_with_minimum.py.html'});
       $routeProvider.when('/view10',{templateUrl:'partials/do_bytesio.py.html'});
	   $routeProvider.when("/view11",{templateUrl:'partials/do_stringio.py.html'});
	   $routeProvider.when("/view12",{templateUrl:'partials/use_json.py.html'});
	   $routeProvider.when("/view13",{templateUrl:'partials/28. multi line print.html'});
	   $routeProvider.when("/view14",{templateUrl:'partials/24. python lists vs tuples.html'});
	   $routeProvider.when("/view15",{templateUrl:'partials/P07_PrimeNumber.html'});
	   $routeProvider.when("/view16",{templateUrl:'partials/P13_Palindrome.html'});
	   $routeProvider.when("/view17",{templateUrl:'partials/P10_LCM.py.html'});
	   $routeProvider.when("/view18",{templateUrl:'partials/P17_EvenOdd.py.html'});
	   $routeProvider.when("/view19",{templateUrl:'partials/P72_PythonLambda.py.html'});
	  $routeProvider.when("/view20",{templateUrl:'partials/P12_DecimalToBinary.py.html'});
	  $routeProvider.when("/view21",{templateUrl:'partials/P34_Stack.py.html'});
	  $routeProvider.when("/view22",{templateUrl:'partials/P53_ShellSort.py.html'});
	  $routeProvider.when("/view23",{templateUrl:'partials/IQtest.html'});
		$routeProvider.when("/view24",{templateUrl:'partials/StringTask.html'});
	 $routeProvider.when("/view25",{templateUrl:'partials/k-String.html'});
		$routeProvider.when("/view26",{templateUrl:'partials/Magnets.html'});
		$routeProvider.when("/view27",{templateUrl:'partials/Word.html'});
		$routeProvider.when("/view28",{templateUrl:'partials/Towers.html'});
		$routeProvider.when("/view29",{templateUrl:'partials/Watermelon.html'});
		$routeProvider.when("/view30",{templateUrl:'partials/CollectingBeatsisFun.html'});
		$routeProvider.when("/view33",{templateUrl:'partials/logistic_regression1.html'});
		$routeProvider.when("/view34",{templateUrl:'partials/demo.html'});
		$routeProvider.when("/view35",{templateUrl:'partials/naive_bayes.html'});
		$routeProvider.when("/view36",{templateUrl:'partials/partitioning_around_medoids.html'});
	    $routeProvider.when("/view37",{templateUrl:'partials/restricted_boltzmann_machine.html'});
		$routeProvider.when("/view38",{templateUrl:'partials/multi_class_lda.html'});
		$routeProvider.when("/view39",{templateUrl:'partials/xgboost.html'});
		$routeProvider.when("/view40",{templateUrl:'partials/linear_regression1.html'});
		$routeProvider.when("/view41",{templateUrl:'partials/linear_discriminant_analysis.html'});
		$routeProvider.otherwise({redirectTo: '/'});
  }]);
  
  
  
myApp.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);

