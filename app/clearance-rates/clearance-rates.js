'use strict';

angular.module('myApp.clearance-rates', ['ngRoute', 'googlechart'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/clearance-rates', {
		templateUrl: 'clearance-rates/clearance-rates.html',
		controller: 'ClearanceRatesCtrl'
	});
}])

.controller('ClearanceRatesCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
	var baseUrl = 'http://' + $location.host() + ':8080';
	var statesBaseUrl = baseUrl + '/murder-data-service/states';
	var countiesBaseUrl = baseUrl + '/murder-data-service/counties';
	var agenciesBaseUrl = baseUrl + '/murder-data-service/agencies';
	var clearanceRatesBaseUrl = baseUrl + '/murder-data-service/clearancerates';

	$scope.sum = function(items, property) {
		return items.reduce(function(a, b) {
			return a + b[property];
		}, 0);
	}

	$http.get(statesBaseUrl)
		.success(
			function(data, status) {
				$scope.states = data;
			}
		)
	;
	
	$scope.myChartObject = {};
	$scope.myChartObject.type = "ColumnChart";
	$scope.myChartObject.data = {
		"cols": [
			{id: "y", label: "Year", type: "string"},
			{id: "c", label: "Clearances", type: "number"},
			{id: "m", label: "Unsolved Murders", type: "number"}
		],
		"rows": [] 
	};

	$scope.myChartObject.options = {
		title: 'Entire Country',
		isStacked: true,
		bar: { groupWidth: '75%' },
		chartArea: { left: 50 }
	};

	$scope.agencyChanged = function (selectedState, selectedCounty, selectedAgency) {
		var chartTitle = '';
		var clearanceRatesUrl = clearanceRatesBaseUrl;

		if (selectedState) {
			var countiesUrl = statesBaseUrl + '/' + selectedState.id + '/counties';
			clearanceRatesUrl += '/' + selectedState.abbreviation;

			chartTitle = selectedState.name;

			if (selectedCounty) {
				var agenciesUrl = countiesBaseUrl + '/' + selectedCounty.id + '/agencies';
				clearanceRatesUrl += '/' + selectedCounty.name;

				chartTitle = selectedCounty.name + ', ' + selectedState.abbreviation;

				if (selectedAgency) {
					clearanceRatesUrl += '/' +  selectedAgency.name;
					chartTitle = selectedAgency.name + ', ' + chartTitle;
				} else {
					$http.get(agenciesUrl)
						.success(
							function(data, status) {
								$scope.agencies = data;
							}
						)
					;
					
				}
			} else {
				$http.get(countiesUrl)
					.success(
						function(data, status) {
							$scope.counties = data;
						}
					)
				;

				$scope.agencies = [];
			}
		} else {
			$scope.counties = [];
			$scope.agencies = [];
			chartTitle = 'Entire Country';
		}

		
		$http.get(clearanceRatesUrl)
			.success(
				function(data, status) {
					var clearancerates = {};
					for (var i = 1965; i < 2015; i++) {
						var clearancerate = {year: i, murders: 0, clearances: 0};
						
						clearancerates[i] = clearancerate;
					}
					
					clearancerates = data.reduce(function(total, current) {
						total[current.year] = current;
						return total;
					}, clearancerates);
					
					$scope.totalHomicides = $scope.sum(data, 'murders');
					$scope.totalClearances = $scope.sum(data, 'clearances');
					$scope.percentSolved = $scope.totalClearances / $scope.totalHomicides;

					var rows = [];
					$.each(clearancerates, function(year, clearancerate) {
						var row = {
							c: [
								{v: year.toString()},
								{v: clearancerate.clearances},
								{v: Math.max(clearancerate.murders - clearancerate.clearances, 0)}
							]
						};
						rows.push(row);
					});
					
					$scope.myChartObject.data.rows = rows;
					$scope.myChartObject.options.title = chartTitle;
				}
			)
			.error(
				function(data, status) {
					var error = status;
				}
			)
		;
	}
	
	$scope.countyChanged = function (selectedState, selectedCounty) {
		$scope.agencyChanged(selectedState, selectedCounty);
	}

	$scope.stateChanged = function (selectedState) {
		$scope.countyChanged(selectedState);
	}

	$scope.stateChanged();

}])
.filter('percentage', ['$filter', function($filter) {
	return function(input, decimals) {
		return $filter('number')(input * 100, decimals) + '%';
	};
}]);
