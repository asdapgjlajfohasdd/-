/**
 * ownCloud - Music app
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Pauli Järvinen <pauli.jarvinen@gmail.com>
 * @copyright 2018 Pauli Järvinen
 *
 */

angular.module('Music').directive('resizeNotifier', ['$rootScope', function($rootScope) {
	return function(scope, element, attrs, ctrl) {
		element.resize(function() {
			$rootScope.$emit('resize', element);
		});
	};
}]);
