'use strict';

/**
 * @ngdoc directive
 * @name infomofo.angularMdPullToRefresh.directive:imPullToRefresh
 * @description
 * # pullToRefresh
 */
angular.module('infomofo.angularMdPullToRefresh', [])
    .directive('imPullToRefresh', function ($timeout) {
      return {
        restrict: 'A',
        transclude: true,
        template: '<md-progress-linear md-mode="indeterminate" class="md-accent ng-hide im-pull-to-refresh-progress-bar" ng-show="pullToRefreshActive"></md-progress-linear><ng-transclude></ng-transclude>',
        scope: {
          refreshFunction: '&' // This function is expected to return a future
        },
        link: function postLink(scope, element, attrs) {

          scope.hasCallback = angular.isDefined(attrs.refreshFunction);
          scope.isAtTop = false;
          scope.pullToRefreshActive = false;
          scope.lastScrollTop = 0;

          scope.pullToRefresh = function () {
            if (scope.hasCallback) {
              if (!scope.pullToRefreshActive) {
                scope.pullToRefreshActive = true;
                scope.refreshFunction().then(function () {
                  scope.pullToRefreshActive = false;
                });
                scope.$digest();
              }
            }

          };

          // Wait 1 second and then add an event listener to the scroll events on this list- this enables pull to refresh functionality
          $timeout(function () {
            var onScroll = function (event) {
              if (element[0].scrollTop <= 0 && scope.lastScrollTop <= 0) {
              //uncomment this line for desktop testing
              //if (element[0].scrollTop <= 0) {
                if (scope.isAtTop) {
                  scope.pullToRefresh();
                } else {
                  scope.isAtTop = true;
                }
              }
              scope.lastScrollTop = element[0].scrollTop;
            };
            element[0].addEventListener('scroll', onScroll);
            element[0].addEventListener('touchmove', onScroll);
          }, 1000);




        }
      };
    });
