angular-md-pull-to-refresh
--------------------------

angular-md-pull-to-refresh gives you an angular directive that can be attached to a scrollable element (such as an md-content)
and provides a pull-to-refresh functionality.

How do I use it
===============

1. bower install infomofo/angular-md-pull-to-refresh
2. include the service in your angular module config

        var app = angular.module('YourApp',['infomofo.angularMdPullToRefresh']);

3. Use the directive in your html file.

        <md-content im-pull-to-refresh refresh-function="refreshFunction()">

See a demo
==========

On a mobile device you can visit our gh-page to see a [live demo](https://infomofo.github.io/angular-md-pull-to-refresh/app/) of a pull-to-refresh gesture.

How do I affect the appearance
==============================

Currently the directive injects an md-progress-bar with the md-accent color.  You can style the css of the progress-bar
or the animation around by modifying the following classes, such as:

        .im-pull-to-refresh-progress-bar {
            max-height: 5px;
            opacity: 1;
        }

        .im-pull-to-refresh-progress-bar.ng-hide-add.ng-hide-add-active,
        .im-pull-to-refresh-progress-bar.ng-hide-remove.ng-hide-remove-active {
            -webkit-transition: all linear 0.25s;
            transition: all linear 0.25s;
        }

        .im-pull-to-refresh-progress-bar.ng-hide {
            max-height: 0;
            opacity: 0;
        }