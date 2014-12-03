var module = angular.module('ButBrendan', []);

module.controller('ButBrendan', function ($scope) {
	var parameters = {};
	window.location.search.replace(/^\?/, '').split('&').forEach(function (pair) {
		pair = pair.split(/\=/);
		if (pair.length == 2) {
			parameters[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
		}
	});

	$scope.what = parameters.what || '';
});
